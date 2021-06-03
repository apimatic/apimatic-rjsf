import React from "react";
import PropTypes from "prop-types";
import { asNumber, prefixClass as pfx } from "../../utils";
import MultipleSelect from "./MultipleSelect";
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
export function processValue({ type, items }, value) {
  if (value === "") {
    return undefined;
  } else if (
    type === "array" &&
    items &&
    ["number", "integer"].includes(items.type)
  ) {
    return value.map(asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return asNumber(value);
  }
  return value;
}

function getValue(event, multiple) {
  if (multiple) {
    return event.reduce((acc, cv, i) => acc.concat(cv.value), []);
  } else {
    return event.target.value;
  }
}

function SelectWidget(props) {
  const {
    schema,
    id,
    options,
    value,
    required,
    disabled,
    readonly,
    multiple,
    autofocus,
    onChange,
    onBlur,
    onFocus,
    placeholder
  } = props;
  const { enumOptions, enumDisabled } = options;

  return multiple ? (
    <MultipleSelect
      id={id}
      multiple={multiple}
      className={pfx("form-control")}
      value={value}
      required={required}
      disabled={disabled || readonly}
      options={options}
      autoFocus={autofocus}
      onBlur={
        onBlur &&
        (event => {
          const newValue = getValue(event, multiple);
          onBlur(id, processValue(schema, newValue));
        })
      }
      onFocus={
        onFocus &&
        (event => {
          const newValue = getValue(event, multiple);
          onFocus(id, processValue(schema, newValue));
        })
      }
      onChange={event => {
        const newValue = getValue(event, multiple);
        onChange(processValue(schema, newValue));
      }}
    />
  ) : (
    <select
      id={id}
      multiple={multiple}
      className={pfx("form-control")}
      value={typeof value === "undefined" ? "" : value}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onBlur={
        onBlur &&
        (event => {
          const newValue = getValue(event, multiple);
          onBlur(id, processValue(schema, newValue));
        })
      }
      onFocus={
        onFocus &&
        (event => {
          const newValue = getValue(event, multiple);
          onFocus(id, processValue(schema, newValue));
        })
      }
      onChange={event => {
        const newValue = getValue(event, multiple);
        onChange(processValue(schema, newValue));
      }}
    >
      {!multiple && !schema.default && <option value="">{placeholder}</option>}
      {enumOptions.map(({ value, label }, i) => {
        const disabled = enumDisabled && enumDisabled.indexOf(value) != -1;
        return (
          <option key={i} value={value} disabled={disabled}>
            {label}
          </option>
        );
      })}
    </select>
  );
}

SelectWidget.defaultProps = {
  autofocus: false
};

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  SelectWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.shape({
      enumOptions: PropTypes.array
    }).isRequired,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    multiple: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
  };
}

export default SelectWidget;
