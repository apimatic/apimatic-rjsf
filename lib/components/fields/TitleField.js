"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

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
      _onClick = props.onClick;

  var legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  var isRequired = required || !onNullifyChange;

  return _react2.default.createElement(
    "legend",
    { id: id },
    isRequired ? null : _react2.default.createElement(
      "label",
      { onClick: function onClick(ev) {
          return ev.stopPropagation();
        } },
      _react2.default.createElement("input", {
        type: "checkbox",
        checked: nullify,
        className: nullify ? "checked" : "unchecked",
        onChange: onNullifyChange,
        disabled: disabled
      }),
      _react2.default.createElement("span", null)
    ),
    _react2.default.createElement(
      "div",
      {
        className: isRequired ? undefined : (0, _utils.prefixClass)("checkbox-text"),
        onClick: function onClick() {
          return _onClick ? _onClick() : null;
        }
      },
      title
    )
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  TitleField.propTypes = {
    id: _propTypes2.default.string,
    title: _propTypes2.default.string,
    required: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    nullify: _propTypes2.default.bool,
    onNullifyChange: _propTypes2.default.func
  };
}

exports.default = TitleField;