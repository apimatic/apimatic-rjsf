import React from "react";
import PropTypes from "prop-types";
import DescriptionField from "../fields/DescriptionField.js";
import { prefixClass as pfx } from "../../utils";
import TitleField from "../fields/TitleField";
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
    formContext,
    onChange
  } = props;

  const dataType = schema.dataTypeDisplayText
    ? schema.dataTypeDisplayText
    : schema.title;
  return (
    <div>
      {label && (
        <TitleField
          id={`${id}__title`}
          title={label}
          required={required}
          formContext={formContext}
          disabled={disabled}
        />
      )}

      {dataType && (
        <div className={pfx("object-type")}>
          {schema.dataTypeLink ? (
            <a href={schema.dataTypeLink}>{dataType}</a>
          ) : (
            dataType
          )}
        </div>
      )}

      {schema.paramType && (
        <div className={pfx("param-type")}>{schema.paramType}</div>
      )}

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
          <div>{label}</div>
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
