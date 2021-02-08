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

function DescriptionField(props) {
  var id = props.id,
      description = props.description;

  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("div", null);
  }
  if (typeof description === "string") {
    return _react2.default.createElement(
      "p",
      { id: id, className: (0, _utils.prefixClass)("field-description") },
      description.replace(/<br>/gi, "\n")
    );
  } else {
    return _react2.default.createElement(
      "div",
      { id: id, className: (0, _utils.prefixClass)("field-description") },
      description
    );
  }
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: _propTypes2.default.string,
    description: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  };
}

exports.default = DescriptionField;