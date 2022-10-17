"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultTemplate = DefaultTemplate;
exports.Label = Label;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsonSchemaMergeAllof = _interopRequireDefault(require("json-schema-merge-allof"));
var _DataType = _interopRequireDefault(require("./DataType"));
var _utils = require("../../utils");
var _UnsupportedField = _interopRequireDefault(require("./UnsupportedField"));
var _validationUtils = require("../../validationUtils");
var _excluded = ["__errors"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// const REQUIRED_FIELD_SYMBOL = "*";
var COMPONENT_TYPES = {
  array: "ArrayField",
  boolean: "BooleanField",
  integer: "NumberField",
  number: "NumberField",
  object: "ObjectField",
  string: "StringField",
  discriminator: "DiscriminatorField"
};
var MERGE_ALLOF_OPTIONS = {
  ignoreAdditionalProperties: true,
  resolvers: {
    defaultResolver: function defaultResolver(values) {
      return values.length ? values[0] : "";
    },
    id: function id(values) {
      return values.length ? values[0] : "";
    },
    description: function description(values) {
      return values.length ? values[0] : "";
    },
    dataTypeLink: function dataTypeLink(values) {
      return values.length ? values[0] : "";
    },
    dataTypeDisplayText: function dataTypeDisplayText(values) {
      return values.length ? values[0] : "";
    }
  }
};
function getFieldComponent(schema, uiSchema, fields) {
  var field = uiSchema["ui:field"];
  if (typeof field === "function") {
    return field;
  }
  if (typeof field === "string" && field in fields) {
    return fields[field];
  }
  var componentName = COMPONENT_TYPES[schema.type];
  if (!componentName && (schema.oneOf || schema.anyOf)) {
    var a = fields["DiscriminatorField"];
    return a;
  }
  if (schema.typeCombinatorTypes && schema.type !== "array" && !schema.additionalProperties) {
    return fields["DiscrimatorWrapper"];
  }

  // In case of multiple types, we are going to pick first one
  // according to @saeedjamshaid
  if (Array.isArray(schema.type)) {
    var _schema$type = _slicedToArray(schema.type, 1),
      type = _schema$type[0];
    var compName = COMPONENT_TYPES[type];
    schema.type = type;
    return fields[compName];
  }
  return componentName in fields ? fields[componentName] : function () {
    return /*#__PURE__*/_react.default.createElement(_UnsupportedField.default, {
      schema: schema,
      reason: "Unknown field type ".concat(schema.type)
    });
  };
}
function Label(props) {
  var label = props.label,
    id = props.id;
  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
  return /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _utils.prefixClass)("control-label"),
    htmlFor: id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "label-text"
  }, label));
}
function Help(props) {
  var help = props.help;
  if (!help) {
    // See #312: Ensure compatibility with old versions of React.
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
  if (typeof help === "string") {
    return /*#__PURE__*/_react.default.createElement("p", {
      className: (0, _utils.prefixClass)("help-block")
    }, help);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("help-block")
  }, help);
}
function ErrorList(props) {
  var _props$errors = props.errors,
    errors = _props$errors === void 0 ? [] : _props$errors;
  if (errors.length === 0) {
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null), /*#__PURE__*/_react.default.createElement("ul", {
    className: (0, _utils.prefixClass)("error-detail bs-callout bs-callout-info")
  }, errors.map(function (error, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: (0, _utils.prefixClass)("text-danger"),
      key: index
    }, error);
  })));
}
function DefaultTemplate(props) {
  var id = props.id,
    classNames = props.classNames,
    label = props.label,
    children = props.children,
    help = props.help,
    description = props.description,
    hidden = props.hidden,
    required = props.required,
    displayLabel = props.displayLabel,
    nullify = props.nullify,
    onNullifyChange = props.onNullifyChange,
    disabled = props.disabled,
    fromDiscriminator = props.fromDiscriminator,
    formData = props.formData,
    schema = props.schema;
  if (hidden) {
    return children;
  }
  var dataType = props.schema.dataTypeDisplayText ? props.schema.dataTypeDisplayText : props.schema.type;
  var markdown = props.schema.dataTypeMarkdown;
  var errors = /*#__PURE__*/_react.default.createElement(ErrorList, {
    errors: (0, _validationUtils.validateField)(schema, formData, required, disabled)
  });
  if (schema.readOnly) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)(classNames)
  }, displayLabel && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("field-header")
  }, onNullifyChange && !required ? /*#__PURE__*/_react.default.createElement("legend", null, /*#__PURE__*/_react.default.createElement("label", {
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: nullify,
    className: !disabled && nullify ? "checked" : "unchecked",
    onChange: onNullifyChange,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("span", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("checkbox-text")
  }, label)) : /*#__PURE__*/_react.default.createElement(Label, {
    label: label,
    required: required,
    id: id
  }), !fromDiscriminator && required && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("element-required")
  }, /*#__PURE__*/_react.default.createElement("span", null, "Required"))), displayLabel && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("type-container")
  }, /*#__PURE__*/_react.default.createElement(_DataType.default, {
    title: dataType,
    link: props.schema.dataTypeLink,
    type: "schema",
    markdown: markdown
  }), props.schema.paramType && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("param-type")
  }, props.schema.paramType)), displayLabel && description ? description : null, children, onNullifyChange && !nullify ? null : errors, help);
}
if (process.env.NODE_ENV !== "production") {
  DefaultTemplate.propTypes = {
    id: _propTypes.default.string,
    classNames: _propTypes.default.string,
    label: _propTypes.default.string,
    children: _propTypes.default.node.isRequired,
    errors: _propTypes.default.element,
    rawErrors: _propTypes.default.arrayOf(_propTypes.default.string),
    help: _propTypes.default.element,
    rawHelp: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    description: _propTypes.default.element,
    rawDescription: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    hidden: _propTypes.default.bool,
    required: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    displayLabel: _propTypes.default.bool,
    fields: _propTypes.default.object,
    formContext: _propTypes.default.object
  };
}
DefaultTemplate.defaultProps = {
  hidden: false,
  readonly: false,
  required: false,
  displayLabel: true
};
function SchemaFieldRender(props) {
  var uiSchema = props.uiSchema,
    errorSchema = props.errorSchema,
    name = props.name,
    formData = props.formData,
    required = props.required,
    schemaIndex = props.schemaIndex,
    _props$registry = props.registry,
    registry = _props$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _props$registry,
    anyOfTitle = props.anyOfTitle,
    typeCombinatorTypes = props.typeCombinatorTypes,
    _props$discriminatorO = props.discriminatorObj,
    discriminatorObj = _props$discriminatorO === void 0 ? {} : _props$discriminatorO,
    fromDiscriminator = props.fromDiscriminator;
  var dxInterface = registry.dxInterface,
    fields = registry.fields,
    formContext = registry.formContext,
    _registry$FieldTempla = registry.FieldTemplate,
    FieldTemplate = _registry$FieldTempla === void 0 ? DefaultTemplate : _registry$FieldTempla;
  var discriminatorProperty = discriminatorObj.name;
  var isDiscriminator = discriminatorProperty && discriminatorProperty === name;
  var isDiscriminatorField = (0, _utils.isDiscriminator)(name, discriminatorObj);

  // If direct circular reference, we will not fetch further schema through references
  var schema = (0, _utils.retrieveSchema)(props.schema, formData, dxInterface);
  if (schema.allOf && !schema.typeCombinatorTypes) {
    schema = (0, _jsonSchemaMergeAllof.default)(schema, MERGE_ALLOF_OPTIONS);
  }
  var FieldComponent = getFieldComponent(schema, uiSchema, fields);
  var DescriptionField = fields.DescriptionField;
  var disabled = Boolean(props.disabled || uiSchema["ui:disabled"] || isDiscriminator);
  var readonly = Boolean(props.readonly || uiSchema["ui:readonly"]);
  var autofocus = Boolean(props.autofocus || uiSchema["ui:autofocus"]);
  var _typeCombinatorTypes = typeCombinatorTypes || schema.typeCombinatorTypes || null;
  if (props.schema.hasOwnProperty("$ref") || schema.type === "array" && props.schema.items.hasOwnProperty("$ref")) {
    schema.title = name;
  }
  if (Object.keys(schema).length === 0) {
    // See #312: Ensure compatibility with old versions of React.
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
  var uiOptions = (0, _utils.getUiOptions)(uiSchema);
  var _uiOptions$label = uiOptions.label,
    displayLabel = _uiOptions$label === void 0 ? true : _uiOptions$label;
  if (schema.type === "array") {
    displayLabel = (0, _utils.isMultiSelect)(schema, dxInterface) || (0, _utils.isFilesArray)(schema, uiSchema, dxInterface);
  }
  if (schema.type === "object" && !schema.typeCombinatorTypes) {
    displayLabel = false;
  }
  if (schema.type === "boolean" && !uiSchema["ui:widget"]) {
    displayLabel = false;
  }
  if (uiSchema["ui:field"]) {
    displayLabel = false;
  }
  var __errors = errorSchema.__errors,
    fieldErrorSchema = _objectWithoutProperties(errorSchema, _excluded);
  var _schema = schema,
    type = _schema.type;
  var label = uiSchema["ui:title"] || name || props.schema.title || schema.title;
  var description = uiSchema["ui:description"] || props.schema.description || schema.description;
  var errors = __errors;
  var help = uiSchema["ui:help"];
  var hidden = uiSchema["ui:widget"] === "hidden";
  var classNames = ["form-group", "field", "field-".concat(type), errors && errors.length > 0 ? "field-error has-error has-danger" : "", schema.oneOf || schema.anyOf ? "discriminator-container" : "", uiSchema.classNames, fromDiscriminator ? "from-discriminator" : ""].join(" ").trim();
  var fieldProps = {
    description: /*#__PURE__*/_react.default.createElement(DescriptionField, {
      description: description,
      formContext: formContext,
      isDiscriminatorField: isDiscriminatorField
    }),
    rawDescription: description,
    help: /*#__PURE__*/_react.default.createElement(Help, {
      help: help
    }),
    rawHelp: typeof help === "string" ? help : undefined,
    errors: /*#__PURE__*/_react.default.createElement(ErrorList, {
      errors: errors
    }),
    rawErrors: errors,
    label: label,
    hidden: hidden,
    required: required,
    disabled: disabled,
    readonly: readonly,
    displayLabel: displayLabel,
    classNames: classNames,
    formContext: formContext,
    fields: fields,
    schema: schema,
    uiSchema: uiSchema,
    anyOfTitle: anyOfTitle,
    discriminatorObj: discriminatorObj,
    formData: formData
  };

  // See #439: uiSchema: Don't pass consumed class names to child components
  var field = /*#__PURE__*/_react.default.createElement(FieldComponent, _extends({}, props, {
    definitions: dxInterface.definitions,
    schema: schema,
    uiSchema: _objectSpread(_objectSpread({}, uiSchema), {}, {
      classNames: undefined
    }),
    disabled: disabled,
    readonly: readonly,
    autofocus: autofocus,
    errorSchema: fieldErrorSchema,
    formContext: formContext,
    schemaIndex: schemaIndex,
    typeCombinatorTypes: _typeCombinatorTypes,
    fieldProps: fieldProps,
    discriminatorObj: discriminatorObj
  }));
  return (0, _utils.isOneOfSchema)(schema) || !(0, _utils.isOneOfSchema)(schema) && schema.typeCombinatorTypes && schema.type !== "array" ? field : /*#__PURE__*/_react.default.createElement(FieldTemplate, fieldProps, field);
}
var SchemaField = /*#__PURE__*/function (_React$Component) {
  _inherits(SchemaField, _React$Component);
  var _super = _createSuper(SchemaField);
  function SchemaField() {
    _classCallCheck(this, SchemaField);
    return _super.apply(this, arguments);
  }
  _createClass(SchemaField, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      // if schemas are equal idSchemas will be equal as well,
      // so it is not necessary to compare
      return !(0, _utils.deepEquals)(_objectSpread({}, this.props), _objectSpread({}, nextProps));
    }
  }, {
    key: "render",
    value: function render() {
      return SchemaFieldRender(this.props);
    }
  }]);
  return SchemaField;
}(_react.default.Component);
SchemaField.defaultProps = {
  uiSchema: {},
  errorSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  SchemaField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.object,
    formData: _propTypes.default.any,
    errorSchema: _propTypes.default.object,
    schemaIndex: _propTypes.default.number,
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
var _default = SchemaField;
exports.default = _default;