"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ArrayField = _interopRequireDefault(require("./ArrayField"));
var _BooleanField = _interopRequireDefault(require("./BooleanField"));
var _DescriptionField = _interopRequireDefault(require("./DescriptionField"));
var _NumberField = _interopRequireDefault(require("./NumberField"));
var _ObjectField = _interopRequireDefault(require("./ObjectField"));
var _SchemaField = _interopRequireDefault(require("./SchemaField"));
var _StringField = _interopRequireDefault(require("./StringField"));
var _TitleField = _interopRequireDefault(require("./TitleField"));
var _UnsupportedField = _interopRequireDefault(require("./UnsupportedField"));
var _DiscriminatorField = _interopRequireDefault(require("./DiscriminatorField"));
var _DiscriminatorWrapper = _interopRequireDefault(require("./DiscriminatorWrapper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var fields = {
  ArrayField: _ArrayField.default,
  BooleanField: _BooleanField.default,
  DescriptionField: _DescriptionField.default,
  NumberField: _NumberField.default,
  ObjectField: _ObjectField.default,
  SchemaField: _SchemaField.default,
  StringField: _StringField.default,
  TitleField: _TitleField.default,
  UnsupportedField: _UnsupportedField.default,
  DiscriminatorField: _DiscriminatorField.default,
  DiscrimatorWrapper: _DiscriminatorWrapper.default
};
var _default = fields;
exports.default = _default;