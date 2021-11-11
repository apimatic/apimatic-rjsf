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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiscriminatorField = function (_React$Component) {
  _inherits(DiscriminatorField, _React$Component);

  function DiscriminatorField(props) {
    _classCallCheck(this, DiscriminatorField);

    var _this = _possibleConstructorReturn(this, (DiscriminatorField.__proto__ || Object.getPrototypeOf(DiscriminatorField)).call(this, props));

    _this.renderSchema = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          errorSchema = _this$props.errorSchema,
          formData = _this$props.formData,
          idPrefix = _this$props.idPrefix,
          idSchema = _this$props.idSchema,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          registry = _this$props.registry,
          uiSchema = _this$props.uiSchema;

      var _SchemaField = registry.fields.SchemaField;

      return _this.state ? _react2.default.createElement(_SchemaField, {
        schema: _this.state.selectedSchema,
        uiSchema: uiSchema,
        errorSchema: errorSchema,
        idSchema: idSchema,
        idPrefix: idPrefix,
        formData: formData,
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
        registry: registry,
        disabled: disabled
      }) : _react2.default.createElement(
        "p",
        null,
        "schema not available"
      );
    };

    _this.selectOnChange = function (e) {
      var _this$props2 = _this.props,
          formData = _this$props2.formData,
          onChange = _this$props2.onChange,
          options = _this$props2.options,
          definitions = _this$props2.definitions;

      console.log(options);
      _this.setState({
        selectedSchema: e
      });

      var defaultFormState = (0, _utils.getDefaultFormState)(e, {}, definitions);

      // Retain matching object properties
      for (var key in formData) {
        if (defaultFormState.hasOwnProperty(key)) {
          defaultFormState = _extends({}, defaultFormState, _defineProperty({}, key, formData[key]));
        }
      }

      onChange(defaultFormState);
    };

    console.log(props);
    var altSchema = props.schema.oneOf || props.schema.anyOf;
    _this.state = {
      selectedSchema: altSchema[0]
    };
    return _this;
  }

  _createClass(DiscriminatorField, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          required = _props.required,
          registry = _props.registry,
          schema = _props.schema,
          formData = _props.formData;

      var _SelectWidget = registry.widgets.SelectWidget;
      var altSchema = schema.oneOf || schema.anyOf;
      console.log("Discriminator");
      console.log(formData);
      var selectOptions = altSchema.reduce(function (optionList, schema, i) {
        var label = schema.title ? schema.title : "Option " + (i + 1);
        optionList.push({
          label: label,
          value: schema
        });
        return optionList;
      }, []);

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_SelectWidget, {
          schema: schema,
          id: altSchema[0].title,
          options: { enumOptions: selectOptions },
          value: "",
          required: required,
          disabled: disabled,
          readonly: false,
          multiple: false,
          onChange: this.selectOnChange,
          placeholder: altSchema[0].title
        }),
        this.renderSchema()
      );
    }
  }]);

  return DiscriminatorField;
}(_react2.default.Component);

/* istanbul ignore else */


DiscriminatorField.defaultProps = {
  disabled: false,
  errorSchema: {},
  idSchema: {},
  uiSchema: {}
};

if (process.env.NODE_ENV !== "production") {
  DiscriminatorField.propTypes = {
    options: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    baseType: _propTypes2.default.string,
    uiSchema: _propTypes2.default.object,
    idSchema: _propTypes2.default.object,
    formData: _propTypes2.default.any,
    errorSchema: _propTypes2.default.object,
    registry: _propTypes2.default.shape({
      fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
      definitions: _propTypes2.default.object.isRequired,
      formContext: _propTypes2.default.object.isRequired
    })
  };
}

exports.default = DiscriminatorField;