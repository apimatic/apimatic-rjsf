"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generateFormDataForMultipleSchema = generateFormDataForMultipleSchema;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

var _TagSelector = require("../widgets/TagSelector");

var _TagSelector2 = _interopRequireDefault(_TagSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  return computeInitialValue(schema);
}

var getMultipleSchemaType = function getMultipleSchemaType(schema) {
  return schema && schema.hasOwnProperty("oneOf") ? "oneOf" : "anyOf";
};

function computeInitialValue(schema) {
  if (schema.type === "object") {
    return schema.example || {};
  } else if (schema.type === "array") {
    return schema.example || schema.items.example && [schema.items.example] || [];
  } else if (schema && (0, _utils.isMultipleSchema)(schema)) {
    return generateFormDataForMultipleSchema(schema, 0, getMultipleSchemaType(schema));
  } else if (schema.example) {
    return schema.example;
  } else {
    return undefined;
  }
}

function getInitialFormData(schema, index, caseOf) {
  var initialFormData = {
    $$__case: index,
    $$__case_of: caseOf,
    value: computeInitialValue(schema)
  };
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

    _this.onDiscriminatorChange = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          formData = _this$props.formData;
      var selectedSchema = _this.state.selectedSchema;


      return function (value, options, schemaIndex) {
        var newFormData = void 0;

        if ((0, _utils.checkDiscriminator)(formData)) {
          newFormData = _extends({}, formData, {
            $$__case: selectedSchema.index,
            value: value
          });
        } else {
          newFormData = _extends({}, formData, {
            value: value
          });
        }

        _this.setState(function (st) {
          console.log(st);
          return _extends({}, st, {
            formState: _extends({}, st.formState, _defineProperty({}, selectedSchema.index, newFormData))
          });
        });
        onChange(newFormData, {
          validate: false
        }, _this.state.selectedSchema.index);
      };
    };

    _this.renderSchema = function (depth) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          errorSchema = _this$props2.errorSchema,
          formData = _this$props2.formData,
          idPrefix = _this$props2.idPrefix,
          idSchema = _this$props2.idSchema,
          onBlur = _this$props2.onBlur,
          onFocus = _this$props2.onFocus,
          registry = _this$props2.registry,
          uiSchema = _this$props2.uiSchema,
          typeCombinatorTypes = _this$props2.typeCombinatorTypes;

      var _SchemaField = registry.fields.SchemaField;
      var selectedSchema = _this.state.selectedSchema;


      var childIsMap = selectedSchema.schema && selectedSchema.schema.type === "object" && selectedSchema.schema.hasOwnProperty("additionalProperties") && selectedSchema.schema.additionalProperties.type !== "object";
      var childIsArray = selectedSchema.schema && selectedSchema.schema.type === "array" && selectedSchema.schema.hasOwnProperty("items") && selectedSchema.schema.items.type !== "object";
      var childIsNestedMultipleSchema = (0, _utils.isMultipleSchema)(selectedSchema.schema);
      var isDiscriminatorChild = !(childIsArray || childIsMap || childIsNestedMultipleSchema);

      var discriminatorChildFieldsetDepth = depth + 1;
      var childDepth = isDiscriminatorChild ? depth + 2 : depth + 1;
      var discriminatorClassName = isDiscriminatorChild ? "discriminator-field-child " + getEvenOddClass(discriminatorChildFieldsetDepth) + " depth_" + discriminatorChildFieldsetDepth : "discriminator-field-child-empty";

      var typeCombinatorSubTypes = void 0;
      if (typeCombinatorTypes) {
        var selectedSchemaTypeCombinator = typeCombinatorTypes[selectedSchema.index];
        typeCombinatorSubTypes = selectedSchemaTypeCombinator.ContainsSubTypes ? selectedSchemaTypeCombinator.SubTypes : null;
      }

      return _react2.default.createElement(
        "fieldset",
        { className: (0, _utils.prefixClass)("field  " + discriminatorClassName) },
        _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _this.state && formData ? _react2.default.createElement(_SchemaField, {
            schema: selectedSchema.schema,
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
            schemaIndex: selectedSchema.index,
            depth: childDepth,
            isEven: childDepth % 2 === 0
            // Flag for detecting discriminator in child level
            , fromDiscriminator: true
            // Title will set in boolean fields
            , anyOfTitle: _this.props.schema.title || _this.props.anyOfTitle,
            typeCombinatorTypes: typeCombinatorSubTypes
          }) : _react2.default.createElement(
            "p",
            null,
            "schema or formdata not available"
          )
        )
      );
    };

    _this.selectOnChange = function (value) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          definitions = _this$props3.definitions;
      var formState = _this.state.formState;

      _this.setState({
        selectedSchema: value
      });

      var defaultFormState = (0, _utils.getDefaultFormState)(value.schema, getInitialFormData(value.schema, value.index, _this.state.caseOf), definitions, 0);

      if (!formState[value.index]) {
        _this.setState(function (st) {
          return _extends({}, st, {
            formState: _extends({}, st.formState, _defineProperty({}, value.index, defaultFormState))
          });
        });
      }

      onChange(formState[value.index] || defaultFormState, {
        validate: true
      }, value.index);
    };

    _this.state = {};
    return _this;
  }

  _createClass(DiscriminatorField, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          schema = _props.schema,
          fromMap = _props.fromMap,
          typeCombinatorTypes = _props.typeCombinatorTypes;
      var selectedSchema = this.state.selectedSchema;

      var multipleSchema = schema.oneOf || schema.anyOf;

      var selectOptions = multipleSchema.reduce(function (optionList, schema, index) {
        var type = typeCombinatorTypes && typeCombinatorTypes[index].DataType;

        var label = type ? type : getMultipleLabel(schema) || schema.type;

        optionList.push({
          label: label,
          value: {
            index: index,
            schema: schema
          }
        });
        return optionList;
      }, []);

      var isOneOfOrAnyOf = selectedSchema.schema.hasOwnProperty("oneOf") || selectedSchema.schema.hasOwnProperty("anyOf");
      var isObject = selectedSchema.schema.type === "array" || selectedSchema.schema.type === "object" || isOneOfOrAnyOf;
      var depth = fromMap ? this.props.depth + 1 : this.props.depth;

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
        this.renderSchema(depth)
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var schema = props.schema,
          formData = props.formData;

      /**
       * Fixes {@link https://github.com/apimatic/apimatic-dx-portal/issues/426}
       * When both anyOf and oneOf exists then pick oneOf as currently there is
       * limited support in docgen side
       * 🙌🙌🙌
       */

      if (schema.oneOf && schema.anyOf) {
        delete schema.anyOf;
      }

      var initialSchema = schema.oneOf || schema.anyOf;
      var initialSchemaIndex = formData ? formData.$$__case : 0;
      var data = formData || {};
      var caseOf = getMultipleSchemaType(schema);

      return {
        formState: _extends({}, state.formState, _defineProperty({}, data.$$__case, formData)),
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