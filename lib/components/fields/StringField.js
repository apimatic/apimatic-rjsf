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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StringField = function (_React$Component) {
  _inherits(StringField, _React$Component);

  function StringField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StringField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StringField.__proto__ || Object.getPrototypeOf(StringField)).call.apply(_ref, [this].concat(args))), _this), _this._onChange = function (value) {
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
    }, _this.setDiscriminatorValue = function () {
      var _this$props2 = _this.props,
          _this$props2$discrimi = _this$props2.discriminatorObj,
          discriminatorObj = _this$props2$discrimi === undefined ? {} : _this$props2$discrimi,
          formData = _this$props2.formData;
      var discriminatorValue = discriminatorObj.value;


      if (_this.isDiscriminator() && !formData) {
        setTimeout(function () {
          _this._onChange(discriminatorValue);
        }, 0);
      }
    }, _this.isDiscriminator = function () {
      var _this$props3 = _this.props,
          _this$props3$discrimi = _this$props3.discriminatorObj,
          discriminatorObj = _this$props3$discrimi === undefined ? {} : _this$props3$discrimi,
          name = _this$props3.name;
      var discriminatorProperty = discriminatorObj.name;

      var isDiscriminator = discriminatorProperty && discriminatorProperty === name;

      return isDiscriminator;
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
      var _props = this.props,
          schema = _props.schema,
          name = _props.name,
          uiSchema = _props.uiSchema,
          idSchema = _props.idSchema,
          formData = _props.formData,
          required = _props.required,
          disabled = _props.disabled,
          readonly = _props.readonly,
          autofocus = _props.autofocus,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          _props$registry = _props.registry,
          registry = _props$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props$registry;
      var title = schema.title,
          format = schema.format;
      var widgets = registry.widgets,
          formContext = registry.formContext,
          dxInterface = registry.dxInterface;

      var enumOptions = (0, _utils.isSelect)(schema, dxInterface) && (0, _utils.optionsList)(schema);
      var defaultWidget = format || (enumOptions ? "select" : "text");

      var _getUiOptions2 = (0, _utils.getUiOptions)(uiSchema),
          _getUiOptions2$widget = _getUiOptions2.widget,
          widget = _getUiOptions2$widget === undefined ? defaultWidget : _getUiOptions2$widget,
          _getUiOptions2$placeh = _getUiOptions2.placeholder,
          placeholder = _getUiOptions2$placeh === undefined ? "" : _getUiOptions2$placeh,
          options = _objectWithoutProperties(_getUiOptions2, ["widget", "placeholder"]);

      var Widget = (0, _utils.getWidget)(schema, widget, widgets);

      return _react2.default.createElement(Widget, {
        options: _extends({}, options, { enumOptions: enumOptions }),
        schema: schema,
        id: idSchema && idSchema.$id,
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
}(_react2.default.Component);

/* istanbul ignore else */


if (process.env.NODE_ENV !== "production") {
  StringField.propTypes = {
    schema: _propTypes2.default.object.isRequired,
    uiSchema: _propTypes2.default.object.isRequired,
    idSchema: _propTypes2.default.object,
    onChange: _propTypes2.default.func.isRequired,
    onBlur: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    formData: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    dxInterface: _propTypes2.default.shape({
      registry: _propTypes2.default.shape({
        widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
        fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
        definitions: _propTypes2.default.object.isRequired,
        formContext: _propTypes2.default.object.isRequired
      })
    }),
    formContext: _propTypes2.default.object.isRequired,
    required: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
    autofocus: _propTypes2.default.bool
  };
}

StringField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};

exports.default = StringField;