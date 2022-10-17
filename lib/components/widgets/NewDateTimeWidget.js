"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
var _moment = _interopRequireDefault(require("moment"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
    return _moment.default.utc(jsonDate);
  }
}
function toDateString(dateobj, time) {
  if (dateobj) {
    return time ? dateobj.utc().format() : dateobj.format("YYYY-MM-DD");
  }
}
function DateTimeWidget(props) {
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
  return /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, _extends({
    showMonthDropdown: true,
    showYearDropdown: true,
    todayButton: "Today",
    className: (0, _utils.prefixClass)("form-control field-datepicker"),
    selected: fromDateString(value),
    onChange: function onChange(value) {
      return _onChange(toDateString(value, time));
    },
    dateFormat: "ll",
    isClearable: true,
    utcOffset: 0,
    disabled: disabled,
    required: required,
    readOnly: readonly,
    autoFocus: autofocus,
    onBlur: onBlur,
    onFocus: onFocus,
    placeholderText: "Select a date",
    disabledKeyboardNavigation: true
  }, time ? timePickerProps : {}));
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DateTimeWidget.propTypes = {
    value: _propTypes.default.string
  };
}
var _default = DateTimeWidget;
exports.default = _default;