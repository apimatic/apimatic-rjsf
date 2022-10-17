"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _utils = require("../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var TagSelector = /*#__PURE__*/function (_React$Component) {
  _inherits(TagSelector, _React$Component);
  var _super = _createSuper(TagSelector);
  function TagSelector() {
    _classCallCheck(this, TagSelector);
    return _super.apply(this, arguments);
  }
  _createClass(TagSelector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        title = _this$props.title,
        options = _this$props.options,
        _onChange = _this$props.onChange,
        _this$props$value = _this$props.value,
        value = _this$props$value === void 0 ? options[0] : _this$props$value,
        _this$props$className = _this$props.className,
        className = _this$props$className === void 0 ? "" : _this$props$className;
      var onClick = function onClick(option) {
        return function () {
          _onChange && _onChange(option.value);
        };
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "tag-selector ".concat(className)
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "__title --tag"
      }, title), /*#__PURE__*/_react.default.createElement("div", {
        className: "__tags-wrapper --variant-tag"
      }, options.map(function (option, index) {
        return /*#__PURE__*/_react.default.createElement("span", {
          key: "option-item-".concat(index, "-").concat(option.label),
          className: "--tag ".concat(value.index === index ? "--active" : ""),
          onClick: onClick(option)
        }, option.label);
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "__tags-wrapper --variant-select"
      }, /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
        className: "".concat((0, _utils.prefixClass)("form-control")),
        classNamePrefix: "react-select",
        value: options[value.index],
        options: options,
        onChange: function onChange(_ref) {
          var value = _ref.value;
          return _onChange(value);
        }
      })));
    }
  }]);
  return TagSelector;
}(_react.default.Component);
TagSelector.defaultProps = {
  title: _propTypes.default.string.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.any,
    value: _propTypes.default.any
  })).isRequired,
  onChange: _propTypes.default.func,
  value: _propTypes.default.any
};
var _default = TagSelector;
exports.default = _default;