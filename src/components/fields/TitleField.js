import React from "react";
import PropTypes from "prop-types";

const REQUIRED_FIELD_SYMBOL = "*";

function TitleField(props) {
  const { id, title, required, nullify, onNullifyChange, disabled } = props;
  const legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return (
    <legend id={id}>
      {required || !onNullifyChange ? null : (
        <span>
          <input
            type="checkbox"
            checked={nullify}
            onChange={onNullifyChange}
            disabled={disabled}
          />{" "}
        </span>
      )}
      {legend}
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
