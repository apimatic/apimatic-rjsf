"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
var _reactSelect = _interopRequireDefault(require("react-select"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
  var options = arguments.length > 1 ? arguments[1] : undefined;
  if (Array.isArray(value)) {
    return options.filter(function (option) {
      return value.includes(option.value) && !option.disabled;
    });
  } else if (typeof value === "string" || "number") {
    return options.find(function (option) {
      return value === option.value && !option.disabled;
    });
  }
}
function SelectWidget(props) {
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
    var a = _objectSpread(_objectSpread({}, o), {}, {
      disabled: !!(enumDisabled && enumDisabled.indexOf(o.value) !== -1)
    });
    return a;
  });
  var selected = makeSelectedValue(value, newOptions) || "";
  return /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
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
    placeholder: placeholder,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: function onChange(event) {
      var newValue = getValue(event, multiple);
      _onChange(processValue(schema, newValue));
    },
    isOptionDisabled: function isOptionDisabled(option) {
      return option.disabled;
    }
  });
}
SelectWidget.defaultProps = {
  autofocus: false
};

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  SelectWidget.propTypes = {
    schema: _propTypes.default.object.isRequired,
    id: _propTypes.default.string.isRequired,
    options: _propTypes.default.shape({
      enumOptions: _propTypes.default.array
    }).isRequired,
    value: _propTypes.default.any,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    multiple: _propTypes.default.bool,
    autofocus: _propTypes.default.bool,
    onChange: _propTypes.default.func,
    onBlur: _propTypes.default.func,
    onFocus: _propTypes.default.func
  };
}
var _default = SelectWidget;
exports.default = _default;