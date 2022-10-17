"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DiscrimatorWrapper;
var _react = _interopRequireDefault(require("react"));
var _lodash = _interopRequireDefault(require("lodash.clonedeep"));
var _DiscriminatorField = _interopRequireDefault(require("./DiscriminatorField"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function converToOneOf(sch, _ref) {
  var Root = _ref.Root;
  var schema = (0, _lodash.default)(sch);
  var typeCombinatorTypes = schema.typeCombinatorTypes;
  schema.oneOf = typeCombinatorTypes.map(function (type) {
    return Root[type.DataType] || Root[type.ModelSchemaRef];
  });
  return schema;
}
function DiscrimatorWrapper(props) {
  var mergedSchema = converToOneOf(props.schema, props.definitions);
  return /*#__PURE__*/_react.default.createElement(_DiscriminatorField.default, _extends({}, props, {
    schema: mergedSchema,
    tagsTitle: "Select Model"
  }));
}