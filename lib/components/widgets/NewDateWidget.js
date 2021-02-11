"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NewDateTimeWidget = require("./NewDateTimeWidget");

var _NewDateTimeWidget2 = _interopRequireDefault(_NewDateTimeWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DateWidget(props) {
  return _react2.default.createElement(_NewDateTimeWidget2.default, _extends({}, props, { disableTime: true }));
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DateWidget.propTypes = {
    value: _propTypes2.default.string
  };
}

exports.default = DateWidget;