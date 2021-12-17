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

var _TagSelector = require("../widgets/TagSelector");

var _TagSelector2 = _interopRequireDefault(_TagSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiscriminatorField = function (_React$Component) {
  _inherits(DiscriminatorField, _React$Component);

  function DiscriminatorField(props) {
    _classCallCheck(this, DiscriminatorField);

    var _this = _possibleConstructorReturn(this, (DiscriminatorField.__proto__ || Object.getPrototypeOf(DiscriminatorField)).call(this, props));

    _this.onDiscriminatorChange = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          formData = _this$props.formData;


      return function (value, options, schemaIndex) {
        var newFormData = void 0;
        // if (
        //   this.state.selectedSchema.schema &&
        //   this.state.selectedSchema.schema.hasOwnProperty("oneOf" || "anyOf")
        // ) {
        //   if (schemaIndex) {
        //     newFormData = {
        //       ...formData,
        //       $$__case: schemaIndex,
        //       value: value
        //     };
        //   } else {
        //     newFormData = {
        //       ...formData,
        //       value: value
        //     };
        //   }
        // } else {
        //   if (checkDiscriminator(value)) {
        //     newFormData = {
        //       ...formData,
        //       value
        //     };
        //   } else {
        //     newFormData = value;
        //   }
        // }

        if ((0, _utils.checkDiscriminator)(formData)) {
          newFormData = _extends({}, formData, {
            $$__case: _this.state.selectedSchema.index,
            value: value
          });
        } else {
          newFormData = value;
        }

        onChange(newFormData, {
          validate: false
        }, _this.state.selectedSchema.index);
      };
    };

    _this.renderSchema = function (header) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          errorSchema = _this$props2.errorSchema,
          formData = _this$props2.formData,
          idPrefix = _this$props2.idPrefix,
          idSchema = _this$props2.idSchema,
          onBlur = _this$props2.onBlur,
          onFocus = _this$props2.onFocus,
          registry = _this$props2.registry,
          uiSchema = _this$props2.uiSchema;

      var _SchemaField = registry.fields.SchemaField;

      return _react2.default.createElement(
        "fieldset",
        {
          className: (0, _utils.prefixClass)((_this.props.isEven ? "odd" : "even") + " depth_" + (_this.props.depth + 1) + " discriminator-field-child")
        },
        " ",
        _this.state && formData ? _react2.default.createElement(_SchemaField, {
          schema: _this.state.selectedSchema.schema,
          uiSchema: uiSchema,
          errorSchema: errorSchema,
          idSchema: idSchema,
          idPrefix: idPrefix,
          formData: formData.value,
          onChange: _this.onDiscriminatorChange(),
          onBlur: onBlur,
          onFocus: onFocus,
          registry: registry,
          disabled: disabled,
          schemaIndex: _this.state.selectedSchema.index,
          depth: _this.props.depth + 2,
          isEven: _this.props.depth % 2 === 0,
          header: header
        }) : _react2.default.createElement(
          "p",
          null,
          "schema or formdata not available"
        )
      );
    };

    _this.selectOnChange = function (e) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          options = _this$props3.options,
          definitions = _this$props3.definitions,
          formData = _this$props3.formData;

      console.log(options);
      _this.setState({
        selectedSchema: e
      });

      var defaultFormState = void 0;
      if (e.schema.type === "object") {
        // Retain matching object keys
        // for (let key in formData) {
        //   if (defaultFormState.hasOwnProperty(key)) {
        //     defaultFormState = {
        //       ...defaultFormState,
        //       [key]: formData[key]
        //     };
        //   }
        // }
        defaultFormState = (0, _utils.getDefaultFormState)(e.schema, {}, definitions, e.index);
      } else if (e.schema.type === "array") {
        defaultFormState = (0, _utils.getDefaultFormState)(e.schema, [], definitions, e.index);
      } else if (e.schema && e.schema.hasOwnProperty("oneOf" || "anyOf")) {
        defaultFormState = (0, _utils.getDefaultFormState)(e.schema, _extends({}, formData, {
          value: {
            $$__case: 0,
            value: undefined
          }
        }), definitions, e.index);
      } else {
        if (formData) {
          defaultFormState = (0, _utils.getDefaultFormState)(e.schema, {
            $$__case: e.index,
            value: undefined
          }, definitions, e.index);
        } else {
          defaultFormState = (0, _utils.getDefaultFormState)(e.schema, undefined, definitions, e.index);
        }
      }

      onChange(defaultFormState, {
        validate: true
      }, e.index);
    };

    var altSchema = props.schema.oneOf || props.schema.anyOf;
    _this.state = {
      selectedSchema: {
        index: 0,
        schema: altSchema[0]
      },
      collapse: false
    };
    return _this;
  }

  _createClass(DiscriminatorField, [{
    key: "render",
    value: function render() {
      var schema = this.props.schema;
      var selectedSchema = this.state.selectedSchema;

      var altSchema = schema.oneOf || schema.anyOf;

      var selectOptions = altSchema.reduce(function (optionList, schema, index) {
        var label = schema.title ? schema.title : "Option " + (index + 1);
        optionList.push({
          label: label,
          value: {
            index: index,
            schema: schema
          }
        });
        return optionList;
      }, []);

      var header = _react2.default.createElement(_TagSelector2.default, {
        value: selectedSchema,
        title: "anyof",
        options: selectOptions,
        onChange: this.selectOnChange
      });

      return _react2.default.createElement(
        "fieldset",
        {
          className: (0, _utils.prefixClass)("field " + (this.props.isEven ? "even" : "odd") + " depth_" + this.props.depth + " discriminator-field")
        },
        header,
        " ",
        this.renderSchema(header),
        " "
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