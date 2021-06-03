import React from "react";
import Select from "react-select";

// const options = [{
//     value: 'chocolate',
//     label: 'Chocolate'
// },
// {
//     value: 'strawberry',
//     label: 'Strawberry'
// },
// {
//     value: 'vanilla',
//     label: 'Vanilla'
// },
// ];

function getDefaultValue(value, options, disabledOptions) {
  let filter = options.filter(o => {
    if (disabledOptions) {
      return (
        disabledOptions.indexOf(o.value) === -1 && value.indexOf(o.value) !== -1
      );
    } else {
      return value.indexOf(o.value) !== -1;
    }
  });

  return filter;
}

function MultipleSelect(props) {
  const {
    // schema,
    id,
    options,
    value,
    required,
    disabled,
    readonly,
    multiple,
    autofocus,
    onChange,
    placeholder
  } = props;

  const { enumOptions, enumDisabled } = options;
  let newOptions = enumOptions.map(o => {
    let a = {
      ...o,
      disabled: !!(enumDisabled && enumDisabled.indexOf(o.value) !== -1)
    };
    return a;
  });

  return (
    <Select
      id={id}
      isMulti={multiple}
      options={newOptions}
      defaultValue={
        typeof value === "undefined"
          ? []
          : getDefaultValue(value, enumOptions, enumDisabled)
      }
      isDisabled={disabled || readonly}
      required={required}
      autoFocus={autofocus}
      placeholder={placeholder}
      onChange={onChange}
      isOptionDisabled={newOptions => newOptions.disabled}
      // onBlur={onBlur}
      // onFocus={onFocus}
    />
  );
}

export default MultipleSelect;
