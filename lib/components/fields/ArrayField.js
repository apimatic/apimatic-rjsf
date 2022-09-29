"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.IconBtn = IconBtn;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DataType = require("../fields/DataType");

var _DataType2 = _interopRequireDefault(_DataType);

var _UnsupportedField = require("./UnsupportedField");

var _UnsupportedField2 = _interopRequireDefault(_UnsupportedField);

var _utils = require("../../utils");

var _Icons = require("../Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      title = _ref.title,
      required = _ref.required,
      onNullifyChange = _ref.onNullifyChange,
      nullify = _ref.nullify,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      _ref$fromDiscriminato = _ref.fromDiscriminator,
      fromDiscriminator = _ref$fromDiscriminato === undefined ? false : _ref$fromDiscriminato;

  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("div", null);
  }
  return _react2.default.createElement(TitleField, {
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
    return _react2.default.createElement("div", null);
  }

  return _react2.default.createElement(DescriptionField, { description: description });
}

function IconBtn(props) {
  var _props$type = props.type,
      type = _props$type === undefined ? "default" : _props$type,
      icon = props.icon,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["type", "icon", "className"]);

  return _react2.default.createElement(
    "button",
    _extends({
      type: "button",
      className: (0, _utils.prefixClass)("btn btn-" + type) + " " + className
    }, otherProps),
    props.children,
    " "
  );
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

  return _react2.default.createElement(
    "div",
    {
      key: props.index,
      className: (0, _utils.prefixClass)("array-item-wrapper " + props.className),
      style: arrayItemWrapper
    },
    _react2.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      },
      " ",
      props.hasToolbar && _react2.default.createElement(
        "div",
        {
          className: (0, _utils.prefixClass)("array-item-toolbox"),
          style: {
            display: "flex",
            justifyContent: "flex-end"
          }
        },
        _react2.default.createElement(
          "div",
          { className: (0, _utils.prefixClass)(" btn-group") },
          " ",
          (props.hasMoveUp || props.hasMoveDown) && _react2.default.createElement(
            IconBtn,
            {
              className: (0, _utils.prefixClass)("array-item-move-up"),
              tabIndex: "-1",
              style: btnStyle,
              disabled: props.disabled || props.readonly || !props.hasMoveUp,
              onClick: props.onReorderClick(props.index, props.index - 1)
            },
            _react2.default.createElement(_Icons.ArrowUpIcon, { width: 14 }),
            " "
          ),
          (props.hasMoveUp || props.hasMoveDown) && _react2.default.createElement(
            IconBtn,
            {
              className: (0, _utils.prefixClass)("array-item-move-down"),
              tabIndex: "-1",
              style: btnStyle,
              disabled: props.disabled || props.readonly || !props.hasMoveDown,
              onClick: props.onReorderClick(props.index, props.index + 1)
            },
            _react2.default.createElement(_Icons.ArrowDownIcon, { width: 14 }),
            " "
          ),
          props.hasRemove && _react2.default.createElement(
            IconBtn,
            {
              type: "danger",
              className: (0, _utils.prefixClass)("array-item-remove"),
              tabIndex: "-1",
              style: btnStyle,
              disabled: props.disabled || props.readonly,
              onClick: props.onDropIndexClick(props.index)
            },
            _react2.default.createElement(_Icons.DeleteIcon, { width: 14 }),
            " "
          ),
          " "
        ),
        " "
      ),
      " "
    ),
    " ",
    _react2.default.createElement(
      "div",
      null,
      " ",
      props.children,
      " "
    ),
    " "
  );
}

function DefaultFixedArrayFieldTemplate(props) {
  return _react2.default.createElement(
    "fieldset",
    { className: (0, _utils.prefixClass)(props.className) },
    "(",
    " ",
    _react2.default.createElement(ArrayFieldTitle, {
      TitleField: props.TitleField,
      title: props.uiSchema["ui:title"] || props.title,
      required: props.required,
      nullify: props.nullify,
      onNullifyChange: props.onNullifyChange,
      disabled: props.disabled,
      fromDiscriminator: props.fromDiscriminator
    }),
    ")",
    " ",
    (props.uiSchema["ui:description"] || props.schema.description) && _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)("field-description") },
      props.uiSchema["ui:description"] || props.schema.description.replace(/<br>/gi, "\n"),
      " "
    ),
    " ",
    _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)("row array-item-list") },
      props.items && props.items.map(function (item, index) {
        return _react2.default.createElement(DefaultArrayItem, _extends({
          key: "outer-array-item-" + index
        }, item, {
          index: index
        }));
      })
    ),
    props.canAdd && _react2.default.createElement(AddButton, {
      onClick: props.onAddClick,
      disabled: props.disabled || props.readonly
    }),
    " "
  );
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

  return _react2.default.createElement(
    "fieldset",
    { className: (0, _utils.prefixClass)(props.className) },
    _react2.default.createElement(
      "div",
      { className: headerClasses },
      _react2.default.createElement(
        "div",
        { className: (0, _utils.prefixClass)("header-left hand"), onClick: props.toggleCollapse },
        props.fromDiscriminator ? null : _react2.default.createElement(ArrayFieldTitle, {
          TitleField: props.TitleField,
          title: title,
          required: props.required,
          nullify: props.nullify,
          onNullifyChange: props.onNullifyChange,
          disabled: props.disabled,
          fromDiscriminator: props.fromDiscriminator
        })
      ),
      _react2.default.createElement(
        IconBtn,
        {
          tabIndex: "-1",
          onClick: props.toggleCollapse,
          className: (0, _utils.prefixClass)("btn toggle-button")
        },
        props.collapse ? _react2.default.createElement(_Icons.ChevronIcon, { width: 14, rotate: -90 }) : _react2.default.createElement(_Icons.ChevronIcon, { width: 14 }),
        " "
      ),
      " "
    ),
    _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)("type-container") },
      _react2.default.createElement(_DataType2.default, {
        title: dataType,
        link: props.schema.dataTypeLink,
        type: "array-type",
        markdown: markdown
      }),
      props.schema.paramType && _react2.default.createElement(
        "div",
        { className: (0, _utils.prefixClass)("param-type") },
        " ",
        props.schema.paramType,
        " "
      ),
      " "
    ),
    (props.uiSchema["ui:description"] || props.schema.description || props.itemsSchema.description) && _react2.default.createElement(ArrayFieldDescription, {
      DescriptionField: props.DescriptionField,
      description: props.uiSchema["ui:description"] || props.schema.description || props.itemsSchema.description
    }),
    !props.collapse && _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)(arrayContainerClasses) },
      _react2.default.createElement(
        "div",
        { className: (0, _utils.prefixClass)("row array-item-list") },
        props.items && props.items.map(function (item, index) {
          return _react2.default.createElement(DefaultArrayItem, _extends({
            key: "inner-array-item-" + index
          }, item, {
            index: index
          }));
        })
      ),
      props.canAdd && _react2.default.createElement(AddButton, {
        onClick: props.onAddClick,
        disabled: props.disabled || props.readonly
      }),
      " "
    ),
    " "
  );
}

var ArrayField = function (_Component) {
  _inherits(ArrayField, _Component);

  function ArrayField(props) {
    _classCallCheck(this, ArrayField);

    var _this = _possibleConstructorReturn(this, (ArrayField.__proto__ || Object.getPrototypeOf(ArrayField)).call(this, props));

    _this.onAddClick = function (event) {
      event.preventDefault();
      var _this$props = _this.props,
          formData = _this$props.formData,
          _this$props$registry = _this$props.registry,
          registry = _this$props$registry === undefined ? (0, _utils.getDefaultRegistry)() : _this$props$registry;
      var dxInterface = registry.dxInterface;

      var itemSchema = _this.getItemSchema();

      _this.props.onChange([].concat(_toConsumableArray(formData), [(0, _utils.getDefaultFormState)(itemSchema, undefined, undefined, dxInterface)]), {
        validate: false
      });
    };

    _this.onDropIndexClick = function (index) {
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
    };

    _this.onReorderClick = function (index, newIndex) {
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
    };

    _this.onChangeForIndex = function (index) {
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
    };

    _this.onSelectChange = function (value) {
      _this.props.onChange(value, {
        validate: false
      });
    };

    _this.shouldDisable = function () {
      return (_this.props.formData === undefined || _this.props.formData && _this.props.formData.length === 0) && !_this.props.required && !_this.props.fromDiscriminator;
    };

    _this.getItemSchema = function () {
      var schema = _this.props.schema;


      if ((0, _utils.isFixedItems)(schema) && (0, _utils.allowAdditionalItems)(schema)) {
        return schema.additionalItems;
      } else {
        return schema.items;
      }
    };

    _this.getFormData = function () {
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
    };

    _this.onNullifyChange = function () {
      var onChange = _this.props.onChange;

      var formData = _this.getFormData();

      if (_this.shouldDisable()) {
        onChange(formData);
      } else {
        onChange(undefined);
      }
    };

    _this.additionalFieldSchema = function (itemSchema, index) {
      var schema = _this.props.schema;


      return _extends({}, itemSchema, {
        description: undefined,
        title: "[" + index + "]",
        discriminator: schema.discriminator,
        discriminatorValue: schema.discriminatorValue,
        readOnly: schema.readOnly,
        writeOnly: schema.writeOnly
      });
    };

    _this.state = _this.getStateFromProps(props);
    _this.state.collapse = true;
    _this.state.expandAllLevel = props.expandAllLevel;
    _this.state.depth = props.depth ? props.depth : 1;

    _this.toggleCollapse = _this.toggleCollapse.bind(_this);
    return _this;
  }

  _createClass(ArrayField, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var collapse = this.state.depth === this.state.expandAllLevel && this.state.expandAll !== nextProps.expandAll ? !nextProps.expandAll : this.state.collapse;
      this.setState(_extends({}, this.getStateFromProps(nextProps), {
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
      var _props = this.props,
          schema = _props.schema,
          uiSchema = _props.uiSchema;

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
      var _props2 = this.props,
          schema = _props2.schema,
          uiSchema = _props2.uiSchema,
          _props2$registry = _props2.registry,
          registry = _props2$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props2$registry;
      var dxInterface = registry.dxInterface;

      if (!schema.hasOwnProperty("items")) {
        return _react2.default.createElement(_UnsupportedField2.default, { schema: schema, reason: "Missing items definition" });
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
        return _extends({}, prevState, {
          collapse: !prevState.collapse
        });
      });
    }
  }, {
    key: "renderNormalArray",
    value: function renderNormalArray() {
      var _this2 = this;

      var _props3 = this.props,
          schema = _props3.schema,
          uiSchema = _props3.uiSchema,
          formData = _props3.formData,
          errorSchema = _props3.errorSchema,
          name = _props3.name,
          required = _props3.required,
          disabled = _props3.disabled,
          readonly = _props3.readonly,
          autofocus = _props3.autofocus,
          _props3$registry = _props3.registry,
          registry = _props3$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props3$registry,
          formContext = _props3.formContext,
          onBlur = _props3.onBlur,
          onFocus = _props3.onFocus,
          schemaIndex = _props3.schemaIndex,
          fromDiscriminator = _props3.fromDiscriminator,
          typeCombinatorTypes = _props3.typeCombinatorTypes,
          depth = _props3.depth;
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
        className: "field field-array field-array-of-" + itemsSchema.type + " " + (0, _utils.getEvenOddClass)(depth) + " depth_" + depth,
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
      return _react2.default.createElement(Component, arrayProps);
    }
  }, {
    key: "renderMultiSelect",
    value: function renderMultiSelect() {
      var _props4 = this.props,
          schema = _props4.schema,
          uiSchema = _props4.uiSchema,
          formData = _props4.formData,
          disabled = _props4.disabled,
          readonly = _props4.readonly,
          autofocus = _props4.autofocus,
          onBlur = _props4.onBlur,
          onFocus = _props4.onFocus,
          _props4$registry = _props4.registry,
          registry = _props4$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props4$registry;

      var items = this.props.formData;
      var widgets = registry.widgets,
          dxInterface = registry.dxInterface,
          formContext = registry.formContext;

      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, formData, dxInterface);
      var enumOptions = (0, _utils.optionsList)(itemsSchema);

      var _getUiOptions$enumOpt = _extends({}, (0, _utils.getUiOptions)(uiSchema), {
        enumOptions: enumOptions
      }),
          _getUiOptions$enumOpt2 = _getUiOptions$enumOpt.widget,
          widget = _getUiOptions$enumOpt2 === undefined ? "select" : _getUiOptions$enumOpt2,
          options = _objectWithoutProperties(_getUiOptions$enumOpt, ["widget"]);

      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return _react2.default.createElement(Widget, {
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
      var _props5 = this.props,
          schema = _props5.schema,
          uiSchema = _props5.uiSchema,
          name = _props5.name,
          disabled = _props5.disabled,
          readonly = _props5.readonly,
          autofocus = _props5.autofocus,
          onBlur = _props5.onBlur,
          onFocus = _props5.onFocus,
          _props5$registry = _props5.registry,
          registry = _props5$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props5$registry;

      var title = schema.title === undefined ? name : name === undefined ? schema.title : name + " (" + schema.title + ")";
      var items = this.props.formData;
      var widgets = registry.widgets,
          formContext = registry.formContext;

      var _getUiOptions2 = (0, _utils.getUiOptions)(uiSchema),
          _getUiOptions2$widget = _getUiOptions2.widget,
          widget = _getUiOptions2$widget === undefined ? "files" : _getUiOptions2$widget,
          options = _objectWithoutProperties(_getUiOptions2, ["widget"]);

      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return _react2.default.createElement(Widget, {
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

      var _props6 = this.props,
          schema = _props6.schema,
          uiSchema = _props6.uiSchema,
          formData = _props6.formData,
          errorSchema = _props6.errorSchema,
          name = _props6.name,
          required = _props6.required,
          disabled = _props6.disabled,
          readonly = _props6.readonly,
          autofocus = _props6.autofocus,
          _props6$registry = _props6.registry,
          registry = _props6$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props6$registry,
          onBlur = _props6.onBlur,
          onFocus = _props6.onFocus,
          typeCombinatorTypes = _props6.typeCombinatorTypes;

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
      return _react2.default.createElement(Template, arrayProps);
    }
  }, {
    key: "renderArrayFieldItem",
    value: function renderArrayFieldItem(props) {
      var index = props.index,
          depth = props.depth,
          _props$canRemove = props.canRemove,
          canRemove = _props$canRemove === undefined ? true : _props$canRemove,
          _props$canMoveUp = props.canMoveUp,
          canMoveUp = _props$canMoveUp === undefined ? true : _props$canMoveUp,
          _props$canMoveDown = props.canMoveDown,
          canMoveDown = _props$canMoveDown === undefined ? true : _props$canMoveDown,
          itemSchema = props.itemSchema,
          itemData = props.itemData,
          itemUiSchema = props.itemUiSchema,
          itemErrorSchema = props.itemErrorSchema,
          autofocus = props.autofocus,
          onBlur = props.onBlur,
          onFocus = props.onFocus,
          schemaIndex = props.schemaIndex,
          typeCombinatorTypes = props.typeCombinatorTypes;
      var _props7 = this.props,
          disabled = _props7.disabled,
          readonly = _props7.readonly,
          uiSchema = _props7.uiSchema,
          _props7$registry = _props7.registry,
          registry = _props7$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props7$registry;
      var SchemaField = registry.fields.SchemaField;

      var _orderable$removable$ = _extends({
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
        children: _react2.default.createElement(SchemaField, {
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
  }, {
    key: "itemTitle",
    get: function get() {
      var schema = this.props.schema;

      return schema.items.title || schema.items.description || "Item";
    }
  }]);

  return ArrayField;
}(_react.Component);

ArrayField.defaultProps = {
  uiSchema: {},
  formData: [],
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
};


function AddButton(_ref3) {
  var onClick = _ref3.onClick,
      disabled = _ref3.disabled;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "p",
      { className: (0, _utils.prefixClass)("array-item-add text-right") },
      _react2.default.createElement(
        IconBtn,
        {
          type: "info",
          className: (0, _utils.prefixClass)("btn-add"),
          tabIndex: "0",
          onClick: onClick,
          disabled: disabled
        },
        "Add Item",
        " "
      ),
      " "
    ),
    " "
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  ArrayField.propTypes = {
    schema: _propTypes2.default.object.isRequired,
    uiSchema: _propTypes2.default.shape({
      "ui:options": _propTypes2.default.shape({
        addable: _propTypes2.default.bool,
        orderable: _propTypes2.default.bool,
        removable: _propTypes2.default.bool
      })
    }),
    errorSchema: _propTypes2.default.object,
    onChange: _propTypes2.default.func.isRequired,
    onBlur: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    formData: _propTypes2.default.array,
    required: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
    autofocus: _propTypes2.default.bool,
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

exports.default = ArrayField;