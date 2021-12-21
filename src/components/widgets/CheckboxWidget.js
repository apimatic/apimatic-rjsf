import React from "react";
import PropTypes from "prop-types";
import DescriptionField from "../fields/DescriptionField.js";
import { prefixClass as pfx } from "../../utils";
import DataType from "../fields/DataType";
import { Label } from "../fields/SchemaField";

function CheckboxWidget(props) {
  const {
    schema,
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
    anyOfTitle
  } = props;

  const dataType = schema.dataTypeDisplayText
    ? schema.dataTypeDisplayText
    : schema.type;
  return (
    <div>
      {label && (
        <div className={pfx("field-header")}>
          <Label label={label} required={required} id={id} />
          {required && (
            <div className={pfx("element-required")}>
              <span>Required</span>
            </div>
          )}
        </div>
      )}
      <div className={pfx("type-container")}>
        <DataType title={dataType} link={schema.dataTypeLink} type="schema" />

        {schema.paramType && (
          <div className={pfx("param-type")}>{schema.paramType}</div>
        )}
      </div>

      {schema.description && (
        <DescriptionField description={schema.description} />
      )}

      <div
        className={pfx(`checkbox ${disabled || readonly ? "disabled" : ""}`)}
      >
        <div className={pfx(`checkbox-title`)}>
          <label>
            <input
              type="checkbox"
              id={id}
              checked={typeof value === "undefined" ? false : value}
              required={required}
              className={value ? "checked" : "unchecked"}
              disabled={disabled || readonly}
              autoFocus={autofocus}
              onChange={event => onChange(event.target.checked)}
            />
            <span />
          </label>
          <div>{label || anyOfTitle}</div>
        </div>
      </div>
    </div>
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false
};

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func
  };
}

export default CheckboxWidget;
