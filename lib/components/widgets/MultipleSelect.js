"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var filter = options.filter(function (o) {
    if (disabledOptions) {
      return disabledOptions.indexOf(o.value) === -1 && value.indexOf(o.value) !== -1;
    } else {
      return value.indexOf(o.value) !== -1;
    }
  });

  return filter;
}

function MultipleSelect(props) {
  var id = props.id,
      options = props.options,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      multiple = props.multiple,
      autofocus = props.autofocus,
      onChange = props.onChange,
      placeholder = props.placeholder;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var newOptions = enumOptions.map(function (o) {
    var a = _extends({}, o, {
      disabled: !!(enumDisabled && enumDisabled.indexOf(o.value) !== -1)
    });
    return a;
  });

  return _react2.default.createElement(_reactSelect2.default, {
    id: id,
    isMulti: multiple,
    options: newOptions,
    defaultValue: typeof value === "undefined" ? [] : getDefaultValue(value, enumOptions, enumDisabled),
    isDisabled: disabled || readonly,
    required: required,
    autoFocus: autofocus,
    placeholder: placeholder,
    onChange: onChange,
    isOptionDisabled: function isOptionDisabled(newOptions) {
      return newOptions.disabled;
    }
    // onBlur={onBlur}
    // onFocus={onFocus}
  });
}

exports.default = MultipleSelect;