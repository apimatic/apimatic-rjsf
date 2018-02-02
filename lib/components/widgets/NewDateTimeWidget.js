"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* istanbul ignore file */
/* ignore until we figure out shallow rendering to test all cases */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDatepicker = require("react-datepicker");

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

var timePickerProps = {
  placeholderText: "Select a date and time",
  showTimeSelect: true,
  timeFormat: "HH:mm",
  timeIntervals: 15,
  dateFormat: "lll"
};

function fromDateString(jsonDate) {
  if (jsonDate) {
    return (0, _moment2.default)(jsonDate);
  }
}

function toDateString(dateobj, time) {
  if (dateobj) {
    return time ? dateobj.format() : dateobj.format("YYYY-MM-DD");
  }
}

function DateTimeWidget(props) {
  var _extends2;

  var value = props.value,
      _onChange = props.onChange,
      disabled = props.disabled,
      disableTime = props.disableTime,
      required = props.required,
      readonly = props.readonly,
      autofocus = props.autofocus,
      onBlur = props.onBlur,
      onFocus = props.onFocus;

  var time = !disableTime;

  return _react2.default.createElement(_reactDatepicker2.default, _extends((_extends2 = {
    className: "form-control field-datepicker",
    selected: fromDateString(value),
    onChange: function onChange(value) {
      return _onChange(toDateString(value, time));
    },
    dateFormat: "ll",
    isClearable: true,
    disabled: disabled,
    required: required,
    readOnly: readonly
  }, _defineProperty(_extends2, "readOnly", readonly), _defineProperty(_extends2, "autoFocus", autofocus), _defineProperty(_extends2, "onBlur", onBlur), _defineProperty(_extends2, "onFocus", onFocus), _defineProperty(_extends2, "placeholderText", "Select a date"), _defineProperty(_extends2, "disabledKeyboardNavigation", true), _extends2), time ? timePickerProps : {}));
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DateTimeWidget.propTypes = {
    value: _propTypes2.default.string
  };
}

exports.default = DateTimeWidget;