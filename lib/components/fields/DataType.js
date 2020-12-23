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

function DataType(props) {
  var title = props.title,
      link = props.link,
      type = props.type;

  return title && _react2.default.createElement(
    "div",
    {
      className: (0, _utils.prefixClass)(type !== "schema" ? type : link ? "object-type" : "base-type")
    },
    link ? _react2.default.createElement(
      "a",
      { href: link },
      title
    ) : title
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DataType.propTypes = {
    title: _propTypes2.default.string,
    link: _propTypes2.default.string,
    type: _propTypes2.default.string
  };
}

exports.default = DataType;