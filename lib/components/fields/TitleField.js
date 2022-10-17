"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var REQUIRED_FIELD_SYMBOL = "*";
function TitleField(props) {
  var id = props.id,
    title = props.title,
    required = props.required,
    nullify = props.nullify,
    onNullifyChange = props.onNullifyChange,
    disabled = props.disabled,
    _onClick = props.onClick,
    _props$fromDiscrimina = props.fromDiscriminator,
    fromDiscriminator = _props$fromDiscrimina === void 0 ? false : _props$fromDiscrimina;
  var legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  var isRequired = required || !onNullifyChange || fromDiscriminator;
  return /*#__PURE__*/_react.default.createElement("legend", {
    id: id
  }, isRequired ? null : /*#__PURE__*/_react.default.createElement("label", {
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: nullify,
    className: nullify ? "checked" : "unchecked",
    onChange: onNullifyChange,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("span", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: isRequired ? undefined : (0, _utils.prefixClass)("checkbox-text"),
    onClick: function onClick() {
      return _onClick ? _onClick() : null;
    }
  }, title));
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  TitleField.propTypes = {
    id: _propTypes.default.string,
    title: _propTypes.default.string,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    nullify: _propTypes.default.bool,
    onNullifyChange: _propTypes.default.func
  };
}
var _default = TitleField;
exports.default = _default;