"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.generateFormDataForMultipleSchema = generateFormDataForMultipleSchema;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
var _TagSelector = _interopRequireDefault(require("../widgets/TagSelector"));
var _validationUtils = require("../../validationUtils");
var _SchemaField2 = require("./SchemaField");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
var DiscriminatorField = /*#__PURE__*/function (_React$Component) {
  _inherits(DiscriminatorField, _React$Component);
  var _super = _createSuper(DiscriminatorField);
  function DiscriminatorField(props) {
    var _this;
    _classCallCheck(this, DiscriminatorField);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "state", void 0);
    _defineProperty(_assertThisInitialized(_this), "onDiscriminatorChange", function () {
      var _this$props = _this.props,
        onChange = _this$props.onChange,
        formData = _this$props.formData,
        parentPath = _this$props.parentPath;
      var selectedSchema = _this.state.selectedSchema;
      return function (value, options, schemaIndex) {
        var newFormData;
        if ((0, _utils.checkDiscriminator)(formData)) {
          newFormData = _objectSpread(_objectSpread({}, formData), {}, {
            $$__case: selectedSchema.index,
            value: value
          });
        } else {
          newFormData = _objectSpread(_objectSpread({}, formData), {}, {
            value: value
          });
        }
        _this.setState(function (st) {
          return _objectSpread(_objectSpread({}, st), {}, {
            formState: _objectSpread(_objectSpread({}, st.formState), {}, _defineProperty({}, (0, _validationUtils.getOneAnyOfPath)(parentPath, newFormData), newFormData))
          });
        });
        onChange(newFormData, {
          validate: false
        }, _this.state.selectedSchema.index);
      };
    });
    _defineProperty(_assertThisInitialized(_this), "renderSchema", function (depth) {
      var _classNames;
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
      var fields = registry.fields,
        dxInterface = registry.dxInterface;
      var definitions = dxInterface.definitions;
      var _SchemaField = fields.SchemaField;
      var selectedSchema = _this.state.selectedSchema;
      var _this$getSelectOption = _this.getSelectOptions(),
        selectOptions = _this$getSelectOption.selectOptions;
      var _schema$typeCombinato = schema.typeCombinatorTypes,
        typeCombinatorTypes = _schema$typeCombinato === void 0 ? typeCombinatorTypesFromProps : _schema$typeCombinato;
      var schemaDefination = selectedSchema.schema.hasOwnProperty("$ref") && (0, _utils.findSchemaDefinition)(selectedSchema.schema.$ref, definitions);
      var hasSchemaDefination = schemaDefination && schemaDefination.type === "object";
      var childIsMap = selectedSchema.schema && selectedSchema.schema.type === "object" && selectedSchema.schema.hasOwnProperty("additionalProperties") && selectedSchema.schema.additionalProperties.type !== "object";
      var childIsArray = selectedSchema.schema && selectedSchema.schema.type === "array" && selectedSchema.schema.hasOwnProperty("items") && selectedSchema.schema.items.type !== "object";
      var childIsNestedMultipleSchema = (0, _utils.isMultipleSchema)(selectedSchema.schema);
      var isDiscriminatorChild = !(childIsArray || childIsMap || childIsNestedMultipleSchema) && hasSchemaDefination;
      var uiTitle = selectOptions[selectedSchema.index].label;
      var discriminatorObj = undefined;
      var discriminatorChildFieldsetDepth = depth + 1;
      var childDepth = isDiscriminatorChild ? depth + 2 : depth + 1;
      var discriminatorClassName = (0, _utils.classNames)((_classNames = {
        field: true,
        "discriminator-field-child": isDiscriminatorChild
      }, _defineProperty(_classNames, (0, _utils.getEvenOddClass)(discriminatorChildFieldsetDepth), isDiscriminatorChild), _defineProperty(_classNames, "depth_".concat(discriminatorChildFieldsetDepth), isDiscriminatorChild), _defineProperty(_classNames, "discriminator-field-child-empty", !isDiscriminatorChild), _defineProperty(_classNames, "even-bg", (0, _utils.getEvenOdd)(discriminatorChildFieldsetDepth)), _defineProperty(_classNames, "odd-bg", !(0, _utils.getEvenOdd)(discriminatorChildFieldsetDepth)), _classNames));
      var typeCombinatorSubTypes;
      if (typeCombinatorTypes) {
        discriminatorObj = {
          name: schema.discriminator,
          value: typeCombinatorTypes[selectedSchema.index].DiscriminatorValue
        };
        var selectedSchemaTypeCombinator = typeCombinatorTypes[selectedSchema.index];
        typeCombinatorSubTypes = selectedSchemaTypeCombinator.ContainsSubTypes ? selectedSchemaTypeCombinator.SubTypes : null;
      }
      return /*#__PURE__*/_react.default.createElement("fieldset", {
        className: (0, _utils.prefixClass)(discriminatorClassName)
      }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _this.state && formData ? /*#__PURE__*/_react.default.createElement(_SchemaField, {
        schema: selectedSchema.schema,
        uiSchema: _objectSpread(_objectSpread({}, uiSchema), {}, {
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
        ,
        fromDiscriminator: true
        // Title will set in boolean fields
        ,
        anyOfTitle: _this.props.schema.title || _this.props.anyOfTitle,
        typeCombinatorTypes: typeCombinatorSubTypes,
        parentPath: (0, _validationUtils.getOneAnyOfPath)(parentPath, formData),
        discriminatorObj: discriminatorObj
      }) : /*#__PURE__*/_react.default.createElement("p", null, "schema or formdata not available")));
    });
    _defineProperty(_assertThisInitialized(_this), "selectOnChange", function (value, initialRender) {
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
          return _objectSpread(_objectSpread({}, st), {}, {
            formState: _objectSpread(_objectSpread({}, st.formState), {}, _defineProperty({}, path, defaultFormState))
          });
        });
      }
      onChange(formState[path] || defaultFormState, {
        validate: true
      }, value.index);
    });
    _defineProperty(_assertThisInitialized(_this), "toggleCheckbox", function () {
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
        return _objectSpread(_objectSpread({}, st), {}, {
          checked: updatedChecked
        });
      });
    });
    _defineProperty(_assertThisInitialized(_this), "initializeFormData", function () {
      var _this$props5 = _this.props,
        formData = _this$props5.formData,
        disabled = _this$props5.disabled;
      if (!formData && !disabled) {
        var _this$getSelectOption2 = _this.getSelectOptions(),
          selectOptions = _this$getSelectOption2.selectOptions;
        _this.selectOnChange(selectOptions[0].value, true);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
      _this.initializeFormData();
    });
    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.initializeFormData();
    });
    _defineProperty(_assertThisInitialized(_this), "getSelectOptions", function () {
      var _this$props6 = _this.props,
        schema = _this$props6.schema,
        typeCombinatorTypesFromProps = _this$props6.typeCombinatorTypesFromProps,
        formData = _this$props6.formData,
        registry = _this$props6.registry;
      var dxInterface = registry.dxInterface;
      var _schema$typeCombinato2 = schema.typeCombinatorTypes,
        typeCombinatorTypes = _schema$typeCombinato2 === void 0 ? typeCombinatorTypesFromProps : _schema$typeCombinato2;
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
        return {
          selectOptions: selectOptions,
          charCounts: charCounts + label.length
        };
      }, {
        selectOptions: [],
        charCounts: 0
      });
    });
    _this.state = {
      collapse: false,
      checked: false
    };
    return _this;
  }
  _createClass(DiscriminatorField, [{
    key: "render",
    value: function render() {
      var _classNames2;
      var _this$props7 = this.props,
        schema = _this$props7.schema,
        depth = _this$props7.depth,
        fieldProps = _this$props7.fieldProps,
        fromDiscriminator = _this$props7.fromDiscriminator,
        disabled = _this$props7.disabled,
        tagsTitle = _this$props7.tagsTitle;
      var _this$state2 = this.state,
        selectedSchema = _this$state2.selectedSchema,
        checked = _this$state2.checked,
        optional = _this$state2.optional;
      var _this$getSelectOption3 = this.getSelectOptions(),
        selectOptions = _this$getSelectOption3.selectOptions,
        charCounts = _this$getSelectOption3.charCounts;
      var isOneOfOrAnyOf = selectedSchema.schema.hasOwnProperty("oneOf") || selectedSchema.schema.hasOwnProperty("anyOf");
      var isObject = selectedSchema.schema.type === "array" || selectedSchema.schema.type === "object" || isOneOfOrAnyOf;
      var tagSelectorClassName = (0, _utils.classNames)({
        "anyof-child": isObject && isOneOfOrAnyOf,
        "object-child": !isObject || isObject && !isOneOfOrAnyOf,
        "select-container": charCounts > CHAR_THRESHOLD
      });
      var fieldSetClassNames = (0, _utils.classNames)((_classNames2 = {
        field: true
      }, _defineProperty(_classNames2, (0, _utils.getEvenOddClass)(depth), true), _defineProperty(_classNames2, "depth_".concat(depth), true), _defineProperty(_classNames2, "discriminator-field", true), _defineProperty(_classNames2, "even-bg", (0, _utils.getEvenOdd)(depth)), _defineProperty(_classNames2, "odd-bg", !(0, _utils.getEvenOdd)(depth)), _classNames2));
      return /*#__PURE__*/_react.default.createElement(_SchemaField2.DefaultTemplate, _extends({}, fieldProps, {
        nullify: checked,
        required: !optional,
        onNullifyChange: this.toggleCheckbox,
        fromDiscriminator: fromDiscriminator
      }), !optional || optional && checked && !disabled ? /*#__PURE__*/_react.default.createElement("fieldset", {
        className: (0, _utils.prefixClass)(fieldSetClassNames)
      }, /*#__PURE__*/_react.default.createElement(_TagSelector.default, {
        className: tagSelectorClassName,
        value: selectedSchema,
        title: tagsTitle || getMultipleLabel(schema),
        options: selectOptions,
        onChange: this.selectOnChange
      }), this.renderSchema(depth)) : null);
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
        formState: formData ? _objectSpread(_objectSpread({}, state.formState), {}, _defineProperty({}, (0, _validationUtils.getOneAnyOfPath)(parentPath, data), formData)) : {},
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
}(_react.default.Component); /* istanbul ignore else */
DiscriminatorField.defaultProps = {
  disabled: false,
  errorSchema: {},
  uiSchema: {}
};
if (process.env.NODE_ENV !== "production") {
  DiscriminatorField.propTypes = {
    options: _propTypes.default.arrayOf(_propTypes.default.object),
    baseType: _propTypes.default.string,
    uiSchema: _propTypes.default.object,
    formData: _propTypes.default.any,
    errorSchema: _propTypes.default.object,
    dxInterface: _propTypes.default.shape({
      registry: _propTypes.default.shape({
        widgets: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
        fields: _propTypes.default.objectOf(_propTypes.default.func).isRequired,
        definitions: _propTypes.default.object.isRequired,
        formContext: _propTypes.default.object.isRequired
      })
    })
  };
}
var _default = DiscriminatorField;
exports.default = _default;