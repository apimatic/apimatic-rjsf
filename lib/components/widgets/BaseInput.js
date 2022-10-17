"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
var _excluded = ["value", "readonly", "disabled", "autofocus", "onBlur", "onFocus", "options", "schema", "formContext", "registry", "onChange"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var BaseInput = /*#__PURE__*/function (_Component) {
  _inherits(BaseInput, _Component);
  var _super = _createSuper(BaseInput);
  function BaseInput(props) {
    var _this;
    _classCallCheck(this, BaseInput);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "state", {
      isSingleLine: true
    });
    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (_ref) {
      var key = _ref.key;
      var isSingleLine = _this.state.isSingleLine;
      var _this$props = _this.props,
        _this$props$value = _this$props.value,
        value = _this$props$value === void 0 ? "" : _this$props$value,
        onChange = _this$props.onChange,
        schema = _this$props.schema;
      var needToConvert = key === "Enter" && isSingleLine && schema.type === "string" && value;
      if (needToConvert) {
        _this.setState({
          isSingleLine: false
        });
        onChange("".concat(value, "\n"));
      }
    });
    _defineProperty(_assertThisInitialized(_this), "getValue", function (value) {
      var options = _this.props.options;
      return value === "" ? options.emptyValue : value;
    });
    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref2) {
      var val = _ref2.target.value;
      var _onChange = _this.props.onChange;
      var value = _this.getValue(val);
      if (!value) {
        return _onChange(value);
      }
      if (!value.includes("\n")) {
        _this.setState({
          isSingleLine: true
        });
      }
      return _onChange(value.trimStart());
    });
    _this.inputRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }
  _createClass(BaseInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isSingleLine = this.state.isSingleLine;
      if (isSingleLine !== prevState.isSingleLine) {
        this.inputRef.current.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      // Note: since React 15.2.0 we can't forward unknown element attributes, so we
      // exclude the "options" and "schema" ones here.
      var _this$props2 = this.props,
        value = _this$props2.value,
        readonly = _this$props2.readonly,
        disabled = _this$props2.disabled,
        autofocus = _this$props2.autofocus,
        onBlur = _this$props2.onBlur,
        onFocus = _this$props2.onFocus,
        options = _this$props2.options,
        schema = _this$props2.schema,
        formContext = _this$props2.formContext,
        registry = _this$props2.registry,
        onChange = _this$props2.onChange,
        inputProps = _objectWithoutProperties(_this$props2, _excluded);
      var isSingleLine = this.state.isSingleLine;
      inputProps.type = options.inputType || inputProps.type || "text";
      var InputField = isSingleLine ? "input" : "textarea";
      return /*#__PURE__*/_react.default.createElement(InputField, _extends({
        ref: this.inputRef,
        className: (0, _utils.prefixClass)("form-control"),
        readOnly: readonly,
        disabled: disabled,
        autoFocus: autofocus,
        value: value == null ? "" : value
      }, inputProps, {
        onChange: this.onChange,
        onBlur: onBlur && function (event) {
          return onBlur(inputProps.id, event.target.value);
        },
        onFocus: onFocus && function (event) {
          return onFocus(inputProps.id, event.target.value);
        },
        onKeyDownCapture: this.onKeyDown
      }));
    }
  }]);
  return BaseInput;
}(_react.Component);
BaseInput.defaultProps = {
  type: "text",
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
};

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  BaseInput.propTypes = {
    id: _propTypes.default.string,
    placeholder: _propTypes.default.string,
    value: _propTypes.default.any,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    autofocus: _propTypes.default.bool,
    onChange: _propTypes.default.func,
    onBlur: _propTypes.default.func,
    onFocus: _propTypes.default.func
  };
}
var _default = BaseInput;
exports.default = _default;