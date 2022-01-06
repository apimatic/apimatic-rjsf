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

function generateFormDataForMultipleSchema(schema, index, caseOf) {
  if ((0, _utils.isMultipleSchema)(schema)) {
    var _schema = schema.oneOf ? schema.oneOf[index] : schema.anyOf[index];
    return {
      $$__case: index,
      $$__case_of: caseOf,
      value: generateFormDataForMultipleSchema(_schema, 0, getMultipleSchemaType(_schema))
    };
  }
  return undefined;
}

var getMultipleSchemaType = function getMultipleSchemaType(schema) {
  return schema && schema.hasOwnProperty("oneOf") ? "oneOf" : "anyOf";
};

function getInitialFormData(schema, index, caseOf) {
  var initialFormData = {
    $$__case: index,
    $$__case_of: caseOf,
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
      value: generateFormDataForMultipleSchema(schema, 0, getMultipleSchemaType(schema))
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

  function DiscriminatorField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DiscriminatorField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DiscriminatorField.__proto__ || Object.getPrototypeOf(DiscriminatorField)).call.apply(_ref, [this].concat(args))), _this), _this.onDiscriminatorChange = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          formData = _this$props.formData;


      return function (value, options, schemaIndex) {
        var newFormData = void 0;

        if ((0, _utils.checkDiscriminator)(formData)) {
          newFormData = _extends({}, formData, {
            $$__case: _this.state.selectedSchema.index,
            value: value
          });
        } else {
          newFormData = _extends({}, formData, {
            value: value
          });
        }
        onChange(newFormData, {
          validate: false
        }, _this.state.selectedSchema.index);
      };
    }, _this.renderSchema = function (isObject, childDepth) {
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

      var classes = isObject ? (0, _utils.prefixClass)(getEvenOddClass(childDepth) + " depth_" + childDepth + " discriminator-field-child-object") : (0, _utils.prefixClass)(getEvenOddClass(childDepth) + " depth_" + childDepth + " discriminator-field-child");
      return _react2.default.createElement(
        "fieldset",
        { className: classes },
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
          depth: childDepth,
          isEven: childDepth % 2 === 0
          // Flag for detecting discriminator in child level
          , fromDiscriminator: true
          // Title will set in boolean fields
          , anyOfTitle: _this.props.schema.title || _this.props.anyOfTitle
        }) : _react2.default.createElement(
          "p",
          null,
          "schema or formdata not available"
        )
      );
    }, _this.selectOnChange = function (value) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          definitions = _this$props3.definitions;

      _this.setState({
        selectedSchema: value
      });

      var defaultFormState = (0, _utils.getDefaultFormState)(value.schema, getInitialFormData(value.schema, value.index, _this.state.caseOf), definitions, value.index);

      onChange(defaultFormState, {
        validate: true
      }, value.index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
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

      var isOneOfOrAnyOf = this.state.selectedSchema.schema.hasOwnProperty("oneOf") || this.state.selectedSchema.schema.hasOwnProperty("anyOf");
      var isObject = this.state.selectedSchema.schema.type === "array" || this.state.selectedSchema.schema.type === "object" || isOneOfOrAnyOf;
      var depth = fromMap ? this.props.depth + 1 : this.props.depth;
      var childDepth = depth + 1;

      return _react2.default.createElement(
        "fieldset",
        {
          className: (0, _utils.prefixClass)("field " + getEvenOddClass(depth) + " depth_" + depth + " discriminator-field")
        },
        _react2.default.createElement(_TagSelector2.default, {
          className: isObject ? isOneOfOrAnyOf ? "anyof-child" : "object-child" : "object-child",
          value: selectedSchema,
          title: getMultipleLabel(schema),
          options: selectOptions,
          onChange: this.selectOnChange
        }),
        this.renderSchema(isObject, childDepth)
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var schema = props.schema,
          formData = props.formData;

      var initialSchema = schema.oneOf || schema.anyOf;
      var initialSchemaIndex = formData ? formData.$$__case : 0;
      var caseOf = getMultipleSchemaType(schema);

      return {
        selectedSchema: {
          index: initialSchemaIndex,
          schema: initialSchema[initialSchemaIndex]
        },
        collapse: false,
        caseOf: caseOf
      };
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