"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

var _Icons = require("../Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function MapFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      idSchema = _ref.idSchema,
      title = _ref.title,
      required = _ref.required,
      onNullifyChange = _ref.onNullifyChange,
      nullify = _ref.nullify,
      disabled = _ref.disabled;

  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("div", null);
  }
  var id = idSchema.$id + "__title";
  return _react2.default.createElement(TitleField, {
    id: id,
    title: title,
    required: required,
    nullify: nullify,
    onNullifyChange: onNullifyChange,
    disabled: disabled
  });
}

function MapFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
      idSchema = _ref2.idSchema,
      description = _ref2.description;

  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("div", null);
  }
  var id = idSchema.$id + "__description";
  return _react2.default.createElement(DescriptionField, { id: id, description: description });
}

function IconBtn(props) {
  var type = props.type,
      icon = props.icon,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["type", "icon", "className"]);

  return _react2.default.createElement(
    "button",
    _extends({
      type: "button",
      className: (0, _utils.prefixClass)("btn btn-" + type) + " " + className + " " + (0, _utils.prefixClass)("col-xs-12")
    }, otherProps),
    props.children
  );
}

// Used in the two templates
function DefaultMapItem(props) {
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  return _react2.default.createElement(
    "div",
    { className: (0, _utils.prefixClass)("row") },
    props.index > 0 && _react2.default.createElement("hr", null),
    _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)("col-xs-12"), style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
      _react2.default.createElement("input", {
        type: "text",
        className: (0, _utils.prefixClass)("form-control"),
        onChange: props.onKeyChange,
        value: props.key,
        required: true }),
      props.hasToolbar && props.hasRemove && _react2.default.createElement(
        "div",
        { className: (0, _utils.prefixClass)("col-xs-1 map-item-toolbox") },
        _react2.default.createElement(
          IconBtn,
          {
            type: "danger",
            className: (0, _utils.prefixClass)("map-item-remove"),
            tabIndex: "-1",
            style: btnStyle,
            disabled: props.disabled || props.readonly,
            onClick: props.onDropKeyClick },
          _react2.default.createElement(_Icons.CloseIcon, { width: 14 })
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { key: props.index, className: (0, _utils.prefixClass)(props.className) },
      _react2.default.createElement(
        "div",
        { className: (0, _utils.prefixClass)("col-xs-12 flex"), style: { display: 'flex' } },
        _react2.default.createElement(
          "div",
          { className: (0, _utils.prefixClass)("flex-1 " + (props.hasToolbar && props.hasRemove ? "col-xs-8" : "col-xs-9")), style: { flex: '1' } },
          props.children
        )
      )
    )
  );
}

function DefaultNormalMapFieldTemplate(props) {
  return _react2.default.createElement(
    "fieldset",
    { className: (0, _utils.prefixClass)(props.className) },
    _react2.default.createElement(MapFieldTitle, {
      key: "map-field-title-" + props.idSchema.$id,
      TitleField: props.TitleField,
      idSchema: props.idSchema,
      title: props.title,
      required: props.required,
      nullify: props.nullify,
      onNullifyChange: props.onNullifyChange,
      disabled: props.disabled
    }),
    _react2.default.createElement(MapFieldDescription, {
      key: "map-field-description-" + props.idSchema.$id,
      DescriptionField: props.DescriptionField,
      idSchema: props.idSchema,
      description: props.uiSchema["ui:description"] || props.schema.description || props.addPropsSchema.description
    }),
    _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)("row map-item-list"),
        key: "map-item-list-" + props.idSchema.$id },
      props.items && props.items.map(function (p) {
        return DefaultMapItem(p);
      })
    ),
    props.canAdd && _react2.default.createElement(AddButton, {
      onClick: props.onAddClick,
      disabled: props.disabled || props.readonly
    })
  );
}

var MapField = function (_Component) {
  _inherits(MapField, _Component);

  function MapField(props) {
    _classCallCheck(this, MapField);

    var _this = _possibleConstructorReturn(this, (MapField.__proto__ || Object.getPrototypeOf(MapField)).call(this, props));

    _this.onKeyAdd = function () {
      var index = 0;
      while ("key" + index in _this.props.formData) {
        index++;
      }

      var _this$props = _this.props,
          schema = _this$props.schema,
          registry = _this$props.registry;
      var definitions = registry.definitions;

      var itemSchema = schema.additionalProperties;

      var newHash = _this.state.hash.slice();
      newHash.push({
        k: "key" + index,
        v: (0, _utils.getDefaultFormState)(itemSchema, undefined, definitions)
      });
      _this.setState({
        hash: newHash
      }, function () {
        return _this.props.onChange(_this.getNewFormData(newHash));
      });
    };

    _this.shouldDisable = function () {
      return (_this.props.formData === undefined || _this.props.formData && Object.keys(_this.props.formData).length === 0) && !_this.props.required;
    };

    _this.onNullifyChange = function () {
      if (_this.shouldDisable()) {
        if (_this.state.originalFormData) {
          _this.props.onChange(_this.state.originalFormData);
        } else {
          _this.props.onChange({
            key0: (0, _utils.getDefaultFormState)(_this.props.schema.additionalProperties, undefined, _this.props.registry.definitions)
          });
        }
      } else {
        _this.props.onChange(undefined);
      }
    };

    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  _createClass(MapField, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.getStateFromProps(nextProps));
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
      var _props = this.props,
          schema = _props.schema,
          uiSchema = _props.uiSchema;

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

      return function (value) {
        var newHash = _this2.state.hash.slice();
        newHash[i] = { k: _this2.state.hash[i].k, v: value };
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
    key: "onKeyChange",
    value: function onKeyChange(pair, i) {
      var _this3 = this;

      return function (event) {
        var newHash = _this3.state.hash.slice();
        newHash[i] = { k: event.target.value, v: pair.v };
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

      var _props2 = this.props,
          schema = _props2.schema,
          uiSchema = _props2.uiSchema,
          formData = _props2.formData,
          errorSchema = _props2.errorSchema,
          idSchema = _props2.idSchema,
          name = _props2.name,
          required = _props2.required,
          disabled = _props2.disabled,
          readonly = _props2.readonly,
          autofocus = _props2.autofocus,
          registry = _props2.registry,
          formContext = _props2.formContext,
          onBlur = _props2.onBlur,
          onFocus = _props2.onFocus;

      var title = schema.title === undefined ? name : name === undefined ? schema.title : name + " (" + schema.title + ")";
      var definitions = registry.definitions,
          fields = registry.fields;
      var TitleField = fields.TitleField,
          DescriptionField = fields.DescriptionField;

      var addPropsSchema = (0, _utils.retrieveSchema)(schema.additionalProperties, definitions);
      var itemSchema = _extends({}, addPropsSchema, { description: undefined });
      var duplicationCounts = this.getDuplicateCounts(this.state.hash);
      var mapProps = {
        canAdd: this.canAddItem(formData),
        items: this.state.hash.map(function (pair, index) {
          var item = pair.v;
          var itemErrorSchema1 = errorSchema ? errorSchema[pair.k] : {};
          var itemErrorSchema = duplicationCounts[pair.k] > 1 ? _extends({}, itemErrorSchema1, { __errors: ["Key is duplicated."] }) : itemErrorSchema1;
          var itemIdPrefix = idSchema.$id + "_" + pair.k;
          var itemIdSchema = (0, _utils.toIdSchema)(itemSchema, itemIdPrefix, definitions, item);
          return _this5.renderMapFieldItem({
            index: index,
            key: pair.k,
            itemSchema: itemSchema,
            itemIdSchema: itemIdSchema,
            itemErrorSchema: itemErrorSchema,
            itemData: item,
            itemUiSchema: uiSchema.items,
            autofocus: autofocus && index === 0,
            onBlur: onBlur,
            onFocus: onFocus
          });
        }),
        className: "field field-array field-array-of-" + addPropsSchema.type,
        DescriptionField: DescriptionField,
        disabled: disabled,
        idSchema: idSchema,
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
        nullify: formData && Object.keys(formData).length > 0
      };

      return _react2.default.createElement(DefaultNormalMapFieldTemplate, mapProps);
    }
  }, {
    key: "renderMapFieldItem",
    value: function renderMapFieldItem(props) {
      var index = props.index,
          key = props.key,
          _props$canRemove = props.canRemove,
          canRemove = _props$canRemove === undefined ? true : _props$canRemove,
          itemSchema = props.itemSchema,
          itemData = props.itemData,
          itemUiSchema = props.itemUiSchema,
          itemIdSchema = props.itemIdSchema,
          itemErrorSchema = props.itemErrorSchema,
          autofocus = props.autofocus,
          onBlur = props.onBlur,
          onFocus = props.onFocus;
      var _props3 = this.props,
          disabled = _props3.disabled,
          readonly = _props3.readonly,
          uiSchema = _props3.uiSchema,
          registry = _props3.registry;
      var SchemaField = registry.fields.SchemaField;

      var _removable$uiSchema$u = _extends({
        removable: true
      }, uiSchema["ui:options"]),
          removable = _removable$uiSchema$u.removable;

      var has = {
        remove: removable && canRemove
      };
      has.toolbar = Object.keys(has).some(function (key) {
        return has[key];
      });

      return {
        index: index,
        children: _react2.default.createElement(SchemaField, {
          schema: itemSchema,
          uiSchema: itemUiSchema,
          formData: itemData,
          errorSchema: itemErrorSchema,
          idSchema: itemIdSchema,
          required: this.isItemRequired(itemSchema),
          onChange: this.onValueChange(index),
          onBlur: onBlur,
          onFocus: onFocus,
          registry: this.props.registry,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          autofocus: autofocus
        }),
        className: "map-item",
        disabled: disabled,
        hasToolbar: has.toolbar,
        hasRemove: has.remove,
        key: key,
        onDropKeyClick: this.onKeyDelete(index),
        onKeyChange: this.onKeyChange({ k: key, v: itemData }, index),
        readonly: readonly
      };
    }
  }]);

  return MapField;
}(_react.Component);

MapField.defaultProps = {
  uiSchema: {},
  formData: [],
  idSchema: {},
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
    { className: (0, _utils.prefixClass)("row") },
    _react2.default.createElement(
      "p",
      { className: (0, _utils.prefixClass)("col-xs-3 col-xs-offset-9 map-item-add text-right") },
      _react2.default.createElement(
        IconBtn,
        {
          type: "info",
          className: (0, _utils.prefixClass)("btn-add col-xs-12"),
          tabIndex: "0",
          onClick: onClick,
          disabled: disabled
        },
        "Add Property"
      )
    )
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  MapField.propTypes = {
    schema: _propTypes2.default.object.isRequired,
    uiSchema: _propTypes2.default.shape({
      "ui:options": _propTypes2.default.shape({
        addable: _propTypes2.default.bool,
        orderable: _propTypes2.default.bool,
        removable: _propTypes2.default.bool
      })
    }),
    idSchema: _propTypes2.default.object,
    errorSchema: _propTypes2.default.object,
    onChange: _propTypes2.default.func.isRequired,
    onBlur: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    formData: _propTypes2.default.object,
    required: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
    autofocus: _propTypes2.default.bool,
    registry: _propTypes2.default.shape({
      widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
      fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
      definitions: _propTypes2.default.object.isRequired,
      formContext: _propTypes2.default.object.isRequired
    })
  };
}

exports.default = MapField;