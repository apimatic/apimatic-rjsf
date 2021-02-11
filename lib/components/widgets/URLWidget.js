"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function URLWidget(props) {
  var BaseInput = props.registry.widgets.BaseInput;

  return _react2.default.createElement(BaseInput, _extends({ type: "url" }, props));
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  URLWidget.propTypes = {
    value: _propTypes2.default.string
  };
}

exports.default = URLWidget;