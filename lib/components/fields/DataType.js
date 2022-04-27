"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

var _context = require("../context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DataType(props) {
  var title = props.title,
      link = props.link,
      type = props.type,
      markdown = props.markdown,
      markdownTitle = props.markdownTitle;


  if (!title && !markdown) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("div", null);
  }

  if (markdown) {
    return _react2.default.createElement(
      _context.ContextConsumer,
      null,
      function (_ref) {
        var renderTypesPopover = _ref.renderTypesPopover;
        return renderTypesPopover(markdown, markdownTitle);
      }
    );
  }

  return _react2.default.createElement(
    _context.ContextConsumer,
    null,
    function (_ref2) {
      var onRouteChange = _ref2.onRouteChange;
      return _react2.default.createElement(
        "div",
        {
          className: (0, _utils.prefixClass)(type !== "schema" ? type : link ? "object-type" : "base-type")
        },
        link ? _react2.default.createElement(
          "a",
          { onClick: function onClick() {
              return onRouteChange(link);
            } },
          title
        ) : title
      );
    }
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