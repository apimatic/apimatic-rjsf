"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DescriptionField = require("../fields/DescriptionField.js");

var _DescriptionField2 = _interopRequireDefault(_DescriptionField);

var _utils = require("../../utils");

var _TitleField = require("../fields/TitleField");

var _TitleField2 = _interopRequireDefault(_TitleField);

var _DataType = require("../fields/DataType");

var _DataType2 = _interopRequireDefault(_DataType);

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
      formContext = props.formContext,
      _onChange = props.onChange;


  var dataType = schema.dataTypeDisplayText ? schema.dataTypeDisplayText : schema.title;
  return _react2.default.createElement(
    "div",
    null,
    label && _react2.default.createElement(_TitleField2.default, {
      id: id + "__title",
      title: label,
      required: required,
      formContext: formContext,
      disabled: disabled
    }),
    _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)("type-container") },
      _react2.default.createElement(_DataType2.default, { title: dataType, link: schema.dataTypeLink, type: "schema" }),
      schema.paramType && _react2.default.createElement(
        "div",
        { className: (0, _utils.prefixClass)("param-type") },
        schema.paramType
      )
    ),
    schema.description && _react2.default.createElement(_DescriptionField2.default, { description: schema.description }),
    _react2.default.createElement(
      "div",
      {
        className: (0, _utils.prefixClass)("checkbox " + (disabled || readonly ? "disabled" : ""))
      },
      _react2.default.createElement(
        "div",
        { className: (0, _utils.prefixClass)("checkbox-title") },
        _react2.default.createElement(
          "label",
          null,
          _react2.default.createElement("input", {
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
          }),
          _react2.default.createElement("span", null)
        ),
        _react2.default.createElement(
          "div",
          null,
          label
        )
      )
    )
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false
};

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  CheckboxWidget.propTypes = {
    schema: _propTypes2.default.object.isRequired,
    id: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.bool,
    required: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
    autofocus: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
  };
}

exports.default = CheckboxWidget;