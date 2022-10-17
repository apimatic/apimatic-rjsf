"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
var _Icons = require("../Icons");
var _DataType = _interopRequireDefault(require("../fields/DataType"));
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
function MapFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
    title = _ref.title,
    required = _ref.required,
    onNullifyChange = _ref.onNullifyChange,
    nullify = _ref.nullify,
    disabled = _ref.disabled,
    fromDiscriminator = _ref.fromDiscriminator;
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
    fromDiscriminator: fromDiscriminator
  });
}
function MapFieldDescription(_ref2) {
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
  var type = props.type,
    icon = props.icon,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    className: (0, _utils.prefixClass)("btn btn-".concat(type)) + " " + className + " " + (0, _utils.prefixClass)("")
  }, otherProps), props.children);
}

// Used in the two templates
function DefaultMapItem(props) {
  var _classNames;
  var depth = props.depth;
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    key: props.index,
    className: (0, _utils.prefixClass)("".concat(props.className))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("map-field-key"),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/_react.default.createElement(IconBtn, {
    tabIndex: "-1",
    onClick: function onClick() {
      return props.toggleCollapse(props.key);
    },
    className: (0, _utils.prefixClass)("btn toggle-button")
  }, props.collapse ? /*#__PURE__*/_react.default.createElement(_Icons.ChevronIcon, {
    width: 14,
    rotate: -90
  }) : /*#__PURE__*/_react.default.createElement(_Icons.ChevronIcon, {
    width: 14
  })), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: (0, _utils.prefixClass)("form-control"),
    onChange: props.onKeyChange,
    value: props.key,
    required: true
  }), props.hasToolbar && props.hasRemove && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("map-item-toolbox")
  }, /*#__PURE__*/_react.default.createElement(IconBtn, {
    type: "danger",
    className: (0, _utils.prefixClass)("map-item-remove"),
    tabIndex: "-1",
    style: btnStyle,
    disabled: props.disabled || props.readonly,
    onClick: props.onDropKeyClick
  }, /*#__PURE__*/_react.default.createElement(_Icons.DeleteIcon, {
    width: 14
  })))), !props.collapse && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)((0, _utils.classNames)((_classNames = {
      "map-field-value-container": true
    }, _defineProperty(_classNames, "depth_".concat(depth), true), _defineProperty(_classNames, "even-bg", (0, _utils.getEvenOdd)(depth)), _defineProperty(_classNames, "odd-bg", !(0, _utils.getEvenOdd)(depth)), _classNames)))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("flex"),
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("flex-1 ".concat(props.hasToolbar && props.hasRemove ? "" : "")),
    style: {
      flex: "1"
    }
  }, /*#__PURE__*/_react.default.cloneElement(props.children, {
    fromMap: true
  })))));
}
function DefaultNormalMapFieldTemplate(props) {
  var _classNames2;
  var fromDiscriminator = props.fromDiscriminator;
  var headerClasses = (0, _utils.classNames)((_classNames2 = {}, _defineProperty(_classNames2, (0, _utils.prefixClass)("object-header"), true), _defineProperty(_classNames2, "position-unset", fromDiscriminator), _classNames2));
  var dataType = props.schema.dataTypeDisplayText;
  var markdown = props.schema.dataTypeMarkdown;
  return /*#__PURE__*/_react.default.createElement("fieldset", {
    className: (0, _utils.prefixClass)(props.className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: headerClasses
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("header-left hand"),
    onClick: props.toggleGroupCollapse
  }, /*#__PURE__*/_react.default.createElement(MapFieldTitle, {
    TitleField: props.TitleField,
    title: props.title,
    required: props.required,
    nullify: props.nullify,
    onNullifyChange: props.onNullifyChange,
    disabled: props.disabled,
    fromDiscriminator: props.fromDiscriminator
  })), /*#__PURE__*/_react.default.createElement(IconBtn, {
    tabIndex: "-1",
    onClick: props.toggleGroupCollapse,
    className: (0, _utils.prefixClass)("btn toggle-button")
  }, props.collapse ? /*#__PURE__*/_react.default.createElement(_Icons.ChevronIcon, {
    width: 14,
    rotate: -90
  }) : /*#__PURE__*/_react.default.createElement(_Icons.ChevronIcon, {
    width: 14
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("type-container")
  }, /*#__PURE__*/_react.default.createElement(_DataType.default, {
    title: dataType,
    link: props.schema.dataTypeLink,
    type: "map-field-type",
    markdown: markdown
  }), props.schema.paramType && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("param-type")
  }, props.schema.paramType)), /*#__PURE__*/_react.default.createElement(MapFieldDescription, {
    DescriptionField: props.DescriptionField,
    description: props.uiSchema["ui:description"] || props.schema.description || props.addPropsSchema.description
  }), !props.collapse && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)((0, _utils.classNames)({
      "map-item-list-container": true,
      "even-bg": (0, _utils.getEvenOdd)(props.depth),
      "odd-bg": !(0, _utils.getEvenOdd)(props.depth)
    }))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("map-item-list")
  }, props.items && props.items.map(function (p) {
    return DefaultMapItem(p);
  })), props.canAdd && /*#__PURE__*/_react.default.createElement(AddButton, {
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  })));
}
var MapField = /*#__PURE__*/function (_Component) {
  _inherits(MapField, _Component);
  var _super = _createSuper(MapField);
  function MapField(props) {
    var _this;
    _classCallCheck(this, MapField);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "onKeyAdd", function () {
      var index = 0;
      while ("key" + index in _this.props.formData) {
        index++;
      }
      var _this$props = _this.props,
        schema = _this$props.schema,
        registry = _this$props.registry;
      var dxInterface = registry.dxInterface;
      var itemSchema = schema.additionalProperties;
      var newHash = _this.state.hash.slice();
      newHash.push({
        k: "key" + index,
        v: (0, _utils.getDefaultFormState)(itemSchema, undefined, undefined, dxInterface)
      });
      _this.setState({
        hash: newHash
      }, function () {
        return _this.props.onChange(_this.getNewFormData(newHash));
      });
    });
    _defineProperty(_assertThisInitialized(_this), "shouldDisable", function () {
      return (_this.props.formData === undefined || _this.props.formData && Object.keys(_this.props.formData).length === 0) && !_this.props.required && !_this.props.fromDiscriminator;
    });
    _defineProperty(_assertThisInitialized(_this), "onNullifyChange", function () {
      if (_this.shouldDisable()) {
        if (_this.state.originalFormData) {
          _this.props.onChange(_this.state.originalFormData);
        } else {
          _this.props.onChange({
            key0: (0, _utils.getDefaultFormState)(_this.props.schema.additionalProperties, undefined, undefined, _this.props.registry.dxInterface)
          });
        }
      } else {
        _this.props.onChange(undefined);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "additionalFieldSchema", function (itemSchema) {
      var schema = _this.props.schema;
      return _objectSpread(_objectSpread({}, itemSchema), {}, {
        description: undefined,
        discriminator: schema.discriminator,
        discriminatorValue: schema.discriminatorValue,
        readOnly: schema.readOnly,
        writeOnly: schema.writeOnly,
        typeCombinatorTypes: schema.typeCombinatorTypes
      });
    });
    _this.state = _this.getStateFromProps(props);
    _this.state.expandInfo = {};
    _this.state.collapse = true;
    _this.state.expandAllLevel = props.expandAllLevel;
    _this.state.depth = props.depth ? props.depth : 1;
    _this.toggleCollapse = _this.toggleCollapse.bind(_assertThisInitialized(_this));
    _this.toggleGroupCollapse = _this.toggleGroupCollapse.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(MapField, [{
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
    key: "getStateFromProps",
    value: function getStateFromProps(nextProps) {
      return {
        originalFormData: nextProps.formData === undefined || nextProps.formData && Object.keys(nextProps.formData).length === 0 ? this.state ? this.state.originalFormData : undefined : nextProps.formData,
        hash: !this.state || this.state.originalFormData !== nextProps.formData && !this.state.duplication || this.state.hash.length === 0 ? Object.keys(nextProps.formData).map(function (k) {
          return {
            k: k,
            v: nextProps.formData[k]
          };
        }) : this.state.hash
      };
    }
  }, {
    key: "isItemRequired",
    value: function isItemRequired(itemSchema) {
      /* istanbul ignore if: remove when support is added */
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
      var _this$props2 = this.props,
        schema = _this$props2.schema,
        uiSchema = _this$props2.uiSchema;
      var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
        addable = _getUiOptions.addable;
      if (addable !== false) {
        // if ui:options.addable was not explicitly set to false, we can add
        // another item if we have not exceeded maxItems yet
        if (schema.maxProperties !== undefined) {
          addable = formItems.length < schema.maxProperties;
        } else {
          addable = true;
        }
      }
      return addable;
    }
  }, {
    key: "getNewFormData",
    value: function getNewFormData(hash) {
      return hash.reduce(function (result, current) {
        result[current.k] = current.v;
        return result;
      }, {});
    }
  }, {
    key: "onValueChange",
    value: function onValueChange(i) {
      var _this2 = this;
      return function (value, options, schemaIndex) {
        var newHash = _this2.state.hash.slice();
        newHash[i] = {
          k: _this2.state.hash[i].k,
          v: value
        };
        _this2.setState({
          hash: newHash
        }, function () {
          return _this2.props.onChange(_this2.getNewFormData(newHash));
        });
      };
    }
  }, {
    key: "getDuplicateCounts",
    value: function getDuplicateCounts(hash) {
      var counts = {};
      for (var index = 0; index < hash.length; index++) {
        var element = hash[index];
        if (element.k in counts) {
          counts[element.k]++;
        } else {
          counts[element.k] = 1;
        }
      }
      return counts;
    }
  }, {
    key: "hasDuplicates",
    value: function hasDuplicates(hash) {
      var counts = {};
      for (var index = 0; index < hash.length; index++) {
        var element = hash[index];
        if (element.k in counts) {
          return true;
        } else {
          counts[element.k] = true;
        }
      }
      return false;
    }
  }, {
    key: "toggleCollapse",
    value: function toggleCollapse(key) {
      this.setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          expandInfo: _objectSpread(_objectSpread({}, prevState.expandInfo), {}, _defineProperty({}, key, !prevState.expandInfo[key]))
        });
      });
    }
  }, {
    key: "toggleGroupCollapse",
    value: function toggleGroupCollapse() {
      this.setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          collapse: !prevState.collapse
        });
      });
    }
  }, {
    key: "onKeyChange",
    value: function onKeyChange(pair, i) {
      var _this3 = this;
      return function (event) {
        var newHash = _this3.state.hash.slice();
        newHash[i] = {
          k: event.target.value,
          v: pair.v
        };
        _this3.setState({
          hash: newHash,
          duplication: _this3.hasDuplicates(newHash)
        }, function () {
          return _this3.props.onChange(_this3.getNewFormData(newHash));
        });
      };
    }
  }, {
    key: "onKeyDelete",
    value: function onKeyDelete(index) {
      var _this4 = this;
      return function (event) {
        var newHash = _this4.state.hash.slice();
        newHash.splice(index, 1);
        _this4.setState({
          hash: newHash
        }, function () {
          return _this4.props.onChange(_this4.getNewFormData(newHash));
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var _this$props3 = this.props,
        schema = _this$props3.schema,
        uiSchema = _this$props3.uiSchema,
        formData = _this$props3.formData,
        errorSchema = _this$props3.errorSchema,
        name = _this$props3.name,
        required = _this$props3.required,
        disabled = _this$props3.disabled,
        readonly = _this$props3.readonly,
        autofocus = _this$props3.autofocus,
        registry = _this$props3.registry,
        formContext = _this$props3.formContext,
        onBlur = _this$props3.onBlur,
        onFocus = _this$props3.onFocus,
        depth = _this$props3.depth,
        fromDiscriminator = _this$props3.fromDiscriminator,
        typeCombinatorTypes = _this$props3.typeCombinatorTypes;
      var title = schema.title || name;
      var fields = registry.fields,
        dxInterface = registry.dxInterface;
      var TitleField = fields.TitleField,
        DescriptionField = fields.DescriptionField;
      var addPropsSchema = (0, _utils.retrieveSchema)(schema.additionalProperties, formData, dxInterface);
      var itemSchema = this.additionalFieldSchema(addPropsSchema);
      var duplicationCounts = this.getDuplicateCounts(this.state.hash);
      var mapProps = {
        canAdd: this.canAddItem(formData),
        items: this.state.hash.map(function (pair, index) {
          var item = pair.v;
          var itemErrorSchema1 = errorSchema ? errorSchema[pair.k] : {};
          var itemErrorSchema = duplicationCounts[pair.k] > 1 ? _objectSpread(_objectSpread({}, itemErrorSchema1), {}, {
            __errors: ["Key is duplicated."]
          }) : itemErrorSchema1;
          var collapse = _this5.state.expandInfo[pair.k] ? false : true;
          var childDepth = depth + 1;
          return _this5.renderMapFieldItem({
            index: index,
            key: pair.k,
            itemSchema: itemSchema,
            itemErrorSchema: itemErrorSchema,
            itemData: item,
            itemUiSchema: uiSchema.items,
            autofocus: autofocus && index === 0,
            onBlur: onBlur,
            onFocus: onFocus,
            depth: childDepth,
            isEven: (0, _utils.getEvenOdd)(childDepth),
            collapse: collapse,
            typeCombinatorTypes: typeCombinatorTypes
          });
        }),
        className: "field field-array field-array-of-".concat(addPropsSchema.type, "  ").concat((0, _utils.getEvenOddClass)(depth), " depth_").concat(depth),
        DescriptionField: DescriptionField,
        disabled: disabled,
        uiSchema: uiSchema,
        onAddClick: this.onKeyAdd,
        readonly: readonly,
        required: required,
        schema: schema,
        addPropsSchema: addPropsSchema,
        title: title,
        TitleField: TitleField,
        formContext: formContext,
        formData: formData,
        onNullifyChange: this.onNullifyChange,
        nullify: formData && Object.keys(formData).length > 0,
        depth: depth,
        isEven: (0, _utils.getEvenOdd)(depth),
        toggleGroupCollapse: this.toggleGroupCollapse,
        collapse: this.state.collapse,
        fromDiscriminator: fromDiscriminator
      };
      return /*#__PURE__*/_react.default.createElement(DefaultNormalMapFieldTemplate, mapProps);
    }
  }, {
    key: "renderMapFieldItem",
    value: function renderMapFieldItem(props) {
      var index = props.index,
        key = props.key,
        _props$canRemove = props.canRemove,
        canRemove = _props$canRemove === void 0 ? true : _props$canRemove,
        itemSchema = props.itemSchema,
        itemData = props.itemData,
        itemUiSchema = props.itemUiSchema,
        itemErrorSchema = props.itemErrorSchema,
        autofocus = props.autofocus,
        onBlur = props.onBlur,
        onFocus = props.onFocus,
        depth = props.depth,
        typeCombinatorTypes = props.typeCombinatorTypes;
      var _this$props4 = this.props,
        disabled = _this$props4.disabled,
        readonly = _this$props4.readonly,
        uiSchema = _this$props4.uiSchema,
        registry = _this$props4.registry;
      var SchemaField = registry.fields.SchemaField;
      var _removable$uiSchema$u = _objectSpread({
          removable: true
        }, uiSchema["ui:options"]),
        removable = _removable$uiSchema$u.removable;
      var has = {
        remove: removable && canRemove
      };
      has.toolbar = Object.keys(has).some(function (key) {
        return has[key];
      });
      var childDepth = depth + 1;
      var schema = itemSchema.title ? itemSchema : _objectSpread(_objectSpread({}, itemSchema), {}, {
        title: key
      });
      return {
        index: index,
        children: /*#__PURE__*/_react.default.createElement(SchemaField, {
          schema: schema,
          uiSchema: itemUiSchema,
          formData: itemData,
          errorSchema: itemErrorSchema,
          required: this.isItemRequired(itemSchema),
          onChange: this.onValueChange(index),
          onBlur: onBlur,
          onFocus: onFocus,
          registry: this.props.registry,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          autofocus: autofocus,
          depth: childDepth,
          isEven: (0, _utils.getEvenOdd)(childDepth),
          typeCombinatorTypes: typeCombinatorTypes
        }),
        className: "map-item",
        disabled: disabled,
        hasToolbar: has.toolbar,
        hasRemove: has.remove,
        key: key,
        onDropKeyClick: this.onKeyDelete(index),
        onKeyChange: this.onKeyChange({
          k: key,
          v: itemData
        }, index),
        toggleCollapse: this.toggleCollapse,
        collapse: props.collapse,
        readonly: readonly,
        depth: depth
      };
    }
  }]);
  return MapField;
}(_react.Component);
_defineProperty(MapField, "defaultProps", {
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.prefixClass)("row")
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: (0, _utils.prefixClass)("map-item-add text-right")
  }, /*#__PURE__*/_react.default.createElement(IconBtn, {
    type: "info",
    className: (0, _utils.prefixClass)("btn-add"),
    tabIndex: "0",
    onClick: onClick,
    disabled: disabled
  }, "Add Property")));
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  MapField.propTypes = {
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
    formData: _propTypes.default.object,
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
var _default = MapField;
exports.default = _default;