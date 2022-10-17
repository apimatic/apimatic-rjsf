"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _MapField = _interopRequireDefault(require("./MapField"));
var _utils = require("../../utils");
var _validate = require("../../validate");
var _reactCodemirror = _interopRequireDefault(require("react-codemirror2"));
var _DataType = _interopRequireDefault(require("../fields/DataType"));
require("codemirror/mode/javascript/javascript");
var _Icons = require("../Icons");
var _excluded = ["type", "icon", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var cmOptions = {
  theme: "default",
  height: "auto",
  viewportMargin: Infinity,
  mode: {
    name: "javascript",
    json: true,
    statementIndent: 2
  },
  lineNumbers: true,
  lineWrapping: true,
  indentWithTabs: false,
  tabSize: 2
};
var READONLY_INFO_MESSAGE = "All properties in this object are Response Only. Response Only means that it may be sent as a part of the response but should not be sent as part of the request";

// const viewJsonButtonStyle = {
//   color: "#2C6EFA",
//   fontSize: "12px",
//   cursor: "pointer",
//   background: "#fff",
//   border: "none",
//   float: "right"
// };

// const viewJsonButtonWrapper = {
//   height: "17px",
//   marginBottom: "10px"
// };

function renderErrorSchema(errorSchema) {
  var errorList = (0, _validate.toErrorList)(errorSchema);
  return /*#__PURE__*/_react.default.createElement("ul", null, errorList.map(function (key, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, key.stack);
  }));
}
function IconBtn(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? "default" : _props$type,
    icon = props.icon,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    className: (0, _utils.prefixClass)("btn btn-".concat(type)) + " " + className
  }, otherProps), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _utils.prefixClass)("tooltip")
  }), props.children);
}
function renderViewJsonButton(props) {
  var formJsonError = props.formJsonError,
    errorSchema = props.errorSchema,
    toggleEditView = props.toggleEditView,
    showEditView = props.showEditView;
  var disableViewJsonButton = formJsonError || Object.keys(errorSchema).length !== 0;
  return disableViewJsonButton ? /*#__PURE__*/_react.default.createElement(IconBtn, {
    className: (0, _utils.prefixClass)("btn json-button json-button-disabled"),
    disabled: true
  }, /*#__PURE__*/_react.default.createElement(_Icons.JsonIcon, null)) : /*#__PURE__*/_react.default.createElement(IconBtn, {
    onClick: toggleEditView,
    className: (0, _utils.prefixClass)("btn json-button ".concat(showEditView ? "form-view" : ""))
  }, /*#__PURE__*/_react.default.createElement(_Icons.JsonIcon, null));

  /* 
        <div style={viewJsonButtonWrapper}>
        {disableViewJsonButton ? (
        <button
          className={pfx("view-json-button")}
          style={viewJsonButtonStyle}
          disabled
        >
          {showEditView ? "View Form" : "View JSON"}
        </button>
      ) : (
        <button
          className={pfx("view-json-button")}
          style={viewJsonButtonStyle}
          onClick={toggleEditView}
        >
          {showEditView ? "View Form" : "View JSON"}
        </button>
      }
      </div>
      )} */
}

function DefaultOnlyProperties(props) {
  return props.properties.map(function (prop) {
    return prop.content();
  });
}
function DefaultObjectFieldTemplate(props) {
  var _classNames;
  var TitleField = props.TitleField,
    DescriptionField = props.DescriptionField,
    nullify = props.nullify,
    onNullifyChange = props.onNullifyChange,
    disabled = props.disabled,
    collapse = props.collapse,
    toggleCollapse = props.toggleCollapse,
    fromDiscriminator = props.fromDiscriminator,
    depth = props.depth;
  var headerClasses = (0, _utils.classNames)((_classNames = {}, _defineProperty(_classNames, (0, _utils.prefixClass)("object-header"), true), _defineProperty(_classNames, "position-unset", fromDiscriminator), _classNames));
  var canEditJson = nullify && !props.disableFormJsonEdit && !props.uiSchema.disableFieldJsonEdit;
  var canCollapse = props.properties && props.properties.length > 0 && !props.disableFormJsonEdit && !props.uiSchema.disableFieldJsonEdit;
  var dataType = props.schema.dataTypeDisplayText;
  var markdown = props.schema.dataTypeMarkdown;
  var title = props.uiSchema["ui:title"] || props.schema.title || props.title;
  var elementPropsClassNames = (0, _utils.classNames)({
    "element-properties": true,
    "json-edit-view": props.showEditView,
    "even-bg": (0, _utils.getEvenOdd)(depth),
    "odd-bg": !(0, _utils.getEvenOdd)(depth)
  });
  return /*#__PURE__*/_react.default.createElement("fieldset", {
    className: (0, _utils.prefixClass)((props.isEven ? "even" : "odd") + " depth_".concat(props.depth))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: headerClasses
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("header-left hand"),
    onClick: toggleCollapse
  }, title && /*#__PURE__*/_react.default.createElement(TitleField, {
    title: title,
    required: props.required,
    formContext: props.formContext,
    nullify: nullify,
    onNullifyChange: onNullifyChange,
    disabled: disabled,
    fromDiscriminator: props.fromDiscriminator
  }), props.required && (props.uiSchema["ui:title"] || props.title) && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("element-required")
  }, /*#__PURE__*/_react.default.createElement("span", null, "Required"))), canEditJson && renderViewJsonButton(props), canCollapse && /*#__PURE__*/_react.default.createElement(IconBtn, {
    tabIndex: "-1",
    onClick: toggleCollapse,
    className: (0, _utils.prefixClass)("btn toggle-button")
  }, collapse ? /*#__PURE__*/_react.default.createElement(_Icons.ChevronIcon, {
    width: 14,
    rotate: -90
  }) : /*#__PURE__*/_react.default.createElement(_Icons.ChevronIcon, {
    width: 14
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("type-container")
  }, /*#__PURE__*/_react.default.createElement(_DataType.default, {
    title: dataType,
    link: props.schema.dataTypeLink,
    type: "object-type",
    markdown: markdown
  }), props.schema.paramType && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("param-type")
  }, props.schema.paramType)), props.description && /*#__PURE__*/_react.default.createElement(DescriptionField, {
    description: props.description,
    formContext: props.formContext
  }), (!collapse || !canCollapse) && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)(elementPropsClassNames)
  }, props.showEditView && canEditJson ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactCodemirror.default, {
    value: props.formJson,
    onChange: props.onJsonChange,
    options: cmOptions
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("editor-validation-errors")
  }, props.formJsonError && /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Could not parse JSON. Syntax error.")), Object.keys(props.errorSchema).length !== 0 && renderErrorSchema(props.errorSchema))) : props.properties.map(function (prop) {
    return prop.content();
  })));
}
var ObjectField = /*#__PURE__*/function (_Component) {
  _inherits(ObjectField, _Component);
  var _super = _createSuper(ObjectField);
  function ObjectField(_props) {
    var _this;
    _classCallCheck(this, ObjectField);
    _this = _super.call(this, _props);
    _defineProperty(_assertThisInitialized(_this), "onPropertyChange", function (name) {
      return function (value, options, schemaIndex) {
        var newFormData = {};
        newFormData = _objectSpread(_objectSpread({}, _this.props.formData), {}, _defineProperty({}, name, value));
        _this.props.onChange(newFormData, options, schemaIndex);
      };
    });
    _defineProperty(_assertThisInitialized(_this), "onNullifyChange", function () {
      _this.setState({
        formJsonError: false,
        showEditView: false
      });
      if (_this.shouldDisable()) {
        if (_this.state.originalFormData) {
          _this.props.onChange(_this.state.originalFormData);
        } else if (!_this.props.schema.properties) {
          _this.props.onChange({
            key: "value"
          });
        } else {
          _this.props.onChange((0, _utils.getDefaultFormState)(_this.props.schema, _this.props.formData, undefined, _this.props.registry.dxInterface));
        }
      } else {
        _this.props.onChange(undefined);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "shouldDisable", function () {
      return (_this.props.formData === undefined || Object.keys(_this.props.formData).length === 0) && !_this.props.required && !_this.props.fromDiscriminator;
    });
    _defineProperty(_assertThisInitialized(_this), "onJsonChange", function (editor, metadata, code) {
      var err = false;
      var parsed = null;
      try {
        parsed = JSON.parse(code);
      } catch (e) {
        err = true;
      }
      _this.setState(function (prevState, props) {
        !err && props.onChange(parsed);
        return {
          formJson: code,
          formJsonError: err
        };
      });
    });
    _defineProperty(_assertThisInitialized(_this), "getTemplate", function () {
      var _this$props = _this.props,
        registry = _this$props.registry,
        fromDiscriminator = _this$props.fromDiscriminator;
      return registry.ObjectFieldTemplate || fromDiscriminator ? DefaultOnlyProperties : DefaultObjectFieldTemplate;
    });
    _defineProperty(_assertThisInitialized(_this), "getIsEven", function () {
      var fromDiscriminator = _this.props.fromDiscriminator;
      return fromDiscriminator ? _this.state.isEven : !_this.state.isEven;
    });
    _defineProperty(_assertThisInitialized(_this), "getDepth", function () {
      var fromDiscriminator = _this.props.fromDiscriminator;
      return fromDiscriminator ? _this.state.depth : _this.state.depth + 1;
    });
    _this.state = _this.getStateFromProps(_props);
    _this.state.formJson = JSON.stringify(_props.formData, null, 2);
    _this.state.formJsonError = false;
    _this.state.showEditView = false;
    _this.state.collapse = true;
    _this.state.isEven = _props.isEven || _props.levelReversal ? true : false;
    _this.state.expandAllLevel = _props.expandAllLevel;
    _this.state.depth = _props.depth ? _props.depth : 1;
    _this.toggleEditView = _this.toggleEditView.bind(_assertThisInitialized(_this));
    _this.toggleCollapse = _this.toggleCollapse.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ObjectField, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var collapse = this.state.depth === this.state.expandAllLevel && this.state.expandAll !== nextProps.expandAll ? !nextProps.expandAll : this.state.collapse;
      this.setState(_objectSpread(_objectSpread({}, this.getStateFromProps(nextProps)), {}, {
        collapse: collapse,
        expandAllLevel: this.state.expandAllLevel,
        expandAll: nextProps.expandAll
      }));
    }
  }, {
    key: "isJsonString",
    value: function isJsonString(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }
  }, {
    key: "getStateFromProps",
    value: function getStateFromProps(nextProps) {
      return {
        originalFormData: nextProps.formData === undefined || Object.keys(nextProps.formData).length === 0 ? this.state ? this.state.originalFormData : undefined : nextProps.formData,
        formJson: this.state && this.isJsonString(this.state.formJson) && (0, _utils.deepEquals)(nextProps.formData, this.state.formJson) ? this.state.formJson : JSON.stringify(nextProps.formData, null, 2)
      };
    }
  }, {
    key: "isRequired",
    value: function isRequired(name) {
      var schema = this.props.schema;
      return Array.isArray(schema.required) && schema.required.indexOf(name) !== -1;
    }
  }, {
    key: "toggleEditView",
    value: function toggleEditView() {
      this.setState(function (state) {
        return {
          showEditView: !state.showEditView,
          collapse: false
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        collapse: this.props.depth > 4
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        uiSchema = _this$props2.uiSchema,
        formData = _this$props2.formData,
        errorSchema = _this$props2.errorSchema,
        name = _this$props2.name,
        required = _this$props2.required,
        disabled = _this$props2.disabled,
        readonly = _this$props2.readonly,
        onBlur = _this$props2.onBlur,
        onFocus = _this$props2.onFocus,
        _this$props2$registry = _this$props2.registry,
        registry = _this$props2$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props2$registry,
        disableFormJsonEdit = _this$props2.disableFormJsonEdit,
        depth = _this$props2.depth,
        isEven = _this$props2.isEven,
        expandAllLevel = _this$props2.expandAllLevel,
        expandAll = _this$props2.expandAll,
        fromDiscriminator = _this$props2.fromDiscriminator,
        typeCombinatorTypes = _this$props2.typeCombinatorTypes,
        _this$props2$discrimi = _this$props2.discriminatorObj,
        discriminatorObj = _this$props2$discrimi === void 0 ? {} : _this$props2$discrimi;
      var fields = registry.fields,
        formContext = registry.formContext,
        dxInterface = registry.dxInterface;
      var SchemaField = fields.SchemaField,
        TitleField = fields.TitleField,
        DescriptionField = fields.DescriptionField;
      var schema = (0, _utils.retrieveSchema)(this.props.schema, formData, dxInterface);
      var title = name;
      var description = uiSchema["ui:description"] || schema.description;
      var templateProps = {
        name: name,
        title: uiSchema["ui:title"] || title,
        description: description,
        TitleField: TitleField,
        DescriptionField: DescriptionField,
        SchemaField: SchemaField,
        required: required,
        uiSchema: uiSchema,
        schema: schema,
        formData: formData,
        formContext: formContext,
        disabled: disabled,
        onNullifyChange: /* schema.type === "array" ? null :  */this.onNullifyChange,
        nullify: formData && Object.keys(formData).length > 0,
        onBlur: onBlur,
        onFocus: onFocus,
        errorSchema: errorSchema,
        readonly: readonly,
        registry: registry,
        disableFormJsonEdit: disableFormJsonEdit,
        depth: depth,
        isEven: isEven,
        expandAllLevel: expandAllLevel,
        expandAll: expandAll,
        fromDiscriminator: fromDiscriminator,
        typeCombinatorTypes: typeCombinatorTypes,
        discriminatorObj: discriminatorObj
      };
      if (schema.properties && Object.keys(schema.properties).length > 0) {
        return this.renderObject(templateProps);
      } else if (schema.additionalProperties) {
        return this.renderMap(templateProps);
      } else {
        return this.renderDynamic(templateProps);
      }
    }
  }, {
    key: "toggleCollapse",
    value: function toggleCollapse() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setState(function (prevState, props) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          collapse: !prevState.collapse
        });
      });
    }
  }, {
    key: "renderDynamic",
    value: function renderDynamic(templateProps) {
      var TitleField = templateProps.TitleField,
        DescriptionField = templateProps.DescriptionField;
      var dataType = templateProps.schema.dataTypeDisplayText;
      var markdown = templateProps.schema.dataTypeMarkdown;
      var title = templateProps.uiSchema["ui:title"] || templateProps.schema.title || templateProps.title;
      return /*#__PURE__*/_react.default.createElement("fieldset", null, title && /*#__PURE__*/_react.default.createElement(TitleField, {
        title: title,
        required: templateProps.required,
        formContext: templateProps.formContext,
        nullify: templateProps.nullify,
        onNullifyChange: this.onNullifyChange,
        disabled: templateProps.disabled,
        fromDiscriminator: templateProps.fromDiscriminator
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _utils.prefixClass)("type-container")
      }, /*#__PURE__*/_react.default.createElement(_DataType.default, {
        title: dataType,
        link: templateProps.schema.dataTypeLink,
        type: "object-type",
        markdown: markdown
      }), templateProps.schema.paramType && /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _utils.prefixClass)("param-type")
      }, templateProps.schema.paramType)), templateProps.description && /*#__PURE__*/_react.default.createElement(DescriptionField, {
        description: templateProps.description,
        formContext: templateProps.formContext
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          position: "relative"
        }
      }, /*#__PURE__*/_react.default.createElement(_reactCodemirror.default, {
        value: this.state.formJson,
        onChange: this.onJsonChange,
        options: cmOptions
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 100,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(1,1,1,0.3)",
          display: templateProps.disabled || this.shouldDisable() ? "block" : "none"
        }
      })), this.state.formJsonError && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null), /*#__PURE__*/_react.default.createElement("ul", {
        className: (0, _utils.prefixClass)("error-detail bs-callout bs-callout-info")
      }, /*#__PURE__*/_react.default.createElement("li", {
        className: (0, _utils.prefixClass)("text-danger")
      }, "Could not parse JSON. Syntax error."))));
    }
  }, {
    key: "renderMap",
    value: function renderMap(templateProps) {
      return /*#__PURE__*/_react.default.createElement(_MapField.default, _extends({}, templateProps, {
        onChange: this.props.onChange
      }));
    }

    // If object is calling directly from discriminator
    // we need to render properties
    // otherwise we need to render whole object including properties
  }, {
    key: "renderObject",
    value: function renderObject(templateProps) {
      var _this2 = this;
      var _this$props$registry = this.props.registry,
        registry = _this$props$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props$registry;
      var dxInterface = registry.dxInterface;
      var name = templateProps.name,
        SchemaField = templateProps.SchemaField,
        typeCombinatorTypes = templateProps.typeCombinatorTypes,
        discriminatorObj = templateProps.discriminatorObj,
        schema = templateProps.schema;
      var orderedProperties;
      try {
        var properties = Object.keys(templateProps.schema.properties);
        orderedProperties = (0, _utils.orderProperties)(properties, templateProps.uiSchema["ui:order"]);
      } catch (err) {
        return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
          className: (0, _utils.prefixClass)("config-error"),
          style: {
            color: "red"
          }
        }, "Invalid ", name || "root", " object field configuration:", /*#__PURE__*/_react.default.createElement("em", null, err.message), "."), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(templateProps.schema)));
      }
      var Template = this.getTemplate();
      var renderCallOutFallback = dxInterface.renderCallOutFallback;
      var newProps = _objectSpread(_objectSpread({}, templateProps), {}, {
        showEditView: this.state.showEditView,
        collapse: this.state.collapse,
        toggleCollapse: this.toggleCollapse,
        isEven: this.state.isEven,
        depth: this.state.depth,
        expandAll: this.state.expandAll,
        toggleEditView: this.toggleEditView,
        onJsonChange: this.onJsonChange,
        formJson: this.state.formJson,
        formJsonError: this.state.formJsonError,
        properties: checkAllReadOnly(schema) ? [{
          content: function content() {
            return renderCallOutFallback({
              info: "info",
              message: READONLY_INFO_MESSAGE
            });
          }
        }] : orderedProperties.map(function (name) {
          var disObj = _objectSpread({}, discriminatorObj);
          if (schema.discriminator && name === schema.discriminator && schema.discriminatorValue) {
            disObj.name = name;
            disObj.value = schema.discriminatorValue;
          }
          return {
            content: function content() {
              return /*#__PURE__*/_react.default.createElement(SchemaField, {
                key: name,
                name: name,
                isEven: _this2.getIsEven(),
                depth: _this2.getDepth(),
                expandAll: _this2.state.expandAll,
                expandAllLevel: _this2.state.expandAllLevel,
                required: _this2.isRequired(name),
                schema: templateProps.schema.properties[name],
                uiSchema: templateProps.uiSchema[name],
                errorSchema: templateProps.errorSchema[name],
                formData: templateProps.formData[name],
                onChange: _this2.onPropertyChange(name),
                onBlur: templateProps.onBlur,
                onFocus: templateProps.onFocus,
                registry: templateProps.registry,
                disabled: templateProps.disabled || _this2.shouldDisable(),
                readonly: templateProps.readonly,
                disableFormJsonEdit: templateProps.disableFormJsonEdit,
                typeCombinatorTypes: typeCombinatorTypes,
                discriminatorObj: disObj
              });
            },
            name: name,
            readonly: templateProps.readonly,
            disabled: templateProps.disabled || _this2.shouldDisable(),
            required: templateProps.required
          };
        })
      });
      return /*#__PURE__*/_react.default.createElement(Template, newProps);
    }
  }]);
  return ObjectField;
}(_react.Component);
_defineProperty(ObjectField, "defaultProps", {
  uiSchema: {},
  formData: {},
  errorSchema: {},
  required: false,
  disabled: false,
  readonly: false
});
function checkAllReadOnly(schema) {
  var properties = schema.properties;
  return Object.values(properties).every(function (item) {
    return item.readOnly;
  });
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  ObjectField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.object,
    errorSchema: _propTypes.default.object,
    onChange: _propTypes.default.func.isRequired,
    formData: _propTypes.default.object,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
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
var _default = ObjectField;
exports.default = _default;