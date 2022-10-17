"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TextWidget(props) {
  var BaseInput = props.registry.widgets.BaseInput;
  return /*#__PURE__*/_react.default.createElement(BaseInput, props);
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  TextWidget.propTypes = {
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
  };
}
var _default = TextWidget;
exports.default = _default;