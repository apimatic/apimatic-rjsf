"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = DiscrimatorWrapper;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = require("lodash.clonedeep");

var _lodash2 = _interopRequireDefault(_lodash);

var _DiscriminatorField = require("./DiscriminatorField");

var _DiscriminatorField2 = _interopRequireDefault(_DiscriminatorField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function converToOneOf(sch, definitions) {
  var schema = (0, _lodash2.default)(sch);
  var typeCombinatorTypes = schema.typeCombinatorTypes;


  schema.oneOf = typeCombinatorTypes.map(function (type) {
    return definitions[type.DataType];
  });

  return schema;
}

function DiscrimatorWrapper(props) {
  var mergedSchema = converToOneOf(props.schema, props.definitions);

  return _react2.default.createElement(_DiscriminatorField2.default, _extends({}, props, {
    schema: mergedSchema,
    tagsTitle: "Select Model"
  }));
}