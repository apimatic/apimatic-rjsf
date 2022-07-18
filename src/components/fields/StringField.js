import React from "react";
import PropTypes from "prop-types";

import {
  getWidget,
  getUiOptions,
  isSelect,
  optionsList,
  getDefaultRegistry,
  isDiscriminator,
} from "../../utils";

class StringField extends React.Component {
  _onChange = value => {
    const { onChange, required, uiSchema } = this.props;
    const { emptyValue } = getUiOptions(uiSchema);

    if (value === undefined && required) {
      return onChange("");
    }
    return onChange(value === "" ? emptyValue : value);
  };

  setDiscriminatorValue = () => {
    const { discriminatorObj = {}, formData, name } = this.props;
    const { value: discriminatorValue } = discriminatorObj;

    if (isDiscriminator(name, discriminatorObj) && !formData) {
      setTimeout(() => {
        this._onChange(discriminatorValue);
      }, 0);
    }
  };

  componentDidUpdate() {
    this.setDiscriminatorValue();
  }

  componentDidMount() {
    this.setDiscriminatorValue();
  }

  render() {
    const {
      schema,
      name,
      uiSchema,
      idSchema,
      formData,
      required,
      disabled,
      readonly,
      autofocus,
      onBlur,
      onFocus,
      registry = getDefaultRegistry(),
    } = this.props;
    const { title, format } = schema;
    const { widgets, formContext, dxInterface } = registry;
    const enumOptions = isSelect(schema, dxInterface) && optionsList(schema);
    const defaultWidget = format || (enumOptions ? "select" : "text");
    const {
      widget = defaultWidget,
      placeholder = "",
      ...options
    } = getUiOptions(uiSchema);
    const Widget = getWidget(schema, widget, widgets);

    return (
      <Widget
        options={{ ...options, enumOptions }}
        schema={schema}
        id={idSchema && idSchema.$id}
        label={title === undefined ? name : title}
        value={formData}
        onChange={this._onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
        disabled={disabled}
        readonly={readonly}
        formContext={formContext}
        autofocus={autofocus}
        registry={registry}
        placeholder={placeholder}
      />
    );
  }
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  StringField.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object.isRequired,
    idSchema: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    formData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dxInterface: PropTypes.shape({
      registry: PropTypes.shape({
        widgets: PropTypes.objectOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object])
        ).isRequired,
        fields: PropTypes.objectOf(PropTypes.func).isRequired,
        definitions: PropTypes.object.isRequired,
        formContext: PropTypes.object.isRequired,
      }),
    }),
    formContext: PropTypes.object.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
  };
}

StringField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false,
};

export default StringField;
