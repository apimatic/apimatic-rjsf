"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ErrorList = _interopRequireDefault(require("./ErrorList"));
var _utils = require("../utils");
var _validate = _interopRequireDefault(require("../validate"));
var _AJV = require("../AJV");
require("react-datepicker/dist/react-datepicker.css");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
var _context = require("./context");
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
var Form = /*#__PURE__*/function (_Component) {
  _inherits(Form, _Component);
  var _super = _createSuper(Form);
  function Form(props) {
    var _this;
    _classCallCheck(this, Form);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "onChange", function (formData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        validate: false
      };
      var mustValidate = !_this.props.noValidate && (_this.props.liveValidate || options.validate);
      var state = {
        formData: formData
      };
      var newFormData = (0, _utils.unwrapFormData)(formData);
      if (mustValidate) {
        var _this$validate = _this.validate(newFormData, undefined, formData),
          errors = _this$validate.errors,
          errorSchema = _this$validate.errorSchema;
        state = _objectSpread(_objectSpread({}, state), {}, {
          errors: errors,
          errorSchema: errorSchema
        });
      }
      (0, _utils.setState)(_assertThisInitialized(_this), state, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state);
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      if (_this.props.onBlur) {
        var _this$props;
        (_this$props = _this.props).onBlur.apply(_this$props, arguments);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
      if (_this.props.onFocus) {
        var _this$props2;
        (_this$props2 = _this.props).onFocus.apply(_this$props2, arguments);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
      event.preventDefault();
      if (!_this.props.noValidate) {
        var newFormData = (0, _utils.unwrapFormData)(_this.state.formData);
        var _this$validate2 = _this.validate(newFormData, undefined, _this.state.formData),
          errors = _this$validate2.errors,
          errorSchema = _this$validate2.errorSchema;
        if (Object.keys(errors).length > 0) {
          (0, _utils.setState)(_assertThisInitialized(_this), {
            errors: errors,
            errorSchema: errorSchema
          }, function () {
            if (_this.props.onError) {
              _this.props.onError(errors);
            } else {
              console.error("Form validation failed", errors);
            }
          });
          return;
        }
      }
      if (_this.props.onSubmit) {
        _this.props.onSubmit(_objectSpread(_objectSpread({}, _this.state), {}, {
          status: "submitted"
        }));
      }
      _this.setState({
        errors: [],
        errorSchema: {}
      });
    });
    _defineProperty(_assertThisInitialized(_this), "toggleExpandAll", function () {
      _this.setState(function (previousState) {
        return _objectSpread(_objectSpread({}, previousState), {}, {
          expandAll: !previousState.expandAll
        });
      });
    });
    _this.state = _this.getStateFromProps(props);
    //TODO: Changing for development
    _this.state.expandAll = true;
    var definitions = props.dxInterface.definitions;
    _AJV.AJV.setInstance(definitions);
    return _this;
  }
  _createClass(Form, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.getStateFromProps(nextProps));
    }
  }, {
    key: "getStateFromProps",
    value: function getStateFromProps(props) {
      var state = this.state || {};
      var schema = "schema" in props ? props.schema : this.props.schema;
      var uiSchema = "uiSchema" in props ? props.uiSchema : this.props.uiSchema;
      var edit = typeof props.formData !== "undefined";
      var liveValidate = props.liveValidate || this.props.liveValidate;
      var mustValidate = edit && !props.noValidate && liveValidate;
      var dxInterface = props.dxInterface;
      var formData = props.dontAssignDefaults ? props.formData : (0, _utils.getDefaultFormState)(schema, props.formData, undefined, dxInterface);
      var newFormData = (0, _utils.unwrapFormData)(formData);
      var _ref = mustValidate ? this.validate(newFormData, schema, formData) : {
          errors: state.errors || [],
          errorSchema: state.errorSchema || {}
        },
        errors = _ref.errors,
        errorSchema = _ref.errorSchema;
      return {
        schema: schema,
        uiSchema: uiSchema,
        formData: formData,
        edit: edit,
        errors: errors,
        errorSchema: errorSchema
      };
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _utils.shouldRender)(this, nextProps, nextState);
    }
  }, {
    key: "validate",
    value: function validate(formData, schema, originalFormData) {
      var _this$props3 = this.props,
        validate = _this$props3.validate,
        transformErrors = _this$props3.transformErrors,
        definitions = _this$props3.dxInterface.definitions;
      return (0, _validate.default)(formData, schema || this.props.schema, validate, transformErrors, originalFormData, definitions);
    }
  }, {
    key: "renderErrors",
    value: function renderErrors() {
      var _this$state = this.state,
        errors = _this$state.errors,
        errorSchema = _this$state.errorSchema,
        schema = _this$state.schema,
        uiSchema = _this$state.uiSchema;
      var _this$props4 = this.props,
        ErrorList = _this$props4.ErrorList,
        showErrorList = _this$props4.showErrorList,
        formContext = _this$props4.formContext;
      if (errors.length && showErrorList != false) {
        return /*#__PURE__*/_react.default.createElement(ErrorList, {
          errors: errors,
          errorSchema: errorSchema,
          schema: schema,
          uiSchema: uiSchema,
          formContext: formContext
        });
      }
      return null;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      // For BC, accept passed SchemaField and TitleField props and pass them to
      // the "fields" registry one.
      var dxInterface = this.props.dxInterface;
      var _getDefaultRegistry = (0, _utils.getDefaultRegistry)(),
        fields = _getDefaultRegistry.fields,
        widgets = _getDefaultRegistry.widgets;
      return {
        fields: _objectSpread(_objectSpread({}, fields), this.props.fields),
        widgets: _objectSpread(_objectSpread({}, widgets), this.props.widgets),
        ArrayFieldTemplate: this.props.ArrayFieldTemplate,
        ObjectFieldTemplate: this.props.ObjectFieldTemplate,
        FieldTemplate: this.props.FieldTemplate,
        dxInterface: dxInterface || {},
        formContext: this.props.formContext || {}
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        children = _this$props5.children,
        safeRenderCompletion = _this$props5.safeRenderCompletion,
        id = _this$props5.id,
        className = _this$props5.className,
        name = _this$props5.name,
        method = _this$props5.method,
        target = _this$props5.target,
        action = _this$props5.action,
        autocomplete = _this$props5.autocomplete,
        enctype = _this$props5.enctype,
        acceptcharset = _this$props5.acceptcharset,
        noHtml5Validate = _this$props5.noHtml5Validate,
        disableFormJsonEdit = _this$props5.disableFormJsonEdit,
        dxInterface = _this$props5.dxInterface;
      var _this$state2 = this.state,
        schema = _this$state2.schema,
        uiSchema = _this$state2.uiSchema,
        formData = _this$state2.formData,
        errorSchema = _this$state2.errorSchema,
        expandAll = _this$state2.expandAll;
      var registry = this.getRegistry();
      var _SchemaField = registry.fields.SchemaField;
      return /*#__PURE__*/_react.default.createElement("form", {
        className: className ? className : "rjsf",
        id: id,
        name: name,
        method: method,
        target: target,
        action: action,
        autoComplete: autocomplete,
        encType: enctype,
        acceptCharset: acceptcharset,
        noValidate: noHtml5Validate,
        onSubmit: this.onSubmit
      }, /*#__PURE__*/_react.default.createElement(_context.ContextProvider, {
        value: dxInterface
      }, this.renderErrors(), uiSchema.expandAllLevel && /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _utils.prefixClass)("expand-all")
      }, /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.toggleExpandAll,
        type: "button"
      }, expandAll ? "- Collapse all" : "+ Expand all")), /*#__PURE__*/_react.default.createElement(_SchemaField, {
        schema: schema,
        expandAllLevel: uiSchema.expandAllLevel,
        expandAll: expandAll,
        levelReversal: uiSchema && uiSchema.levelReversal ? true : false,
        uiSchema: uiSchema,
        errorSchema: errorSchema,
        formData: formData,
        onChange: this.onChange,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        registry: registry,
        safeRenderCompletion: safeRenderCompletion,
        required: true,
        disableFormJsonEdit: disableFormJsonEdit || false
      }), children ? children : /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("button", {
        type: "submit",
        className: (0, _utils.prefixClass)("btn btn-info")
      }, "Submit"))));
    }
  }]);
  return Form;
}(_react.Component); /* istanbul ignore else */
exports.default = Form;
_defineProperty(Form, "defaultProps", {
  uiSchema: {},
  noValidate: false,
  liveValidate: false,
  safeRenderCompletion: false,
  noHtml5Validate: false,
  ErrorList: _ErrorList.default
});
if (process.env.NODE_ENV !== "production") {
  Form.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.object,
    formData: _propTypes.default.any,
    widgets: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])),
    fields: _propTypes.default.objectOf(_propTypes.default.func),
    ArrayFieldTemplate: _propTypes.default.func,
    ObjectFieldTemplate: _propTypes.default.func,
    FieldTemplate: _propTypes.default.func,
    ErrorList: _propTypes.default.func,
    onChange: _propTypes.default.func,
    onError: _propTypes.default.func,
    showErrorList: _propTypes.default.bool,
    onSubmit: _propTypes.default.func,
    id: _propTypes.default.string,
    className: _propTypes.default.string,
    name: _propTypes.default.string,
    method: _propTypes.default.string,
    target: _propTypes.default.string,
    action: _propTypes.default.string,
    autocomplete: _propTypes.default.string,
    enctype: _propTypes.default.string,
    acceptcharset: _propTypes.default.string,
    noValidate: _propTypes.default.bool,
    noHtml5Validate: _propTypes.default.bool,
    liveValidate: _propTypes.default.bool,
    validate: _propTypes.default.func,
    transformErrors: _propTypes.default.func,
    safeRenderCompletion: _propTypes.default.bool,
    formContext: _propTypes.default.object,
    dontAssignDefaults: _propTypes.default.bool,
    disableFormJsonEdit: _propTypes.default.bool,
    markdownRenderer: _propTypes.default.func,
    onRouteChange: _propTypes.default.func
  };
}