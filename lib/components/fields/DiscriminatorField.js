"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.generateFormDataForMultipleSchema = generateFormDataForMultipleSchema;

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

function generateFormDataForMultipleSchema(schema, index) {
  if ((0, _utils.isMultipleSchema)(schema)) {
    var _schema = schema.oneOf ? schema.oneOf[index] : schema.anyOf[index];
    return {
      $$__case: index,
      value: generateFormDataForMultipleSchema(_schema, 0)
    };
  }
  return undefined;
}

function getInitialFormData(schema, index) {
  var initialFormData = {
    $$__case: index,
    value: undefined
  };

  if (schema.type === "object") {
    initialFormData = _extends({}, initialFormData, {
      value: {}
    });
  } else if (schema.type === "array") {
    initialFormData = _extends({}, initialFormData, {
      value: []
    });
  } else if (schema && (0, _utils.isMultipleSchema)(schema)) {
    initialFormData = _extends({}, initialFormData, {
      value: generateFormDataForMultipleSchema(schema, 0)
    });
  }
  return initialFormData;
}

function getMultipleLabel(schema) {
  if (schema.hasOwnProperty("anyOf")) {
    return "Any Of";
  }
  if (schema.hasOwnProperty("oneOf")) {
    return "One Of";
  }
}

function getEvenOddClass(depth) {
  return depth % 2 === 0 ? "even" : "odd";
}

var DiscriminatorField = function (_React$Component) {
  _inherits(DiscriminatorField, _React$Component);

  function DiscriminatorField(props) {
    _classCallCheck(this, DiscriminatorField);

    var _this = _possibleConstructorReturn(this, (DiscriminatorField.__proto__ || Object.getPrototypeOf(DiscriminatorField)).call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        schema = _this$props.schema,
        formData = _this$props.formData;

    var initialSchema = schema.oneOf || schema.anyOf;
    var initialSchemaIndex = formData ? formData.$$__case : 0;
    _this.state = {
      selectedSchema: {
        index: initialSchemaIndex,
        schema: initialSchema[initialSchemaIndex]
      },
      collapse: false
    };
    return _this;
  }

  _createClass(DiscriminatorField, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          schema = _props.schema,
          fromMap = _props.fromMap;
      var selectedSchema = this.state.selectedSchema;

      var multipleSchema = schema.oneOf || schema.anyOf;

      var selectOptions = multipleSchema.reduce(function (optionList, schema, index) {
        var label = schema.title ? schema.title : getMultipleLabel(schema) || schema.type;

        optionList.push({
          label: label,
          value: {
            index: index,
            schema: schema
          }
        });
        return optionList;
      }, []);

      var isObject = this.state.selectedSchema.schema.type === "array" || this.state.selectedSchema.schema.type === "object" || this.state.selectedSchema.schema.hasOwnProperty("oneOf") || this.state.selectedSchema.schema.hasOwnProperty("anyOf");
      var depth = fromMap ? this.props.depth + 1 : this.props.depth;
      var childDepth = depth + 1;

      return _react2.default.createElement(
        "fieldset",
        {
          className: (0, _utils.prefixClass)("field " + getEvenOddClass(depth) + " depth_" + depth + " discriminator-field")
        },
        _react2.default.createElement(_TagSelector2.default, {
          value: selectedSchema,
          title: getMultipleLabel(schema),
          options: selectOptions,
          onChange: this.selectOnChange
        }),
        this.renderSchema(isObject, childDepth)
      );
    }
  }]);

  return DiscriminatorField;
}(_react2.default.Component);

/* istanbul ignore else */


var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onDiscriminatorChange = function () {
    var _props2 = _this2.props,
        onChange = _props2.onChange,
        formData = _props2.formData;


    return function (value, options, schemaIndex) {
      var newFormData = void 0;

      if ((0, _utils.checkDiscriminator)(formData)) {
        newFormData = _extends({}, formData, {
          $$__case: _this2.state.selectedSchema.index,
          value: value
        });
      } else {
        newFormData = _extends({}, formData, {
          value: value
        });
      }
      onChange(newFormData, {
        validate: false
      }, _this2.state.selectedSchema.index);
    };
  };

  this.renderSchema = function (isObject, childDepth) {
    var _props3 = _this2.props,
        disabled = _props3.disabled,
        errorSchema = _props3.errorSchema,
        formData = _props3.formData,
        idPrefix = _props3.idPrefix,
        idSchema = _props3.idSchema,
        onBlur = _props3.onBlur,
        onFocus = _props3.onFocus,
        registry = _props3.registry,
        uiSchema = _props3.uiSchema;

    var _SchemaField = registry.fields.SchemaField;

    var classes = isObject ? (0, _utils.prefixClass)(getEvenOddClass(childDepth) + " depth_" + childDepth + " discriminator-field-child-object") : (0, _utils.prefixClass)(getEvenOddClass(childDepth) + " depth_" + childDepth + " discriminator-field-child");
    return _react2.default.createElement(
      "fieldset",
      { className: classes },
      " ",
      _this2.state && formData ? _react2.default.createElement(_SchemaField, {
        schema: _this2.state.selectedSchema.schema,
        uiSchema: uiSchema,
        errorSchema: errorSchema,
        idSchema: idSchema,
        idPrefix: idPrefix,
        formData: formData.value,
        onChange: _this2.onDiscriminatorChange(),
        onBlur: onBlur,
        onFocus: onFocus,
        registry: registry,
        disabled: disabled,
        schemaIndex: _this2.state.selectedSchema.index,
        depth: childDepth,
        isEven: childDepth % 2 === 0
        // Flag for detecting discriminator in child level
        , fromDiscriminator: true
        // Title will set in boolean fields
        , anyOfTitle: _this2.props.schema.title || _this2.props.anyOfTitle
      }) : _react2.default.createElement(
        "p",
        null,
        "schema or formdata not available"
      )
    );
  };

  this.selectOnChange = function (value) {
    var _props4 = _this2.props,
        onChange = _props4.onChange,
        definitions = _props4.definitions;

    _this2.setState({
      selectedSchema: value
    });

    var defaultFormState = (0, _utils.getDefaultFormState)(value.schema, getInitialFormData(value.schema, value.index), definitions, value.index);

    onChange(defaultFormState, {
      validate: true
    }, value.index);
  };
};

DiscriminatorField.defaultProps = {
  disabled: false,
  errorSchema: {},
  idSchema: {},
  uiSchema: {}
};

if (process.env.NODE_ENV !== "production") {
  DiscriminatorField.propTypes = {
    options: _propTypes2.default.arrayOf(_propTypes2.default.object),
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