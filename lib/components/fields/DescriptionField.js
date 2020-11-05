"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

var _reactMarkdown = require("react-markdown");

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DescriptionField(props) {
  var id = props.id,
      description = props.description;

  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("div", null);
  }

  var renderers = {};
  if (window.renderCodeBlock) {
    renderers.code = window.renderCodeBlock;
  }

  return _react2.default.createElement(
    "p",
    { id: id, className: (0, _utils.prefixClass)("field-description") },
    _react2.default.createElement(_reactMarkdown2.default, {
      plugins: [],
      children: description.replace(/<br>/gi, "\n"),
      renderers: _extends({}, renderers)
    })
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: _propTypes2.default.string,
    description: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  };
}

exports.default = DescriptionField;