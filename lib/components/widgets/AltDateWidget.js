"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
function rangeOptions(start, stop) {
  var options = [];
  for (var i = start; i <= stop; i++) {
    options.push({
      value: i,
      label: (0, _utils.pad)(i, 2)
    });
  }
  return options;
}
function readyForChange(state) {
  return Object.keys(state).every(function (key) {
    return state[key] !== -1;
  });
}
function DateElement(props) {
  var type = props.type,
    range = props.range,
    value = props.value,
    select = props.select,
    rootId = props.rootId,
    disabled = props.disabled,
    readonly = props.readonly,
    autofocus = props.autofocus,
    registry = props.registry,
    onBlur = props.onBlur;
  var id = rootId + "_" + type;
  var SelectWidget = registry.widgets.SelectWidget;
  return /*#__PURE__*/_react.default.createElement(SelectWidget, {
    schema: {
      type: "integer"
    },
    id: id,
    className: (0, _utils.prefixClass)("form-control"),
    options: {
      enumOptions: rangeOptions(range[0], range[1])
    },
    placeholder: type,
    value: value,
    disabled: disabled,
    readonly: readonly,
    autofocus: autofocus,
    onChange: function onChange(value) {
      return select(type, value);
    },
    onBlur: onBlur
  });
}
var AltDateWidget = /*#__PURE__*/function (_Component) {
  _inherits(AltDateWidget, _Component);
  var _super = _createSuper(AltDateWidget);
  function AltDateWidget(props) {
    var _this;
    _classCallCheck(this, AltDateWidget);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "onChange", function (property, value) {
      _this.setState(_defineProperty({}, property, typeof value === "undefined" ? -1 : value), function () {
        // Only propagate to parent state if we have a complete date{time}
        if (readyForChange(_this.state)) {
          _this.props.onChange((0, _utils.toDateString)(_this.state, _this.props.time));
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "setNow", function (event) {
      event.preventDefault();
      var _this$props = _this.props,
        time = _this$props.time,
        disabled = _this$props.disabled,
        readonly = _this$props.readonly,
        onChange = _this$props.onChange;
      if (disabled || readonly) {
        return;
      }
      var nowDateObj = (0, _utils.parseDateString)(new Date().toJSON(), time);
      _this.setState(nowDateObj, function () {
        return onChange((0, _utils.toDateString)(_this.state, time));
      });
    });
    _defineProperty(_assertThisInitialized(_this), "clear", function (event) {
      event.preventDefault();
      var _this$props2 = _this.props,
        time = _this$props2.time,
        disabled = _this$props2.disabled,
        readonly = _this$props2.readonly,
        onChange = _this$props2.onChange;
      if (disabled || readonly) {
        return;
      }
      _this.setState((0, _utils.parseDateString)("", time), function () {
        return onChange(undefined);
      });
    });
    _this.state = (0, _utils.parseDateString)(props.value, props.time);
    return _this;
  }
  _createClass(AltDateWidget, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState((0, _utils.parseDateString)(nextProps.value, nextProps.time));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _utils.shouldRender)(this, nextProps, nextState);
    }
  }, {
    key: "dateElementProps",
    get: function get() {
      var time = this.props.time;
      var _this$state = this.state,
        year = _this$state.year,
        month = _this$state.month,
        day = _this$state.day,
        hour = _this$state.hour,
        minute = _this$state.minute,
        second = _this$state.second;
      var data = [{
        type: "year",
        range: [1900, 2020],
        value: year
      }, {
        type: "month",
        range: [1, 12],
        value: month
      }, {
        type: "day",
        range: [1, 31],
        value: day
      }];
      if (time) {
        data.push({
          type: "hour",
          range: [0, 23],
          value: hour
        }, {
          type: "minute",
          range: [0, 59],
          value: minute
        }, {
          type: "second",
          range: [0, 59],
          value: second
        });
      }
      return data;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        id = _this$props3.id,
        disabled = _this$props3.disabled,
        readonly = _this$props3.readonly,
        autofocus = _this$props3.autofocus,
        registry = _this$props3.registry,
        onBlur = _this$props3.onBlur;
      return /*#__PURE__*/_react.default.createElement("ul", {
        className: (0, _utils.prefixClass)("list-inline")
      }, this.dateElementProps.map(function (elemProps, i) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: i
        }, /*#__PURE__*/_react.default.createElement(DateElement, _extends({
          rootId: id,
          select: _this2.onChange
        }, elemProps, {
          disabled: disabled,
          readonly: readonly,
          registry: registry,
          onBlur: onBlur,
          autofocus: autofocus && i === 0
        })));
      }), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "#",
        className: (0, _utils.prefixClass)("btn btn-info btn-now"),
        onClick: this.setNow
      }, "Now")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "#",
        className: (0, _utils.prefixClass)("btn btn-warning btn-clear"),
        onClick: this.clear
      }, "Clear")));
    }
  }]);
  return AltDateWidget;
}(_react.Component); /* istanbul ignore else */
_defineProperty(AltDateWidget, "defaultProps", {
  time: false,
  disabled: false,
  readonly: false,
  autofocus: false
});
if (process.env.NODE_ENV !== "production") {
  AltDateWidget.propTypes = {
    schema: _propTypes.default.object.isRequired,
    id: _propTypes.default.string.isRequired,
    value: _propTypes.default.string,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    autofocus: _propTypes.default.bool,
    onChange: _propTypes.default.func,
    onBlur: _propTypes.default.func,
    time: _propTypes.default.bool
  };
}
var _default = AltDateWidget;
exports.default = _default;