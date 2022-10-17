"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
var _excluded = ["widget", "placeholder"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var StringField = /*#__PURE__*/function (_React$Component) {
  _inherits(StringField, _React$Component);
  var _super = _createSuper(StringField);
  function StringField() {
    var _this;
    _classCallCheck(this, StringField);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_onChange", function (value) {
      var _this$props = _this.props,
        onChange = _this$props.onChange,
        required = _this$props.required,
        uiSchema = _this$props.uiSchema;
      var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
        emptyValue = _getUiOptions.emptyValue;
      if (value === undefined && required) {
        return onChange("");
      }
      return onChange(value === "" ? emptyValue : value);
    });
    _defineProperty(_assertThisInitialized(_this), "setDiscriminatorValue", function () {
      var _this$props2 = _this.props,
        _this$props2$discrimi = _this$props2.discriminatorObj,
        discriminatorObj = _this$props2$discrimi === void 0 ? {} : _this$props2$discrimi,
        formData = _this$props2.formData,
        name = _this$props2.name;
      var discriminatorValue = discriminatorObj.value;
      if ((0, _utils.isDiscriminator)(name, discriminatorObj) && !formData) {
        setTimeout(function () {
          _this._onChange(discriminatorValue);
        }, 0);
      }
    });
    return _this;
  }
  _createClass(StringField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setDiscriminatorValue();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDiscriminatorValue();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        schema = _this$props3.schema,
        name = _this$props3.name,
        uiSchema = _this$props3.uiSchema,
        formData = _this$props3.formData,
        required = _this$props3.required,
        disabled = _this$props3.disabled,
        readonly = _this$props3.readonly,
        autofocus = _this$props3.autofocus,
        onBlur = _this$props3.onBlur,
        onFocus = _this$props3.onFocus,
        _this$props3$registry = _this$props3.registry,
        registry = _this$props3$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props3$registry;
      var title = schema.title,
        format = schema.format;
      var widgets = registry.widgets,
        formContext = registry.formContext,
        dxInterface = registry.dxInterface;
      var enumOptions = (0, _utils.isSelect)(schema, dxInterface) && (0, _utils.optionsList)(schema);
      var defaultWidget = format || (enumOptions ? "select" : "text");
      var _getUiOptions2 = (0, _utils.getUiOptions)(uiSchema),
        _getUiOptions2$widget = _getUiOptions2.widget,
        widget = _getUiOptions2$widget === void 0 ? defaultWidget : _getUiOptions2$widget,
        _getUiOptions2$placeh = _getUiOptions2.placeholder,
        placeholder = _getUiOptions2$placeh === void 0 ? "" : _getUiOptions2$placeh,
        options = _objectWithoutProperties(_getUiOptions2, _excluded);
      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return /*#__PURE__*/_react.default.createElement(Widget, {
        options: _objectSpread(_objectSpread({}, options), {}, {
          enumOptions: enumOptions
        }),
        schema: schema,
        label: title === undefined ? name : title,
        value: formData,
        onChange: this._onChange,
        onBlur: onBlur,
        onFocus: onFocus,
        required: required,
        disabled: disabled,
        readonly: readonly,
        formContext: formContext,
        autofocus: autofocus,
        registry: registry,
        placeholder: placeholder
      });
    }
  }]);
  return StringField;
}(_react.default.Component); /* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  StringField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.object.isRequired,
    onChange: _propTypes.default.func.isRequired,
    onBlur: _propTypes.default.func,
    onFocus: _propTypes.default.func,
    formData: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    dxInterface: _propTypes.default.shape({
      registry: _propTypes.default.shape({
        widgets: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
        fields: _propTypes.default.objectOf(_propTypes.default.func).isRequired,
        definitions: _propTypes.default.object.isRequired,
        formContext: _propTypes.default.object.isRequired
      })
    }),
    formContext: _propTypes.default.object.isRequired,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    autofocus: _propTypes.default.bool
  };
}
StringField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};
var _default = StringField;
exports.default = _default;