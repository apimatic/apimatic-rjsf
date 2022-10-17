"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
var _context = require("../context");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function DataType(props) {
  var title = props.title,
    link = props.link,
    type = props.type,
    markdown = props.markdown;
  if (!title && !markdown) {
    // See #312: Ensure compatibility with old versions of React.
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
  if (markdown) {
    var label = (0, _utils.getListRootItem)(markdown);
    return /*#__PURE__*/_react.default.createElement(_context.ContextConsumer, null, function (_ref) {
      var renderTypesPopover = _ref.renderTypesPopover;
      return renderTypesPopover(markdown, label);
    });
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)(type !== "schema" ? type : link ? "object-type" : "base-type")
  }, link ? /*#__PURE__*/_react.default.createElement(_context.ContextConsumer, null, function (_ref2) {
    var onRouteChange = _ref2.onRouteChange;
    return /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick() {
        return onRouteChange(link);
      }
    }, title);
  }) : title);
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DataType.propTypes = {
    title: _propTypes.default.string,
    link: _propTypes.default.string,
    type: _propTypes.default.string
  };
}
var _default = DataType;
exports.default = _default;