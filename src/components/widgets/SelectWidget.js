import React from "react";
import PropTypes from "prop-types";

import { asNumber, prefixClass as pfx } from "../../utils";
import Select from "react-select";
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
function processValue({ type, items }, value) {
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
    return event.value;
  }
}

function getDefaultValue(value, multiple, options, disabledOptions) {
  if (multiple) {
    let filter = options.filter(o => {
      if (disabledOptions) {
        return (
          disabledOptions.indexOf(o.value) === -1 &&
          value.indexOf(o.value) !== -1
        );
      } else {
        return value.indexOf(o.value) !== -1;
      }
    });

    return filter;
  } else {
    return value;
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
  const emptyValue = multiple ? [] : "";
  let newOptions = enumOptions.map(o => {
    let a = {
      ...o,
      disabled: !!(enumDisabled && enumDisabled.indexOf(o.value) !== -1)
    };
    return a;
  });
  // Default value needs object instead of value(string)
  const defaultExample = newOptions.find(
    option => option.value === schema.example
  );

  return (
    <Select
      id={id}
      className={pfx("form-control")}
      classNamePrefix="react-select"
      isMulti={multiple}
      options={newOptions}
      defaultValue={
        defaultExample ||
        (value
          ? getDefaultValue(value, multiple, enumOptions, enumDisabled)
          : emptyValue)
      }
      closeMenuOnSelect={!multiple}
      isDisabled={disabled || readonly}
      required={required}
      autoFocus={autofocus}
      placeholder={placeholder}
      required={required}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={event => {
        const newValue = getValue(event, multiple);
        onChange(processValue(schema, newValue));
      }}
      isOptionDisabled={newOptions => newOptions.disabled}
    />
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
