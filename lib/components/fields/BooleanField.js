"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
var _excluded = ["widget"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function BooleanField(props) {
  var schema = props.schema,
    name = props.name,
    uiSchema = props.uiSchema,
    formData = props.formData,
    _props$registry = props.registry,
    registry = _props$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _props$registry,
    required = props.required,
    disabled = props.disabled,
    readonly = props.readonly,
    autofocus = props.autofocus,
    onChange = props.onChange,
    anyOfTitle = props.anyOfTitle;
  var title = schema.title;
  var widgets = registry.widgets,
    formContext = registry.formContext;
  var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
    _getUiOptions$widget = _getUiOptions.widget,
    widget = _getUiOptions$widget === void 0 ? "checkbox" : _getUiOptions$widget,
    options = _objectWithoutProperties(_getUiOptions, _excluded);
  var Widget = (0, _utils.getWidget)(schema, widget, widgets);
  var enumOptions = (0, _utils.optionsList)({
    enum: [true, false],
    enumNames: schema.enumNames || ["yes", "no"]
  });
  return /*#__PURE__*/_react.default.createElement(Widget, {
    options: _objectSpread(_objectSpread({}, options), {}, {
      enumOptions: enumOptions
    }),
    schema: schema,
    onChange: onChange,
    label: title === undefined ? name : title,
    value: formData,
    required: required,
    disabled: disabled,
    readonly: readonly,
    registry: registry,
    formContext: formContext,
    autofocus: autofocus,
    anyOfTitle: anyOfTitle
  });
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  BooleanField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.object,
    onChange: _propTypes.default.func.isRequired,
    formData: _propTypes.default.bool,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    autofocus: _propTypes.default.bool,
    dxInterface: _propTypes.default.shape({
      registry: _propTypes.default.shape({
        widgets: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
        fields: _propTypes.default.objectOf(_propTypes.default.func).isRequired,
        definitions: _propTypes.default.object.isRequired,
        formContext: _propTypes.default.object.isRequired
      })
    })
  };
}
BooleanField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};
var _default = BooleanField;
exports.default = _default;