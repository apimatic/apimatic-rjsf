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

var _validationUtils = require("../../validationUtils");

var _SchemaField2 = require("./SchemaField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CHAR_THRESHOLD = 120;

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
    return {};
  } else if (schema.type === "array") {
    return [];
  } else if (schema && (0, _utils.isMultipleSchema)(schema)) {
    return generateFormDataForMultipleSchema(schema, 0, getMultipleSchemaType(schema));
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
          formData = _this$props.formData,
          parentPath = _this$props.parentPath;
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
          return _extends({}, st, {
            formState: _extends({}, st.formState, _defineProperty({}, (0, _validationUtils.getOneAnyOfPath)(parentPath, newFormData), newFormData))
          });
        });
        onChange(newFormData, {
          validate: false
        }, _this.state.selectedSchema.index);
      };
    };

    _this.renderSchemaField = function (depth) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          errorSchema = _this$props2.errorSchema,
          idPrefix = _this$props2.idPrefix,
          onBlur = _this$props2.onBlur,
          onFocus = _this$props2.onFocus,
          registry = _this$props2.registry,
          uiSchema = _this$props2.uiSchema,
          typeCombinatorTypesFromProps = _this$props2.typeCombinatorTypes,
          parentPath = _this$props2.parentPath,
          formData = _this$props2.formData,
          schema = _this$props2.schema;


      var _SchemaField = registry.fields.SchemaField;
      var selectedSchema = _this.state.selectedSchema;

      var _this$getSelectOption = _this.getSelectOptions(),
          selectOptions = _this$getSelectOption.selectOptions;

      var _schema$typeCombinato = schema.typeCombinatorTypes,
          typeCombinatorTypes = _schema$typeCombinato === undefined ? typeCombinatorTypesFromProps : _schema$typeCombinato;


      var childIsMap = selectedSchema.schema && selectedSchema.schema.type === "object" && selectedSchema.schema.hasOwnProperty("additionalProperties") && selectedSchema.schema.additionalProperties.type !== "object";

      var childIsArray = selectedSchema.schema && selectedSchema.schema.type === "array" && selectedSchema.schema.hasOwnProperty("items") && selectedSchema.schema.items.type !== "object";

      var childIsNestedMultipleSchema = (0, _utils.isMultipleSchema)(selectedSchema.schema);

      var isDiscriminatorChild = !(childIsArray || childIsMap || childIsNestedMultipleSchema);

      var uiTitle = selectOptions[selectedSchema.index].label;
      var childDepth = isDiscriminatorChild ? depth + 2 : depth + 1;

      var discriminatorObj = undefined;

      var typeCombinatorSubTypes = void 0;

      if (typeCombinatorTypes) {
        discriminatorObj = {
          name: schema.discriminator,
          value: typeCombinatorTypes[selectedSchema.index].DiscriminatorValue
        };

        var selectedSchemaTypeCombinator = typeCombinatorTypes[selectedSchema.index];

        typeCombinatorSubTypes = selectedSchemaTypeCombinator.ContainsSubTypes ? selectedSchemaTypeCombinator.SubTypes : null;
      }

      if (!_this.state && !formData) {
        return _react2.default.createElement(
          "p",
          null,
          "schema or formdata not available"
        );
      }

      return _react2.default.createElement(_SchemaField, {
        schema: selectedSchema.schema,
        uiSchema: _extends({}, uiSchema, {
          "ui:title": (0, _utils.isOneOfSchema)(selectedSchema.schema) ? undefined : uiTitle
        }),
        errorSchema: errorSchema,
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
        typeCombinatorTypes: typeCombinatorSubTypes,
        parentPath: (0, _validationUtils.getOneAnyOfPath)(parentPath, formData),
        discriminatorObj: discriminatorObj
      });
    };

    _this.renderSchema = function (depth) {
      var selectedSchema = _this.state.selectedSchema;


      var childIsMap = selectedSchema.schema && selectedSchema.schema.type === "object" && selectedSchema.schema.hasOwnProperty("additionalProperties") && selectedSchema.schema.additionalProperties.type !== "object";
      var childIsArray = selectedSchema.schema && selectedSchema.schema.type === "array" && selectedSchema.schema.hasOwnProperty("items") && selectedSchema.schema.items.type !== "object";
      var childIsNestedMultipleSchema = (0, _utils.isMultipleSchema)(selectedSchema.schema);
      var isDiscriminatorChild = !(childIsArray || childIsMap || childIsNestedMultipleSchema);

      var discriminatorChildFieldsetDepth = depth + 1;

      var discriminatorClassName = isDiscriminatorChild ? "discriminator-field-child " + getEvenOddClass(discriminatorChildFieldsetDepth) + " depth_" + discriminatorChildFieldsetDepth : "discriminator-field-child-empty";

      var additionalProperties = selectedSchema.schema.additionalProperties;


      var description = additionalProperties && additionalProperties.description;

      return description ? _react2.default.createElement(
        "fieldset",
        { className: (0, _utils.prefixClass)("field  " + discriminatorClassName + " ") },
        _this.renderSchemaField(depth)
      ) : _this.renderSchemaField(depth - 1);
    };

    _this.selectOnChange = function (value, initialRender) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          parentPath = _this$props3.parentPath,
          registry = _this$props3.registry;
      var dxInterface = registry.dxInterface;
      var _this$state = _this.state,
          formState = _this$state.formState,
          selectedSchema = _this$state.selectedSchema;

      // Don't do anything on same item click

      if (!initialRender && selectedSchema.index === value.index) {
        return;
      }

      _this.setState({
        selectedSchema: value
      });

      var defaultFormState = (0, _utils.getDefaultFormState)(value.schema, getInitialFormData(value.schema, value.index, _this.state.caseOf), 0, dxInterface);
      var path = (0, _validationUtils.getOneAnyOfPath)(parentPath, defaultFormState);

      if (!formState[path]) {
        _this.setState(function (st) {
          return _extends({}, st, {
            formState: _extends({}, st.formState, _defineProperty({}, path, defaultFormState))
          });
        });
      }

      onChange(formState[path] || defaultFormState, {
        validate: true
      }, value.index);
    };

    _this.toggleCheckbox = function () {
      var _this$props4 = _this.props,
          formData = _this$props4.formData,
          schema = _this$props4.schema,
          registry = _this$props4.registry,
          onChange = _this$props4.onChange;
      var dxInterface = registry.dxInterface;


      _this.setState(function (st) {
        var checked = st.checked;

        var updatedChecked = !checked;

        var initialSchema = schema.oneOf || schema.anyOf;
        var initialSchemaIndex = formData ? formData.$$__case : 0;
        var defaultFormState = (0, _utils.getDefaultFormState)(initialSchema[initialSchemaIndex], getInitialFormData(initialSchema[initialSchemaIndex], initialSchemaIndex, _this.state.caseOf), 0, dxInterface);

        onChange(updatedChecked ? defaultFormState : null, {
          validate: true
        }, initialSchemaIndex);
        return _extends({}, st, { checked: updatedChecked });
      });
    };

    _this.initializeFormData = function () {
      var _this$props5 = _this.props,
          formData = _this$props5.formData,
          disabled = _this$props5.disabled;


      if (!formData && !disabled) {
        var _this$getSelectOption2 = _this.getSelectOptions(),
            selectOptions = _this$getSelectOption2.selectOptions;

        _this.selectOnChange(selectOptions[0].value, true);
      }
    };

    _this.componentDidUpdate = function () {
      _this.initializeFormData();
    };

    _this.componentDidMount = function () {
      _this.initializeFormData();
    };

    _this.getSelectOptions = function () {
      var _this$props6 = _this.props,
          schema = _this$props6.schema,
          typeCombinatorTypesFromProps = _this$props6.typeCombinatorTypesFromProps,
          formData = _this$props6.formData,
          registry = _this$props6.registry;
      var dxInterface = registry.dxInterface;
      var _schema$typeCombinato2 = schema.typeCombinatorTypes,
          typeCombinatorTypes = _schema$typeCombinato2 === undefined ? typeCombinatorTypesFromProps : _schema$typeCombinato2;


      var multipleSchema = schema.oneOf || schema.anyOf;

      return multipleSchema.reduce(function (_ref, schema, index) {
        var selectOptions = _ref.selectOptions,
            charCounts = _ref.charCounts;

        if (schema.hasOwnProperty("$ref")) {
          schema = (0, _utils.retrieveSchema)(schema, formData, dxInterface);
        }
        if (schema.additionalProperties && schema.additionalProperties.hasOwnProperty("$ref")) {
          schema.additionalProperties = (0, _utils.retrieveSchema)(schema.additionalProperties, formData, dxInterface);
        }

        var type = typeCombinatorTypes && typeCombinatorTypes[index].DataType;
        var label = type ? type : getMultipleLabel(schema) || schema.type || "";

        selectOptions.push({
          label: label,
          value: {
            index: index,
            schema: schema
          }
        });

        return { selectOptions: selectOptions, charCounts: charCounts + label.length };
      }, { selectOptions: [], charCounts: 0 });
    };

    _this.state = {
      collapse: false,
      checked: false
    };
    return _this;
  }

  _createClass(DiscriminatorField, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          schema = _props.schema,
          fromMap = _props.fromMap,
          fieldProps = _props.fieldProps,
          fromDiscriminator = _props.fromDiscriminator,
          disabled = _props.disabled,
          tagsTitle = _props.tagsTitle;
      var _state = this.state,
          selectedSchema = _state.selectedSchema,
          checked = _state.checked,
          optional = _state.optional;

      var _getSelectOptions = this.getSelectOptions(),
          selectOptions = _getSelectOptions.selectOptions,
          charCounts = _getSelectOptions.charCounts;

      var isOneOfOrAnyOf = selectedSchema.schema.hasOwnProperty("oneOf") || selectedSchema.schema.hasOwnProperty("anyOf");
      var isObject = selectedSchema.schema.type === "array" || selectedSchema.schema.type === "object" || isOneOfOrAnyOf;
      var depth = fromMap ? this.props.depth + 1 : this.props.depth;
      var tagSelectorClassName = (0, _utils.classNames)({
        "anyof-child": isObject && isOneOfOrAnyOf,
        "object-child": !isObject || isObject && !isOneOfOrAnyOf,
        "select-container": charCounts > CHAR_THRESHOLD
      });

      return _react2.default.createElement(
        _SchemaField2.DefaultTemplate,
        _extends({}, fieldProps, {
          nullify: checked,
          required: !optional,
          onNullifyChange: this.toggleCheckbox,
          fromDiscriminator: fromDiscriminator
        }),
        !optional || optional && checked && !disabled ? _react2.default.createElement(
          "fieldset",
          {
            className: (0, _utils.prefixClass)("field " + getEvenOddClass(depth) + " depth_" + depth + " discriminator-field")
          },
          _react2.default.createElement(_TagSelector2.default, {
            className: tagSelectorClassName,
            value: selectedSchema,
            title: tagsTitle || getMultipleLabel(schema),
            options: selectOptions,
            onChange: this.selectOnChange
          }),
          this.renderSchema(depth)
        ) : null
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var schema = props.schema,
          formData = props.formData,
          parentPath = props.parentPath,
          required = props.required,
          fromDiscriminator = props.fromDiscriminator;

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
      var initialSchemaIndex = formData && formData.$$__case ? formData.$$__case : 0;
      var data = formData || {};
      var caseOf = getMultipleSchemaType(schema);
      var newState = {
        formState: formData ? _extends({}, state.formState, _defineProperty({}, (0, _validationUtils.getOneAnyOfPath)(parentPath, data), formData)) : {},
        selectedSchema: {
          index: initialSchemaIndex,
          schema: initialSchema[initialSchemaIndex]
        },
        caseOf: caseOf,
        optional: fromDiscriminator ? false : !required
      };

      return newState;
    }
  }]);

  return DiscriminatorField;
}(_react2.default.Component);

/* istanbul ignore else */


DiscriminatorField.defaultProps = {
  disabled: false,
  errorSchema: {},
  uiSchema: {}
};

if (process.env.NODE_ENV !== "production") {
  DiscriminatorField.propTypes = {
    options: _propTypes2.default.arrayOf(_propTypes2.default.object),
    baseType: _propTypes2.default.string,
    uiSchema: _propTypes2.default.object,
    formData: _propTypes2.default.any,
    errorSchema: _propTypes2.default.object,
    dxInterface: _propTypes2.default.shape({
      registry: _propTypes2.default.shape({
        widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
        fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
        definitions: _propTypes2.default.object.isRequired,
        formContext: _propTypes2.default.object.isRequired
      })
    })
  };
}

exports.default = DiscriminatorField;