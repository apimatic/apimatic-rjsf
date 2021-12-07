import React from "react";
import PropTypes from "prop-types";
import { getDefaultFormState, isObject } from "../../utils";

class DiscriminatorField extends React.Component {
  state;
  constructor(props) {
    super(props);
    console.log(props);
    const altSchema = props.schema.oneOf || props.schema.anyOf;
    this.state = {
      selectedSchema: {
        index: 0,
        schema: altSchema[0]
      }
    };
  }

  renderSchema = () => {
    const {
      disabled,
      errorSchema,
      formData,
      idPrefix,
      idSchema,
      onBlur,
      onChange,
      onFocus,
      registry,
      uiSchema
    } = this.props;
    const _SchemaField = registry.fields.SchemaField;

    return this.state ? (
      <_SchemaField
        schema={this.state.selectedSchema.schema}
        uiSchema={uiSchema}
        errorSchema={errorSchema}
        idSchema={idSchema}
        idPrefix={idPrefix}
        formData={formData.value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        registry={registry}
        disabled={disabled}
        schemaIndex={this.state.selectedSchema.index}
      />
    ) : (
      <p>schema not available</p>
    );
  };

  selectOnChange = e => {
    const { onChange, options, definitions } = this.props;
    console.log(options);
    this.setState({
      selectedSchema: e
    });

    let defaultFormState = null;
    if (e.schema.type === "object") {
      // for (let key in formData) {
      //   if (defaultFormState.hasOwnProperty(key)) {
      //     defaultFormState = {
      //       ...defaultFormState,
      //       [key]: formData[key]
      //     };
      //   }
      // }
      defaultFormState = getDefaultFormState(
        e.schema,
        {},
        definitions,
        e.index
      );
    } else if (e.schema.type === "array") {
      defaultFormState = getDefaultFormState(
        e.schema,
        [],
        definitions,
        e.index
      );
    } else {
      defaultFormState = getDefaultFormState(
        e.schema,
        undefined,
        definitions,
        e.index
      );
    }

    if (
      isObject(defaultFormState) &&
      defaultFormState.hasOwnProperty("$$__case")
    ) {
      onChange(defaultFormState.value, { validate: true }, e.index);
    } else {
      onChange(defaultFormState, { validate: true }, e.index);
    }
  };

  render() {
    const { disabled, required, registry, schema } = this.props;
    const _SelectWidget = registry.widgets.SelectWidget;
    const altSchema = schema.oneOf || schema.anyOf;

    const selectOptions = altSchema.reduce((optionList, schema, i) => {
      const label = schema.title ? schema.title : `Option ${i + 1}`;
      optionList.push({
        label,
        value: {
          index: i,
          schema: schema
        }
      });
      return optionList;
    }, []);

    return (
      <div>
        <_SelectWidget
          schema={schema}
          id={altSchema[0].title}
          options={{ enumOptions: selectOptions }}
          value={selectOptions[0]}
          required={required}
          disabled={disabled}
          readonly={false}
          multiple={false}
          onChange={this.selectOnChange}
          placeholder={altSchema[0].title}
        />
        {this.renderSchema()}
      </div>
    );
  }
}

/* istanbul ignore else */
DiscriminatorField.defaultProps = {
  disabled: false,
  errorSchema: {},
  idSchema: {},
  uiSchema: {}
};

if (process.env.NODE_ENV !== "production") {
  DiscriminatorField.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    baseType: PropTypes.string,
    uiSchema: PropTypes.object,
    idSchema: PropTypes.object,
    formData: PropTypes.any,
    errorSchema: PropTypes.object,
    registry: PropTypes.shape({
      fields: PropTypes.objectOf(PropTypes.func).isRequired,
      definitions: PropTypes.object.isRequired,
      formContext: PropTypes.object.isRequired
    })
  };
}

export default DiscriminatorField;
