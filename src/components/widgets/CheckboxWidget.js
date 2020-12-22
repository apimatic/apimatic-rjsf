import React from "react";
import PropTypes from "prop-types";
import DescriptionField from "../fields/DescriptionField.js";
import { prefixClass as pfx } from "../../utils";

function CheckboxWidget(props) {
  const dataType = props.schema.dataTypeDisplayText
    ? props.schema.dataTypeDisplayText
    : props.schema.title;

  const {
    schema,
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange
  } = props;
  return (
    <div className={pfx(`checkbox ${disabled || readonly ? "disabled" : ""}`)}>
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

      {dataType && (
        <div className={pfx("object-type")}>
          {props.schema.dataTypeLink ? (
            <a href={props.schema.dataTypeLink}>{dataType}</a>
          ) : (
            dataType
          )}
        </div>
      )}

      {props.schema.paramType && (
        <div className={pfx("param-type")}>{props.schema.paramType}</div>
      )}

      {schema.description && (
        <DescriptionField description={schema.description} />
      )}
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
