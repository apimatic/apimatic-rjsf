"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AltDateWidget = _interopRequireDefault(require("./AltDateWidget"));
var _AltDateTimeWidget = _interopRequireDefault(require("./AltDateTimeWidget"));
var _NewDateTimeWidget = _interopRequireDefault(require("./NewDateTimeWidget"));
var _NewDateWidget = _interopRequireDefault(require("./NewDateWidget"));
var _BaseInput = _interopRequireDefault(require("./BaseInput"));
var _CheckboxWidget = _interopRequireDefault(require("./CheckboxWidget"));
var _CheckboxesWidget = _interopRequireDefault(require("./CheckboxesWidget"));
var _ColorWidget = _interopRequireDefault(require("./ColorWidget"));
var _DateWidget = _interopRequireDefault(require("./DateWidget"));
var _DateTimeWidget = _interopRequireDefault(require("./DateTimeWidget"));
var _EmailWidget = _interopRequireDefault(require("./EmailWidget"));
var _FileWidget = _interopRequireDefault(require("./FileWidget"));
var _HiddenWidget = _interopRequireDefault(require("./HiddenWidget"));
var _PasswordWidget = _interopRequireDefault(require("./PasswordWidget"));
var _RadioWidget = _interopRequireDefault(require("./RadioWidget"));
var _RangeWidget = _interopRequireDefault(require("./RangeWidget"));
var _SelectWidget = _interopRequireDefault(require("./SelectWidget"));
var _TextareaWidget = _interopRequireDefault(require("./TextareaWidget"));
var _TextWidget = _interopRequireDefault(require("./TextWidget"));
var _URLWidget = _interopRequireDefault(require("./URLWidget"));
var _UpDownWidget = _interopRequireDefault(require("./UpDownWidget"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var widgets = {
  BaseInput: _BaseInput.default,
  PasswordWidget: _PasswordWidget.default,
  RadioWidget: _RadioWidget.default,
  UpDownWidget: _UpDownWidget.default,
  RangeWidget: _RangeWidget.default,
  SelectWidget: _SelectWidget.default,
  TextWidget: _TextWidget.default,
  DateWidget: _DateWidget.default,
  DateTimeWidget: _DateTimeWidget.default,
  AltDateWidget: _AltDateWidget.default,
  AltDateTimeWidget: _AltDateTimeWidget.default,
  NewDateTimeWidget: _NewDateTimeWidget.default,
  NewDateWidget: _NewDateWidget.default,
  EmailWidget: _EmailWidget.default,
  URLWidget: _URLWidget.default,
  TextareaWidget: _TextareaWidget.default,
  HiddenWidget: _HiddenWidget.default,
  ColorWidget: _ColorWidget.default,
  FileWidget: _FileWidget.default,
  CheckboxWidget: _CheckboxWidget.default,
  CheckboxesWidget: _CheckboxesWidget.default
};
var _default = widgets;
exports.default = _default;