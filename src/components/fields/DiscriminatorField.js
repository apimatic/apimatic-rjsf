import React from "react";
import PropTypes from "prop-types";
import {
  getDefaultFormState,
  isObject,
  checkDiscriminator,
  prefixClass
} from "../../utils";

class DiscriminatorField extends React.Component {
  state;
  constructor(props) {
    super(props);
    const altSchema = props.schema.oneOf || props.schema.anyOf;
    this.state = {
      selectedSchema: {
        index: 0,
        schema: altSchema[0]
      }
    };
  }

  onDiscriminatorChange = value => {
    const { onChange, formData } = this.props;

    return (value, options, schemaIndex) => {
      let newFormData;
      if (
        this.state.selectedSchema.schema &&
        this.state.selectedSchema.schema.hasOwnProperty("oneOf" || "anyOf")
      ) {
        if (schemaIndex) {
          newFormData = {
            ...formData,
            $$__case: schemaIndex,
            value: value
          };
        } else {
          newFormData = {
            ...formData,
            value: value
          };
        }
      } else {
        if (checkDiscriminator(value)) {
          newFormData = {
            ...formData,
            value
          };
        } else {
          newFormData = value;
        }
      }

      onChange(
        newFormData,
        { validate: false },
        this.state.selectedSchema.index
      );
    };
  };

  renderSchema = () => {
    const {
      disabled,
      errorSchema,
      formData,
      idPrefix,
      idSchema,
      onBlur,
      onFocus,
      registry,
      uiSchema
    } = this.props;
    const _SchemaField = registry.fields.SchemaField;

    return this.state && formData ? (
      <_SchemaField
        schema={this.state.selectedSchema.schema}
        uiSchema={uiSchema}
        errorSchema={errorSchema}
        idSchema={idSchema}
        idPrefix={idPrefix}
        formData={formData.value}
        onChange={this.onDiscriminatorChange()}
        onBlur={onBlur}
        onFocus={onFocus}
        registry={registry}
        disabled={disabled}
        schemaIndex={this.state.selectedSchema.index}
        depth={this.props.depth + 1}
      />
    ) : (
      <p>schema or formdata not available</p>
    );
  };

  selectOnChange = e => {
    const { onChange, options, definitions, formData } = this.props;
    console.log(options);
    this.setState({
      selectedSchema: e
    });

    let defaultFormState;
    if (e.schema.type === "object") {
      // Retain matching object keys
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
    } else if (e.schema && e.schema.hasOwnProperty("oneOf" || "anyOf")) {
      defaultFormState = getDefaultFormState(
        e.schema,
        {
          ...formData,
          value: {
            $$__case: 0,
            value: undefined
          }
        },
        definitions,
        e.index
      );
    } else {
      if (formData) {
        defaultFormState = getDefaultFormState(
          e.schema,
          {
            $$__case: e.index,
            value: undefined
          },
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
    }

    if (isObject(defaultFormState) && checkDiscriminator(defaultFormState)) {
      onChange(defaultFormState.value, { validate: true }, e.index);
    } else {
      onChange(defaultFormState, { validate: true }, e.index);
    }
  };

  render() {
    const { disabled, required, registry, schema } = this.props;
    const _SelectWidget = registry.widgets.SelectWidget;
    const altSchema = schema.oneOf || schema.anyOf;

    const selectOptions = altSchema.reduce((optionList, schema, index) => {
      const label = schema.title ? schema.title : `Option ${index + 1}`;
      optionList.push({
        label,
        value: {
          index: index,
          schema: schema
        }
      });
      return optionList;
    }, []);

    return (
      <fieldset
        className={prefixClass(
          `${this.props.isEven ? "even" : "odd"} depth_${
            this.props.depth
          } discriminator-field`
        )}
      >
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
      </fieldset>
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
