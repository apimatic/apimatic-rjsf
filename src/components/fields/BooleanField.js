import React from "react";
import PropTypes from "prop-types";

import {
  getWidget,
  getUiOptions,
  optionsList,
  getDefaultRegistry
} from "../../utils";

function BooleanField(props) {
  const {
    schema,
    name,
    uiSchema,
    formData,
    registry = getDefaultRegistry(),
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
    anyOfTitle
  } = props;
  const { title } = schema;
  const { widgets, formContext } = registry;
  const { widget = "checkbox", ...options } = getUiOptions(uiSchema);
  const Widget = getWidget(schema, widget, widgets);
  const enumOptions = optionsList({
    enum: [true, false],
    enumNames: schema.enumNames || ["yes", "no"]
  });
  return (
    <Widget
      options={{ ...options, enumOptions }}
      schema={schema}
      onChange={onChange}
      label={title === undefined ? name : title}
      value={formData}
      required={required}
      disabled={disabled}
      readonly={readonly}
      registry={registry}
      formContext={formContext}
      autofocus={autofocus}
      anyOfTitle={anyOfTitle}
    />
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  BooleanField.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    dxInterface: PropTypes.shape({
      registry: PropTypes.shape({
        widgets: PropTypes.objectOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object])
        ).isRequired,
        fields: PropTypes.objectOf(PropTypes.func).isRequired,
        definitions: PropTypes.object.isRequired,
        formContext: PropTypes.object.isRequired
      })
    })
  };
}

BooleanField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};

export default BooleanField;
