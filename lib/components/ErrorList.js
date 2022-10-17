"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrorList;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ErrorList(props) {
  var errors = props.errors;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("panel panel-danger errors")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("panel-heading")
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: (0, _utils.prefixClass)("panel-title")
  }, "Errors")), /*#__PURE__*/_react.default.createElement("ul", {
    className: (0, _utils.prefixClass)("list-group")
  }, errors.map(function (error, i) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: i,
      className: (0, _utils.prefixClass)("list-group-item text-danger")
    }, error.stack);
  })));
}