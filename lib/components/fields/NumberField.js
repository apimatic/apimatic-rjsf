"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function NumberField(props) {
  var StringField = props.registry.fields.StringField;
  return /*#__PURE__*/_react.default.createElement(StringField, _extends({}, props, {
    onChange: function onChange(value) {
      return props.onChange((0, _utils.asNumber)(value));
    }
  }));
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  NumberField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.object,
    onChange: _propTypes.default.func.isRequired,
    formData: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    required: _propTypes.default.bool,
    formContext: _propTypes.default.object.isRequired
  };
}
NumberField.defaultProps = {
  uiSchema: {}
};
var _default = NumberField;
exports.default = _default;