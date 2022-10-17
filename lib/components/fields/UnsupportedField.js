"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function UnsupportedField(_ref) {
  var schema = _ref.schema,
    reason = _ref.reason;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("unsupported-field")
  }, /*#__PURE__*/_react.default.createElement("p", null, "Unsupported field schema", reason && /*#__PURE__*/_react.default.createElement("em", null, ": ", reason), "."), schema && /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(schema, null, 2)));
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  UnsupportedField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    reason: _propTypes.default.string
  };
}
var _default = UnsupportedField;
exports.default = _default;