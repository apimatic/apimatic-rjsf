import React from "react";
import PropTypes from "prop-types";
import { prefixClass } from "../../utils";

const REQUIRED_FIELD_SYMBOL = "*";

function TitleField(props) {
  const {
    id,
    title,
    required,
    nullify,
    onNullifyChange,
    disabled,
    onClick
  } = props;
  const legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return (
    <legend id={id}>
      {required || !onNullifyChange ? null : (
        <label onClick={ev => ev.stopPropagation()}>
          <input
            type="checkbox"
            checked={nullify}
            className={nullify ? "checked" : "unchecked"}
            onChange={onNullifyChange}
            disabled={disabled}
          />
          <span />
        </label>
      )}
      <div
        onClick={() => (onClick ? onClick() : null)}
        className={prefixClass("checkbox-text")}
      >
        {title}
      </div>
    </legend>
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  TitleField.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    nullify: PropTypes.bool,
    onNullifyChange: PropTypes.func
  };
}

export default TitleField;
