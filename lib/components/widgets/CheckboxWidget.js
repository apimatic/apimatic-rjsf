"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DescriptionField = _interopRequireDefault(require("../fields/DescriptionField.js"));
var _utils = require("../../utils");
var _DataType = _interopRequireDefault(require("../fields/DataType"));
var _SchemaField = require("../fields/SchemaField");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CheckboxWidget(props) {
  var schema = props.schema,
    id = props.id,
    value = props.value,
    required = props.required,
    disabled = props.disabled,
    readonly = props.readonly,
    label = props.label,
    autofocus = props.autofocus,
    _onChange = props.onChange,
    anyOfTitle = props.anyOfTitle;
  var dataType = schema.dataTypeDisplayText ? schema.dataTypeDisplayText : schema.type;
  var markdown = schema.dataTypeMarkdown;
  return /*#__PURE__*/_react.default.createElement("div", null, label && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("field-header")
  }, /*#__PURE__*/_react.default.createElement(_SchemaField.Label, {
    label: label,
    required: required,
    id: id
  }), required && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("element-required")
  }, /*#__PURE__*/_react.default.createElement("span", null, "Required"))), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("type-container")
  }, /*#__PURE__*/_react.default.createElement(_DataType.default, {
    markdown: markdown,
    title: dataType,
    link: schema.dataTypeLink,
    type: "schema"
  }), schema.paramType && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("param-type")
  }, schema.paramType)), schema.description && /*#__PURE__*/_react.default.createElement(_DescriptionField.default, {
    description: schema.description
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("checkbox ".concat(disabled || readonly ? "disabled" : ""))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("checkbox-title")
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: id,
    checked: typeof value === "undefined" ? false : value,
    required: required,
    className: value ? "checked" : "unchecked",
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onChange: function onChange(event) {
      return _onChange(event.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("checkbox-text")
  }, label || anyOfTitle))));
}
CheckboxWidget.defaultProps = {
  autofocus: false
};

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  CheckboxWidget.propTypes = {
    schema: _propTypes.default.object.isRequired,
    id: _propTypes.default.string.isRequired,
    value: _propTypes.default.bool,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    autofocus: _propTypes.default.bool,
    onChange: _propTypes.default.func
  };
}
var _default = CheckboxWidget;
exports.default = _default;