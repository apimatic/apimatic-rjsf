"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

var _Icons = require("../Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseInput = function (_Component) {
  _inherits(BaseInput, _Component);

  function BaseInput(props) {
    _classCallCheck(this, BaseInput);

    var _this = _possibleConstructorReturn(this, (BaseInput.__proto__ || Object.getPrototypeOf(BaseInput)).call(this, props));

    _this.state = {
      isSingleLine: true,
      isHidden: true
    };

    _this.onKeyDown = function (_ref) {
      var key = _ref.key;
      var isSingleLine = _this.state.isSingleLine;
      var _this$props = _this.props,
          _this$props$value = _this$props.value,
          value = _this$props$value === undefined ? "" : _this$props$value,
          onChange = _this$props.onChange,
          schema = _this$props.schema;

      var needToConvert = key === "Enter" && isSingleLine && schema.type === "string" && value;

      if (needToConvert) {
        _this.setState({
          isSingleLine: false
        });

        onChange(value + "\n");
      }
    };

    _this.getValue = function (value) {
      var options = _this.props.options;


      return value === "" ? options.emptyValue : value;
    };

    _this.onChange = function (_ref2) {
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
    };

    _this.setPasswordVisibility = function () {
      _this.setState(function (st) {
        return _extends({}, st, {
          isHidden: !st.isHidden
        });
      });
    };

    _this.inputRef = _react2.default.createRef();
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
      var _props = this.props,
          value = _props.value,
          readonly = _props.readonly,
          disabled = _props.disabled,
          autofocus = _props.autofocus,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          options = _props.options,
          schema = _props.schema,
          formContext = _props.formContext,
          registry = _props.registry,
          onChange = _props.onChange,
          type = _props.type,
          inputProps = _objectWithoutProperties(_props, ["value", "readonly", "disabled", "autofocus", "onBlur", "onFocus", "options", "schema", "formContext", "registry", "onChange", "type"]);

      var _state = this.state,
          isSingleLine = _state.isSingleLine,
          isHidden = _state.isHidden;
      var isSecret = schema.isSecret;


      var textType = options.inputType || type || "text";

      var inputType = isSecret && isHidden ? "password" : textType;

      var InputField = isSingleLine || isSecret ? "input" : "textarea";

      var isPassword = inputType === "password";

      return _react2.default.createElement(
        "div",
        { className: "rjsf-form-control-parent" },
        _react2.default.createElement(InputField, _extends({
          ref: this.inputRef,
          className: (0, _utils.prefixClass)((0, _utils.classNames)({
            "form-control": true,
            "form-control-password": isSecret
          })),
          readOnly: readonly,
          disabled: disabled,
          autoFocus: autofocus,
          value: value == null ? "" : value
        }, inputProps, {
          type: inputType,
          onChange: this.onChange,
          onBlur: onBlur && function (event) {
            return onBlur(inputProps.id, event.target.value);
          },
          onFocus: onFocus && function (event) {
            return onFocus(inputProps.id, event.target.value);
          },
          onKeyDownCapture: this.onKeyDown
        })),
        (isPassword || !isHidden) && _react2.default.createElement(
          "div",
          {
            className: (0, _utils.prefixClass)("form-control-svg"),
            onClick: this.setPasswordVisibility
          },
          isPassword ? _react2.default.createElement(_Icons.EyeOpenSvg, null) : _react2.default.createElement(_Icons.EyeOffSvg, null)
        )
      );
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
    id: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    value: _propTypes2.default.any,
    required: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
    autofocus: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onFocus: _propTypes2.default.func
  };
}

exports.default = BaseInput;