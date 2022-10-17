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
function DescriptionField(props) {
  var READONLY_TEXT = "This field is disabled and gets auto-filled based on the selected discriminator value.";
  var id = props.id,
    isDiscriminatorField = props.isDiscriminatorField,
    description = props.description;
  var DESCRIPTION_TEXT = description;

  // Check if the field is Discriminator Field, then append the discriminator info
  if (isDiscriminatorField) {
    DESCRIPTION_TEXT = "".concat(DESCRIPTION_TEXT ? DESCRIPTION_TEXT : "", " ").concat(READONLY_TEXT);
  }
  if (!DESCRIPTION_TEXT) {
    // See #312: Ensure compatibility with old versions of React.
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: (0, _utils.prefixClass)("field-description")
  }, /*#__PURE__*/_react.default.createElement(_context.ContextConsumer, null, function (_ref) {
    var markdownRenderer = _ref.markdownRenderer;
    return markdownRenderer(DESCRIPTION_TEXT);
  }));
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: _propTypes.default.string,
    description: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element])
  };
}
var _default = DescriptionField;
exports.default = _default;