"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
function processValue(_ref, value) {
  var type = _ref.type,
      items = _ref.items;

  if (value === "") {
    return undefined;
  } else if (type === "array" && items && ["number", "integer"].includes(items.type)) {
    return value.map(_utils.asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return (0, _utils.asNumber)(value);
  }
  return value;
}

function getValue(event, multiple) {
  if (multiple) {
    return event.reduce(function (acc, cv, i) {
      return acc.concat(cv.value);
    }, []);
  } else {
    return event.value;
  }
}

function makeSelectedValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var options = arguments[1];

  if (typeof value === "string") {
    return options.find(function (option) {
      return value === option.value && !option.disabled;
    });
  } else if (Array.isArray(value)) {
    return options.filter(function (option) {
      return value.includes(option.value) && !option.disabled;
    });
  }
}

function SelectWidget(props) {
  var _React$createElement;

  var schema = props.schema,
      id = props.id,
      options = props.options,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      multiple = props.multiple,
      autofocus = props.autofocus,
      _onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      placeholder = props.placeholder;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var newOptions = enumOptions.map(function (o) {
    var a = _extends({}, o, {
      disabled: !!(enumDisabled && enumDisabled.indexOf(o.value) !== -1)
    });
    return a;
  });
  var selected = makeSelectedValue(value, newOptions);

  return _react2.default.createElement(_reactSelect2.default, (_React$createElement = {
    id: id,
    value: selected,
    className: (0, _utils.prefixClass)("form-control"),
    classNamePrefix: "react-select",
    isMulti: multiple,
    options: newOptions,
    closeMenuOnSelect: !multiple,
    isDisabled: disabled || readonly,
    required: required,
    autoFocus: autofocus,
    placeholder: placeholder
  }, _defineProperty(_React$createElement, "required", required), _defineProperty(_React$createElement, "onBlur", onBlur), _defineProperty(_React$createElement, "onFocus", onFocus), _defineProperty(_React$createElement, "onChange", function onChange(event) {
    var newValue = getValue(event, multiple);
    _onChange(processValue(schema, newValue));
  }), _defineProperty(_React$createElement, "isOptionDisabled", function isOptionDisabled(option) {
    return option.disabled;
  }), _React$createElement));
}

SelectWidget.defaultProps = {
  autofocus: false
};

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  SelectWidget.propTypes = {
    schema: _propTypes2.default.object.isRequired,
    id: _propTypes2.default.string.isRequired,
    options: _propTypes2.default.shape({
      enumOptions: _propTypes2.default.array
    }).isRequired,
    value: _propTypes2.default.any,
    required: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
    multiple: _propTypes2.default.bool,
    autofocus: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onFocus: _propTypes2.default.func
  };
}

exports.default = SelectWidget;