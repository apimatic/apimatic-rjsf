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

var _MapField = require("./MapField");

var _MapField2 = _interopRequireDefault(_MapField);

var _utils = require("../../utils");

var _validate = require("../../validate");

var _reactCodemirror = require("react-codemirror2");

var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

var _DataType = require("../fields/DataType");

var _DataType2 = _interopRequireDefault(_DataType);

require("codemirror/mode/javascript/javascript");

var _Icons = require("../Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// import "codemirror/lib/codemirror.css";
// import "./../../../playground/style.css";

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

var READONLY_INFO_MESSAGE = "All properties in this object are Response Only. Response Only means that it may be sent as a part of the response but should not be sent as part of the request.";

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
  return _react2.default.createElement(
    "ul",
    null,
    errorList.map(function (key, index) {
      return _react2.default.createElement(
        "li",
        { key: index },
        key.stack
      );
    })
  );
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
    _react2.default.createElement("span", { className: (0, _utils.prefixClass)("tooltip") }),
    props.children
  );
}

function renderViewJsonButton(props) {
  var formJsonError = props.formJsonError,
      errorSchema = props.errorSchema,
      toggleEditView = props.toggleEditView,
      showEditView = props.showEditView;

  var disableViewJsonButton = formJsonError || Object.keys(errorSchema).length !== 0;

  return disableViewJsonButton ? _react2.default.createElement(
    IconBtn,
    { className: (0, _utils.prefixClass)("btn json-button json-button-disabled"), disabled: true },
    _react2.default.createElement(_Icons.JsonIcon, null)
  ) : _react2.default.createElement(
    IconBtn,
    {
      onClick: toggleEditView,
      className: (0, _utils.prefixClass)("btn json-button " + (showEditView ? "form-view" : ""))
    },
    _react2.default.createElement(_Icons.JsonIcon, null)
  );

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
    return prop.content;
  });
}

function DefaultObjectFieldTemplate(props) {
  var TitleField = props.TitleField,
      DescriptionField = props.DescriptionField,
      nullify = props.nullify,
      onNullifyChange = props.onNullifyChange,
      disabled = props.disabled,
      collapse = props.collapse,
      toggleCollapse = props.toggleCollapse;


  var canEditJson = nullify && !props.disableFormJsonEdit && !props.uiSchema.disableFieldJsonEdit;

  var canCollapse = props.properties && props.properties.length > 0 && !props.disableFormJsonEdit && !props.uiSchema.disableFieldJsonEdit;

  var dataType = props.schema.dataTypeDisplayText;
  var markdown = props.schema.dataTypeMarkdown;
  var title = props.uiSchema["ui:title"] || props.schema.title || props.title;

  return _react2.default.createElement(
    "fieldset",
    {
      className: (0, _utils.prefixClass)((props.isEven ? "even" : "odd") + (" depth_" + props.depth)),
      id: props.idSchema.$id + "__object"
    },
    _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)("object-header") },
      _react2.default.createElement(
        "div",
        { className: (0, _utils.prefixClass)("header-left hand"), onClick: toggleCollapse },
        title && _react2.default.createElement(TitleField, {
          id: props.idSchema.$id + "__title",
          title: title,
          required: props.required,
          formContext: props.formContext,
          nullify: nullify,
          onNullifyChange: onNullifyChange,
          disabled: disabled,
          fromDiscriminator: props.fromDiscriminator
        }),
        props.required && (props.uiSchema["ui:title"] || props.title) && _react2.default.createElement(
          "div",
          { className: (0, _utils.prefixClass)("element-required") },
          _react2.default.createElement(
            "span",
            null,
            "Required"
          )
        )
      ),
      canEditJson && renderViewJsonButton(props),
      canCollapse && _react2.default.createElement(
        IconBtn,
        {
          tabIndex: "-1",
          onClick: toggleCollapse,
          className: (0, _utils.prefixClass)("btn toggle-button")
        },
        collapse ? _react2.default.createElement(_Icons.ChevronIcon, { width: 14, rotate: -90 }) : _react2.default.createElement(_Icons.ChevronIcon, { width: 14 })
      )
    ),
    _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)("type-container") },
      _react2.default.createElement(_DataType2.default, {
        title: dataType,
        link: props.schema.dataTypeLink,
        type: "object-type",
        markdown: markdown
      }),
      props.schema.paramType && _react2.default.createElement(
        "div",
        { className: (0, _utils.prefixClass)("param-type") },
        props.schema.paramType
      )
    ),
    props.description && _react2.default.createElement(DescriptionField, {
      id: props.idSchema.$id + "__description",
      description: props.description,
      formContext: props.formContext
    }),
    (!collapse || !canCollapse) && _react2.default.createElement(
      "div",
      {
        className: (0, _utils.prefixClass)("element-properties " + (props.showEditView ? "json-edit-view" : ""))
      },
      props.showEditView && canEditJson ? _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactCodemirror2.default, {
          value: props.formJson,
          onChange: props.onJsonChange,
          options: cmOptions
        }),
        _react2.default.createElement(
          "div",
          { className: (0, _utils.prefixClass)("editor-validation-errors") },
          props.formJsonError && _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              null,
              "Could not parse JSON. Syntax error."
            )
          ),
          Object.keys(props.errorSchema).length !== 0 && renderErrorSchema(props.errorSchema)
        )
      ) : props.properties.map(function (prop) {
        return prop.content;
      })
    )
  );
}

var ObjectField = function (_Component) {
  _inherits(ObjectField, _Component);

  function ObjectField(props) {
    _classCallCheck(this, ObjectField);

    var _this = _possibleConstructorReturn(this, (ObjectField.__proto__ || Object.getPrototypeOf(ObjectField)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = _this.getStateFromProps(props);
    _this.state.formJson = JSON.stringify(props.formData, null, 2);
    _this.state.formJsonError = false;
    _this.state.showEditView = false;
    _this.state.collapse = false;
    _this.state.isEven = props.isEven || props.levelReversal ? true : false;
    _this.state.expandAllLevel = props.expandAllLevel;
    _this.state.depth = props.depth ? props.depth : 1;
    _this.toggleEditView = _this.toggleEditView.bind(_this);
    _this.toggleCollapse = _this.toggleCollapse.bind(_this);
    return _this;
  }

  _createClass(ObjectField, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var collapse = this.state.depth === this.state.expandAllLevel && this.state.expandAll !== nextProps.expandAll ? !nextProps.expandAll : this.state.collapse;
      this.setState(_extends({}, this.getStateFromProps(nextProps), {
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
    key: "render",
    value: function render() {
      var _props = this.props,
          uiSchema = _props.uiSchema,
          formData = _props.formData,
          errorSchema = _props.errorSchema,
          idSchema = _props.idSchema,
          name = _props.name,
          required = _props.required,
          disabled = _props.disabled,
          readonly = _props.readonly,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          _props$registry = _props.registry,
          registry = _props$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props$registry,
          disableFormJsonEdit = _props.disableFormJsonEdit,
          depth = _props.depth,
          isEven = _props.isEven,
          expandAllLevel = _props.expandAllLevel,
          expandAll = _props.expandAll,
          fromDiscriminator = _props.fromDiscriminator,
          typeCombinatorTypes = _props.typeCombinatorTypes,
          _props$discriminatorO = _props.discriminatorObj,
          discriminatorObj = _props$discriminatorO === undefined ? {} : _props$discriminatorO;
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
        idSchema: idSchema,
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
        return _extends({}, prevState, {
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
      return _react2.default.createElement(
        "fieldset",
        null,
        title && _react2.default.createElement(TitleField, {
          id: templateProps.idSchema.$id + "__title",
          title: title,
          required: templateProps.required,
          formContext: templateProps.formContext,
          nullify: templateProps.nullify,
          onNullifyChange: this.onNullifyChange,
          disabled: templateProps.disabled,
          fromDiscriminator: templateProps.fromDiscriminator
        }),
        _react2.default.createElement(
          "div",
          { className: (0, _utils.prefixClass)("type-container") },
          _react2.default.createElement(_DataType2.default, {
            title: dataType,
            link: templateProps.schema.dataTypeLink,
            type: "object-type",
            markdown: markdown
          }),
          templateProps.schema.paramType && _react2.default.createElement(
            "div",
            { className: (0, _utils.prefixClass)("param-type") },
            templateProps.schema.paramType
          )
        ),
        templateProps.description && _react2.default.createElement(DescriptionField, {
          id: templateProps.idSchema.$id + "__description",
          description: templateProps.description,
          formContext: templateProps.formContext
        }),
        _react2.default.createElement(
          "div",
          { style: { position: "relative" } },
          _react2.default.createElement(_reactCodemirror2.default, {
            value: this.state.formJson,
            onChange: this.onJsonChange,
            options: cmOptions
          }),
          _react2.default.createElement("div", {
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
          })
        ),
        this.state.formJsonError && _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("p", null),
          _react2.default.createElement(
            "ul",
            { className: (0, _utils.prefixClass)("error-detail bs-callout bs-callout-info") },
            _react2.default.createElement(
              "li",
              { className: (0, _utils.prefixClass)("text-danger") },
              "Could not parse JSON. Syntax error."
            )
          )
        )
      );
    }
  }, {
    key: "renderMap",
    value: function renderMap(templateProps) {
      return _react2.default.createElement(_MapField2.default, _extends({}, templateProps, { onChange: this.props.onChange }));
    }

    // If object is calling directly from discriminator
    // we need to render properties
    // otherwise we need to render whole object including properties


    // If object is calling directly from discriminator
    // we need to set isEven as of root level


    // If object is calling directly from discriminator
    // we need to set depth as of root level

  }, {
    key: "renderObject",
    value: function renderObject(templateProps) {
      var _this2 = this;

      var _props$registry2 = this.props.registry,
          registry = _props$registry2 === undefined ? (0, _utils.getDefaultRegistry)() : _props$registry2;
      var dxInterface = registry.dxInterface;
      var name = templateProps.name,
          SchemaField = templateProps.SchemaField,
          typeCombinatorTypes = templateProps.typeCombinatorTypes,
          discriminatorObj = templateProps.discriminatorObj,
          schema = templateProps.schema;

      var orderedProperties = void 0;

      try {
        var properties = Object.keys(templateProps.schema.properties);
        orderedProperties = (0, _utils.orderProperties)(properties, templateProps.uiSchema["ui:order"]);
      } catch (err) {
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "p",
            { className: (0, _utils.prefixClass)("config-error"), style: { color: "red" } },
            "Invalid ",
            name || "root",
            " object field configuration:",
            _react2.default.createElement(
              "em",
              null,
              err.message
            ),
            "."
          ),
          _react2.default.createElement(
            "pre",
            null,
            JSON.stringify(templateProps.schema)
          )
        );
      }

      var Template = this.getTemplate();

      var renderCallOutFallback = dxInterface.renderCallOutFallback;


      var newProps = _extends({}, templateProps, {
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
          content: renderCallOutFallback({
            info: "info",
            message: READONLY_INFO_MESSAGE
          })
        }] : orderedProperties.map(function (name) {
          if (schema.discriminator && name === schema.discriminator && schema.discriminatorValue) {
            discriminatorObj.name = name;
            discriminatorObj.value = schema.discriminatorValue;
          }

          return {
            content: _react2.default.createElement(SchemaField, {
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
              idSchema: templateProps.idSchema[name],
              formData: templateProps.formData[name],
              onChange: _this2.onPropertyChange(name),
              onBlur: templateProps.onBlur,
              onFocus: templateProps.onFocus,
              registry: templateProps.registry,
              disabled: templateProps.disabled || _this2.shouldDisable(),
              readonly: templateProps.readonly,
              disableFormJsonEdit: templateProps.disableFormJsonEdit,
              typeCombinatorTypes: typeCombinatorTypes,
              discriminatorObj: discriminatorObj
              // flag for direct circular reference in the objects
              , directCircularRef: templateProps.schema.dataTypeLink === templateProps.schema.properties[name].dataTypeLink
            }),
            name: name,
            readonly: templateProps.readonly,
            disabled: templateProps.disabled || _this2.shouldDisable(),
            required: templateProps.required
          };
        })
      });

      return _react2.default.createElement(Template, newProps);
    }
  }]);

  return ObjectField;
}(_react.Component);

ObjectField.defaultProps = {
  uiSchema: {},
  formData: {},
  errorSchema: {},
  idSchema: {},
  required: false,
  disabled: false,
  readonly: false
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onPropertyChange = function (name) {
    return function (value, options, schemaIndex) {
      var newFormData = {};
      newFormData = _extends({}, _this3.props.formData, _defineProperty({}, name, value));
      _this3.props.onChange(newFormData, options, schemaIndex);
    };
  };

  this.onNullifyChange = function () {
    _this3.setState({
      formJsonError: false,
      showEditView: false
    });

    if (_this3.shouldDisable()) {
      if (_this3.state.originalFormData) {
        _this3.props.onChange(_this3.state.originalFormData);
      } else if (!_this3.props.schema.properties) {
        _this3.props.onChange({ key: "value" });
      } else {
        _this3.props.onChange((0, _utils.getDefaultFormState)(_this3.props.schema, _this3.props.formData, undefined, _this3.props.registry.dxInterface));
      }
    } else {
      _this3.props.onChange(undefined);
    }
  };

  this.shouldDisable = function () {
    return (_this3.props.formData === undefined || Object.keys(_this3.props.formData).length === 0) && !_this3.props.required && !_this3.props.fromDiscriminator;
  };

  this.onJsonChange = function (editor, metadata, code) {
    var err = false;
    var parsed = null;
    try {
      parsed = JSON.parse(code);
    } catch (e) {
      err = true;
    }
    _this3.setState(function (prevState, props) {
      !err && props.onChange(parsed);
      return {
        formJson: code,
        formJsonError: err
      };
    });
  };

  this.getTemplate = function () {
    var _props2 = _this3.props,
        registry = _props2.registry,
        fromDiscriminator = _props2.fromDiscriminator;

    return registry.ObjectFieldTemplate || fromDiscriminator ? DefaultOnlyProperties : DefaultObjectFieldTemplate;
  };

  this.getIsEven = function () {
    var fromDiscriminator = _this3.props.fromDiscriminator;

    return fromDiscriminator ? _this3.state.isEven : !_this3.state.isEven;
  };

  this.getDepth = function () {
    var fromDiscriminator = _this3.props.fromDiscriminator;

    return fromDiscriminator ? _this3.state.depth : _this3.state.depth + 1;
  };
};

function checkAllReadOnly(schema) {
  var properties = schema.properties;

  return Object.values(properties).every(function (item) {
    return item.readOnly;
  });
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  ObjectField.propTypes = {
    schema: _propTypes2.default.object.isRequired,
    uiSchema: _propTypes2.default.object,
    errorSchema: _propTypes2.default.object,
    idSchema: _propTypes2.default.object,
    onChange: _propTypes2.default.func.isRequired,
    formData: _propTypes2.default.object,
    required: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
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

exports.default = ObjectField;