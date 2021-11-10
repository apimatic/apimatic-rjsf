import React from "react";
import PropTypes from "prop-types";

class DiscriminatorField extends React.Component {
  state;
  constructor(props) {
    super(props);
    console.log(props);
    const altSchema = props.schema.oneOf || props.schema.anyOf;
    this.state = {
      selectedSchema: altSchema[0]
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
        schema={this.state.selectedSchema}
        uiSchema={uiSchema}
        errorSchema={errorSchema}
        idSchema={idSchema}
        idPrefix={idPrefix}
        formData={formData}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        registry={registry}
        disabled={disabled}
      />
    ) : (
      <p>schema not available</p>
    );
  };

  selectOnChange = e => {
    this.setState({
      selectedSchema: e
    });
  };

  render() {
    const { disabled, required, registry, schema } = this.props;
    const _SelectWidget = registry.widgets.SelectWidget;
    const altSchema = schema.oneOf || schema.anyOf;
    const selectOptions = altSchema.reduce((optionList, schema, i) => {
      optionList.push({
        label: schema.title,
        value: schema
      });
      return optionList;
    }, []);

    console.log(selectOptions);

    return (
      <div>
        <_SelectWidget
          schema={schema}
          id={altSchema[0].title}
          options={{ enumOptions: selectOptions }}
          value=""
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
