"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconBtn = IconBtn;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DataType = _interopRequireDefault(require("../fields/DataType"));
var _UnsupportedField = _interopRequireDefault(require("./UnsupportedField"));
var _utils = require("../../utils");
var _Icons = require("../Icons");
var _excluded = ["type", "icon", "className"],
  _excluded2 = ["widget"],
  _excluded3 = ["widget"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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
function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
    title = _ref.title,
    required = _ref.required,
    onNullifyChange = _ref.onNullifyChange,
    nullify = _ref.nullify,
    disabled = _ref.disabled,
    onClick = _ref.onClick,
    _ref$fromDiscriminato = _ref.fromDiscriminator,
    fromDiscriminator = _ref$fromDiscriminato === void 0 ? false : _ref$fromDiscriminato;
  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
  return /*#__PURE__*/_react.default.createElement(TitleField, {
    title: title,
    required: required,
    nullify: nullify,
    onNullifyChange: onNullifyChange,
    disabled: disabled,
    onClick: onClick,
    fromDiscriminator: fromDiscriminator
  });
}
function ArrayFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
    description = _ref2.description;
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
  return /*#__PURE__*/_react.default.createElement(DescriptionField, {
    description: description
  });
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
  }, otherProps), props.children, " ");
}

// Used in the two templates
function DefaultArrayItem(props) {
  // const isObj = (() => {
  //   try {
  //     return props.children.props.schema.type === "object";
  //   } catch (e) {
  //     return false;
  //   }
  // })();

  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  var arrayItemWrapper = {
    display: "flex",
    flexDirection: "column"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    key: props.index,
    className: (0, _utils.prefixClass)("array-item-wrapper ".concat(props.className)),
    style: arrayItemWrapper
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, " ", props.hasToolbar && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("array-item-toolbox"),
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)(" btn-group")
  }, " ", (props.hasMoveUp || props.hasMoveDown) && /*#__PURE__*/_react.default.createElement(IconBtn, {
    className: (0, _utils.prefixClass)("array-item-move-up"),
    tabIndex: "-1",
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  }, /*#__PURE__*/_react.default.createElement(_Icons.ArrowUpIcon, {
    width: 14
  }), " "), (props.hasMoveUp || props.hasMoveDown) && /*#__PURE__*/_react.default.createElement(IconBtn, {
    className: (0, _utils.prefixClass)("array-item-move-down"),
    tabIndex: "-1",
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  }, /*#__PURE__*/_react.default.createElement(_Icons.ArrowDownIcon, {
    width: 14
  }), " "), props.hasRemove && /*#__PURE__*/_react.default.createElement(IconBtn, {
    type: "danger",
    className: (0, _utils.prefixClass)("array-item-remove"),
    tabIndex: "-1",
    style: btnStyle,
    disabled: props.disabled || props.readonly,
    onClick: props.onDropIndexClick(props.index)
  }, /*#__PURE__*/_react.default.createElement(_Icons.DeleteIcon, {
    width: 14
  }), " "), " "), " "), " "), " ", /*#__PURE__*/_react.default.createElement("div", null, " ", props.children, " "), " ");
}
function DefaultFixedArrayFieldTemplate(props) {
  return /*#__PURE__*/_react.default.createElement("fieldset", {
    className: (0, _utils.prefixClass)(props.className)
  }, "(", " ", /*#__PURE__*/_react.default.createElement(ArrayFieldTitle, {
    TitleField: props.TitleField,
    title: props.uiSchema["ui:title"] || props.title,
    required: props.required,
    nullify: props.nullify,
    onNullifyChange: props.onNullifyChange,
    disabled: props.disabled,
    fromDiscriminator: props.fromDiscriminator
  }), ")", " ", (props.uiSchema["ui:description"] || props.schema.description) && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("field-description")
  }, props.uiSchema["ui:description"] || props.schema.description.replace(/<br>/gi, "\n"), " "), " ", /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("row array-item-list")
  }, props.items && props.items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(DefaultArrayItem, _extends({
      key: "outer-array-item-".concat(index)
    }, item, {
      index: index
    }));
  })), props.canAdd && /*#__PURE__*/_react.default.createElement(AddButton, {
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }), " ");
}
function DefaultNormalArrayFieldTemplate(props) {
  var _classNames;
  var fromDiscriminator = props.fromDiscriminator,
    depth = props.depth;
  var headerClasses = (0, _utils.classNames)((_classNames = {}, _defineProperty(_classNames, (0, _utils.prefixClass)("object-header"), true), _defineProperty(_classNames, "position-unset", fromDiscriminator), _classNames));
  var title = props.uiSchema["ui:title"] || props.schema.title || props.itemsSchema.title || props.title;
  var dataType = props.schema.dataTypeDisplayText;
  var markdown = props.schema.dataTypeMarkdown;
  var arrayContainerClasses = (0, _utils.classNames)({
    "array-container": true,
    "even-bg": (0, _utils.getEvenOdd)(depth),
    "odd-bg": !(0, _utils.getEvenOdd)(depth)
  });
  return /*#__PURE__*/_react.default.createElement("fieldset", {
    className: (0, _utils.prefixClass)(props.className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: headerClasses
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("header-left hand"),
    onClick: props.toggleCollapse
  }, props.fromDiscriminator ? null : /*#__PURE__*/_react.default.createElement(ArrayFieldTitle, {
    TitleField: props.TitleField,
    title: title,
    required: props.required,
    nullify: props.nullify,
    onNullifyChange: props.onNullifyChange,
    disabled: props.disabled,
    fromDiscriminator: props.fromDiscriminator
  })), /*#__PURE__*/_react.default.createElement(IconBtn, {
    tabIndex: "-1",
    onClick: props.toggleCollapse,
    className: (0, _utils.prefixClass)("btn toggle-button")
  }, props.collapse ? /*#__PURE__*/_react.default.createElement(_Icons.ChevronIcon, {
    width: 14,
    rotate: -90
  }) : /*#__PURE__*/_react.default.createElement(_Icons.ChevronIcon, {
    width: 14
  }), " "), " "), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("type-container")
  }, /*#__PURE__*/_react.default.createElement(_DataType.default, {
    title: dataType,
    link: props.schema.dataTypeLink,
    type: "array-type",
    markdown: markdown
  }), props.schema.paramType && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("param-type")
  }, " ", props.schema.paramType, " "), " "), (props.uiSchema["ui:description"] || props.schema.description || props.itemsSchema.description) && /*#__PURE__*/_react.default.createElement(ArrayFieldDescription, {
    DescriptionField: props.DescriptionField,
    description: props.uiSchema["ui:description"] || props.schema.description || props.itemsSchema.description
  }), !props.collapse && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)(arrayContainerClasses)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("row array-item-list")
  }, props.items && props.items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(DefaultArrayItem, _extends({
      key: "inner-array-item-".concat(index)
    }, item, {
      index: index
    }));
  })), props.canAdd && /*#__PURE__*/_react.default.createElement(AddButton, {
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }), " "), " ");
}
var ArrayField = /*#__PURE__*/function (_Component) {
  _inherits(ArrayField, _Component);
  var _super = _createSuper(ArrayField);
  function ArrayField(props) {
    var _this;
    _classCallCheck(this, ArrayField);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "onAddClick", function (event) {
      event.preventDefault();
      var _this$props = _this.props,
        formData = _this$props.formData,
        _this$props$registry = _this$props.registry,
        registry = _this$props$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props$registry;
      var dxInterface = registry.dxInterface;
      var itemSchema = _this.getItemSchema();
      _this.props.onChange([].concat(_toConsumableArray(formData), [(0, _utils.getDefaultFormState)(itemSchema, undefined, undefined, dxInterface)]), {
        validate: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onDropIndexClick", function (index) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }
        var _this$props2 = _this.props,
          formData = _this$props2.formData,
          onChange = _this$props2.onChange;
        // refs #195: revalidate to ensure properly reindexing errors
        onChange(formData.filter(function (_, i) {
          return i !== index;
        }), {
          validate: true
        });
      };
    });
    _defineProperty(_assertThisInitialized(_this), "onReorderClick", function (index, newIndex) {
      return function (event) {
        if (event) {
          event.preventDefault();
          event.target.blur();
        }
        var _this$props3 = _this.props,
          formData = _this$props3.formData,
          onChange = _this$props3.onChange;
        onChange(formData.map(function (item, i) {
          if (i === newIndex) {
            return formData[index];
          } else if (i === index) {
            return formData[newIndex];
          } else {
            return item;
          }
        }), {
          validate: true
        });
      };
    });
    _defineProperty(_assertThisInitialized(_this), "onChangeForIndex", function (index) {
      return function (value, options, schemaIndex) {
        var _this$props4 = _this.props,
          formData = _this$props4.formData,
          onChange = _this$props4.onChange;
        var newFormData = formData.map(function (item, i) {
          // We need to treat undefined items as nulls to have validation.
          // See https://github.com/tdegrunt/jsonschema/issues/206
          var jsonValue = typeof value === "undefined" ? null : value;
          return index === i ? jsonValue : item;
        });
        onChange(newFormData, {
          validate: false
        });
      };
    });
    _defineProperty(_assertThisInitialized(_this), "onSelectChange", function (value) {
      _this.props.onChange(value, {
        validate: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "shouldDisable", function () {
      return (_this.props.formData === undefined || _this.props.formData && _this.props.formData.length === 0) && !_this.props.required && !_this.props.fromDiscriminator;
    });
    _defineProperty(_assertThisInitialized(_this), "getItemSchema", function () {
      var schema = _this.props.schema;
      if ((0, _utils.isFixedItems)(schema) && (0, _utils.allowAdditionalItems)(schema)) {
        return schema.additionalItems;
      } else {
        return schema.items;
      }
    });
    _defineProperty(_assertThisInitialized(_this), "getFormData", function () {
      var _this$props5 = _this.props,
        schema = _this$props5.schema,
        dxInterface = _this$props5.registry.dxInterface;
      var originalFormData = _this.state.originalFormData;
      var defaultState = (0, _utils.getDefaultFormState)(schema, undefined, undefined, dxInterface);
      var itemSchema = _this.getItemSchema();
      var formData = originalFormData || defaultState;
      if (formData) {
        return formData;
      }
      return [(0, _utils.getDefaultFormState)(itemSchema, undefined, undefined, dxInterface)];
    });
    _defineProperty(_assertThisInitialized(_this), "onNullifyChange", function () {
      var onChange = _this.props.onChange;
      var formData = _this.getFormData();
      if (_this.shouldDisable()) {
        onChange(formData);
      } else {
        onChange(undefined);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "additionalFieldSchema", function (itemSchema, index) {
      var schema = _this.props.schema;
      return _objectSpread(_objectSpread({}, itemSchema), {}, {
        description: undefined,
        title: "[".concat(index, "]"),
        discriminator: schema.discriminator,
        discriminatorValue: schema.discriminatorValue,
        readOnly: schema.readOnly,
        writeOnly: schema.writeOnly
      });
    });
    _this.state = _this.getStateFromProps(props);
    _this.state.collapse = true;
    _this.state.expandAllLevel = props.expandAllLevel;
    _this.state.depth = props.depth ? props.depth : 1;
    _this.toggleCollapse = _this.toggleCollapse.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ArrayField, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var collapse = this.state.depth === this.state.expandAllLevel && this.state.expandAll !== nextProps.expandAll ? !nextProps.expandAll : this.state.collapse;
      this.setState(_objectSpread(_objectSpread({}, this.getStateFromProps(nextProps)), {}, {
        expandAllLevel: this.state.expandAllLevel,
        expandAll: nextProps.expandAll,
        collapse: collapse
      }));
    }
  }, {
    key: "getStateFromProps",
    value: function getStateFromProps(nextProps) {
      return {
        originalFormData: nextProps.formData === undefined || nextProps.formData && nextProps.formData.length === 0 ? this.state ? this.state.originalFormData : undefined : nextProps.formData
      };
    }
  }, {
    key: "itemTitle",
    get: function get() {
      var schema = this.props.schema;
      return schema.items.title || schema.items.description || "Item";
    }
  }, {
    key: "isItemRequired",
    value: function isItemRequired(itemSchema) {
      if (Array.isArray(itemSchema.type)) {
        // While we don't yet support composite/nullable jsonschema types, it's
        // future-proof to check for requirement against these.
        return !itemSchema.type.includes("null");
      }
      // All non-null array item types are inherently required by design
      return itemSchema.type !== "null";
    }
  }, {
    key: "canAddItem",
    value: function canAddItem(formItems) {
      var _this$props6 = this.props,
        schema = _this$props6.schema,
        uiSchema = _this$props6.uiSchema;
      var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
        addable = _getUiOptions.addable;
      if (addable !== false) {
        // if ui:options.addable was not explicitly set to false, we can add
        // another item if we have not exceeded maxItems yet
        if (schema.maxItems !== undefined) {
          addable = formItems.length < schema.maxItems;
        } else {
          addable = true;
        }
      }
      return addable;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
        schema = _this$props7.schema,
        uiSchema = _this$props7.uiSchema,
        _this$props7$registry = _this$props7.registry,
        registry = _this$props7$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props7$registry;
      var dxInterface = registry.dxInterface;
      if (!schema.hasOwnProperty("items")) {
        return /*#__PURE__*/_react.default.createElement(_UnsupportedField.default, {
          schema: schema,
          reason: "Missing items definition"
        });
      }
      if ((0, _utils.isFixedItems)(schema)) {
        return this.renderFixedArray();
      }
      if ((0, _utils.isFilesArray)(schema, uiSchema, dxInterface)) {
        return this.renderFiles();
      }
      if ((0, _utils.isMultiSelect)(schema, dxInterface)) {
        return this.renderMultiSelect();
      }
      return this.renderNormalArray();
    }
  }, {
    key: "toggleCollapse",
    value: function toggleCollapse() {
      this.setState(function (prevState, props) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          collapse: !prevState.collapse
        });
      });
    }
  }, {
    key: "renderNormalArray",
    value: function renderNormalArray() {
      var _this2 = this;
      var _this$props8 = this.props,
        schema = _this$props8.schema,
        uiSchema = _this$props8.uiSchema,
        formData = _this$props8.formData,
        errorSchema = _this$props8.errorSchema,
        name = _this$props8.name,
        required = _this$props8.required,
        disabled = _this$props8.disabled,
        readonly = _this$props8.readonly,
        autofocus = _this$props8.autofocus,
        _this$props8$registry = _this$props8.registry,
        registry = _this$props8$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props8$registry,
        formContext = _this$props8.formContext,
        onBlur = _this$props8.onBlur,
        onFocus = _this$props8.onFocus,
        schemaIndex = _this$props8.schemaIndex,
        fromDiscriminator = _this$props8.fromDiscriminator,
        typeCombinatorTypes = _this$props8.typeCombinatorTypes,
        depth = _this$props8.depth;
      var ArrayFieldTemplate = registry.ArrayFieldTemplate,
        fields = registry.fields,
        dxInterface = registry.dxInterface;
      var TitleField = fields.TitleField,
        DescriptionField = fields.DescriptionField;
      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, formData, dxInterface);
      var title = name;
      // schema.title === undefined && itemsSchema.title === undefined
      //   ? name
      //   : name === undefined
      //     ? schema.title || itemsSchema.title
      //     : name + " (" + (schema.title || itemsSchema.title) + ")";
      var arrayProps = {
        canAdd: this.canAddItem(formData),
        items: formData.map(function (item, index) {
          var itemSchema = (0, _utils.retrieveSchema)(schema.items, item, dxInterface);
          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
          return _this2.renderArrayFieldItem({
            index: index,
            depth: depth,
            isEven: (0, _utils.getEvenOdd)(depth),
            canMoveUp: index > 0,
            canMoveDown: index < formData.length - 1,
            itemSchema: _this2.additionalFieldSchema(itemSchema, index),
            itemErrorSchema: itemErrorSchema,
            itemData: item,
            itemUiSchema: uiSchema.items,
            autofocus: autofocus && index === 0,
            onBlur: onBlur,
            onFocus: onFocus,
            schemaIndex: schemaIndex,
            typeCombinatorTypes: typeCombinatorTypes
          });
        }),
        className: "field field-array field-array-of-".concat(itemsSchema.type, " ").concat((0, _utils.getEvenOddClass)(depth), " depth_").concat(depth),
        collapse: this.state.collapse,
        toggleCollapse: this.toggleCollapse,
        DescriptionField: DescriptionField,
        disabled: disabled,
        uiSchema: uiSchema,
        onAddClick: this.onAddClick,
        readonly: readonly,
        required: required,
        schema: schema,
        itemsSchema: itemsSchema,
        title: title,
        TitleField: TitleField,
        formContext: formContext,
        formData: formData,
        onNullifyChange: this.onNullifyChange,
        nullify: formData && formData.length > 0,
        fromDiscriminator: fromDiscriminator,
        depth: depth
      };

      // Check if a custom render function was passed in
      var Component = ArrayFieldTemplate || DefaultNormalArrayFieldTemplate;
      return /*#__PURE__*/_react.default.createElement(Component, arrayProps);
    }
  }, {
    key: "renderMultiSelect",
    value: function renderMultiSelect() {
      var _this$props9 = this.props,
        schema = _this$props9.schema,
        uiSchema = _this$props9.uiSchema,
        formData = _this$props9.formData,
        disabled = _this$props9.disabled,
        readonly = _this$props9.readonly,
        autofocus = _this$props9.autofocus,
        onBlur = _this$props9.onBlur,
        onFocus = _this$props9.onFocus,
        _this$props9$registry = _this$props9.registry,
        registry = _this$props9$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props9$registry;
      var items = this.props.formData;
      var widgets = registry.widgets,
        dxInterface = registry.dxInterface,
        formContext = registry.formContext;
      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, formData, dxInterface);
      var enumOptions = (0, _utils.optionsList)(itemsSchema);
      var _getUiOptions$enumOpt = _objectSpread(_objectSpread({}, (0, _utils.getUiOptions)(uiSchema)), {}, {
          enumOptions: enumOptions
        }),
        _getUiOptions$enumOpt2 = _getUiOptions$enumOpt.widget,
        widget = _getUiOptions$enumOpt2 === void 0 ? "select" : _getUiOptions$enumOpt2,
        options = _objectWithoutProperties(_getUiOptions$enumOpt, _excluded2);
      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return /*#__PURE__*/_react.default.createElement(Widget, {
        multiple: true,
        onChange: this.onSelectChange,
        onBlur: onBlur,
        onFocus: onFocus,
        options: options,
        schema: schema,
        value: items,
        disabled: disabled,
        readonly: readonly,
        formContext: formContext,
        autofocus: autofocus
      });
    }
  }, {
    key: "renderFiles",
    value: function renderFiles() {
      var _this$props10 = this.props,
        schema = _this$props10.schema,
        uiSchema = _this$props10.uiSchema,
        name = _this$props10.name,
        disabled = _this$props10.disabled,
        readonly = _this$props10.readonly,
        autofocus = _this$props10.autofocus,
        onBlur = _this$props10.onBlur,
        onFocus = _this$props10.onFocus,
        _this$props10$registr = _this$props10.registry,
        registry = _this$props10$registr === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props10$registr;
      var title = schema.title === undefined ? name : name === undefined ? schema.title : name + " (" + schema.title + ")";
      var items = this.props.formData;
      var widgets = registry.widgets,
        formContext = registry.formContext;
      var _getUiOptions2 = (0, _utils.getUiOptions)(uiSchema),
        _getUiOptions2$widget = _getUiOptions2.widget,
        widget = _getUiOptions2$widget === void 0 ? "files" : _getUiOptions2$widget,
        options = _objectWithoutProperties(_getUiOptions2, _excluded3);
      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return /*#__PURE__*/_react.default.createElement(Widget, {
        options: options,
        multiple: true,
        onChange: this.onSelectChange,
        onBlur: onBlur,
        onFocus: onFocus,
        schema: schema,
        title: title,
        value: items,
        disabled: disabled,
        readonly: readonly,
        formContext: formContext,
        autofocus: autofocus
      });
    }
  }, {
    key: "renderFixedArray",
    value: function renderFixedArray() {
      var _this3 = this;
      var _this$props11 = this.props,
        schema = _this$props11.schema,
        uiSchema = _this$props11.uiSchema,
        formData = _this$props11.formData,
        errorSchema = _this$props11.errorSchema,
        name = _this$props11.name,
        required = _this$props11.required,
        disabled = _this$props11.disabled,
        readonly = _this$props11.readonly,
        autofocus = _this$props11.autofocus,
        _this$props11$registr = _this$props11.registry,
        registry = _this$props11$registr === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props11$registr,
        onBlur = _this$props11.onBlur,
        onFocus = _this$props11.onFocus,
        typeCombinatorTypes = _this$props11.typeCombinatorTypes;
      var title = schema.title === undefined ? name : name === undefined ? schema.title : name + " (" + schema.title + ")";
      var items = this.props.formData;
      var ArrayFieldTemplate = registry.ArrayFieldTemplate,
        fields = registry.fields,
        dxInterface = registry.dxInterface;
      var TitleField = fields.TitleField;
      var itemSchemas = schema.items.map(function (item, index) {
        return (0, _utils.retrieveSchema)(item, formData[index], dxInterface);
      });
      var additionalSchema = (0, _utils.allowAdditionalItems)(schema) ? (0, _utils.retrieveSchema)(schema.additionalItems, formData, dxInterface) : null;
      if (!items || items.length < itemSchemas.length) {
        // to make sure at least all fixed items are generated
        items = items || [];
        items = items.concat(new Array(itemSchemas.length - items.length));
      }

      // These are the props passed into the render function
      var arrayProps = {
        canAdd: this.canAddItem(items) && additionalSchema,
        className: "field field-array field-array-fixed-items",
        disabled: disabled,
        formData: formData,
        items: items.map(function (item, index) {
          var additional = index >= itemSchemas.length;
          var itemSchema = additional ? (0, _utils.retrieveSchema)(schema.additionalItems, item, dxInterface) : itemSchemas[index];
          var itemUiSchema = additional ? uiSchema.additionalItems || {} : Array.isArray(uiSchema.items) ? uiSchema.items[index] : uiSchema.items || {};
          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
          return _this3.renderArrayFieldItem({
            index: index,
            // indexAsTitle: `[${index}]`,
            canRemove: additional,
            canMoveUp: index >= itemSchemas.length + 1,
            canMoveDown: additional && index < items.length - 1,
            itemSchema: _this3.additionalFieldSchema(itemSchema, index),
            itemData: item,
            itemUiSchema: itemUiSchema,
            itemErrorSchema: itemErrorSchema,
            autofocus: autofocus && index === 0,
            onBlur: onBlur,
            onFocus: onFocus,
            typeCombinatorTypes: typeCombinatorTypes
          });
        }),
        onAddClick: this.onAddClick,
        readonly: readonly,
        required: required,
        schema: schema,
        uiSchema: uiSchema,
        title: title,
        TitleField: TitleField,
        onNullifyChange: this.onNullifyChange,
        nullify: formData && formData.length > 0
      };

      // Check if a custom template template was passed in
      var Template = ArrayFieldTemplate || DefaultFixedArrayFieldTemplate;
      return /*#__PURE__*/_react.default.createElement(Template, arrayProps);
    }
  }, {
    key: "renderArrayFieldItem",
    value: function renderArrayFieldItem(props) {
      var index = props.index,
        depth = props.depth,
        _props$canRemove = props.canRemove,
        canRemove = _props$canRemove === void 0 ? true : _props$canRemove,
        _props$canMoveUp = props.canMoveUp,
        canMoveUp = _props$canMoveUp === void 0 ? true : _props$canMoveUp,
        _props$canMoveDown = props.canMoveDown,
        canMoveDown = _props$canMoveDown === void 0 ? true : _props$canMoveDown,
        itemSchema = props.itemSchema,
        itemData = props.itemData,
        itemUiSchema = props.itemUiSchema,
        itemErrorSchema = props.itemErrorSchema,
        autofocus = props.autofocus,
        onBlur = props.onBlur,
        onFocus = props.onFocus,
        schemaIndex = props.schemaIndex,
        typeCombinatorTypes = props.typeCombinatorTypes;
      var _this$props12 = this.props,
        disabled = _this$props12.disabled,
        readonly = _this$props12.readonly,
        uiSchema = _this$props12.uiSchema,
        _this$props12$registr = _this$props12.registry,
        registry = _this$props12$registr === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props12$registr;
      var SchemaField = registry.fields.SchemaField;
      var _orderable$removable$ = _objectSpread({
          orderable: true,
          removable: true
        }, uiSchema["ui:options"]),
        orderable = _orderable$removable$.orderable,
        removable = _orderable$removable$.removable;
      var has = {
        moveUp: orderable && canMoveUp,
        moveDown: orderable && canMoveDown,
        remove: removable && canRemove
      };
      var childDepth = depth + 1;
      has.toolbar = Object.keys(has).some(function (key) {
        return has[key];
      });
      return {
        children: /*#__PURE__*/_react.default.createElement(SchemaField, {
          schema: itemSchema,
          depth: childDepth,
          isEven: (0, _utils.getEvenOdd)(childDepth),
          index: index,
          uiSchema: itemUiSchema,
          formData: itemData,
          errorSchema: itemErrorSchema,
          required: this.isItemRequired(itemSchema),
          onChange: this.onChangeForIndex(index, schemaIndex),
          onBlur: onBlur,
          onFocus: onFocus,
          registry: this.props.registry,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          autofocus: autofocus,
          typeCombinatorTypes: typeCombinatorTypes
        }),
        className: "array-item",
        disabled: disabled,
        hasToolbar: has.toolbar,
        hasMoveUp: has.moveUp,
        hasMoveDown: has.moveDown,
        hasRemove: has.remove,
        index: index,
        onDropIndexClick: this.onDropIndexClick,
        onReorderClick: this.onReorderClick,
        readonly: readonly
      };
    }
  }]);
  return ArrayField;
}(_react.Component);
_defineProperty(ArrayField, "defaultProps", {
  uiSchema: {},
  formData: [],
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
});
function AddButton(_ref3) {
  var onClick = _ref3.onClick,
    disabled = _ref3.disabled;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: (0, _utils.prefixClass)("array-item-add text-right")
  }, /*#__PURE__*/_react.default.createElement(IconBtn, {
    type: "info",
    className: (0, _utils.prefixClass)("btn-add"),
    tabIndex: "0",
    onClick: onClick,
    disabled: disabled
  }, "Add Item", " "), " "), " ");
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  ArrayField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.shape({
      "ui:options": _propTypes.default.shape({
        addable: _propTypes.default.bool,
        orderable: _propTypes.default.bool,
        removable: _propTypes.default.bool
      })
    }),
    errorSchema: _propTypes.default.object,
    onChange: _propTypes.default.func.isRequired,
    onBlur: _propTypes.default.func,
    onFocus: _propTypes.default.func,
    formData: _propTypes.default.array,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    autofocus: _propTypes.default.bool,
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
var _default = ArrayField;
exports.default = _default;