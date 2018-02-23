"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrorList;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ErrorList(props) {
  var errors = props.errors;

  return _react2.default.createElement(
    "div",
    { className: (0, _utils.prefixClass)("panel panel-danger errors") },
    _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)("panel-heading") },
      _react2.default.createElement(
        "h3",
        { className: (0, _utils.prefixClass)("panel-title") },
        "Errors"
      )
    ),
    _react2.default.createElement(
      "ul",
      { className: (0, _utils.prefixClass)("list-group") },
      errors.map(function (error, i) {
        return _react2.default.createElement(
          "li",
          { key: i, className: (0, _utils.prefixClass)("list-group-item text-danger") },
          error.stack
        );
      })
    )
  );
}