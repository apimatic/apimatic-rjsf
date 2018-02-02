"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MapField = require("./MapField");

var _MapField2 = _interopRequireDefault(_MapField);

var _reactCodemirror = require("react-codemirror2");

var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

require("codemirror/mode/javascript/javascript");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import "codemirror/lib/codemirror.css";

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

function DefaultObjectFieldTemplate(props) {
  var TitleField = props.TitleField,
      DescriptionField = props.DescriptionField,
      nullify = props.nullify,
      onNullifyChange = props.onNullifyChange,
      disabled = props.disabled;

  return _react2.default.createElement(
    "fieldset",
    null,
    (props.uiSchema["ui:title"] || props.title) && _react2.default.createElement(TitleField, {
      id: props.idSchema.$id + "__title",
      title: props.title || props.uiSchema["ui:title"],
      required: props.required,
      formContext: props.formContext,
      nullify: nullify,
      onNullifyChange: onNullifyChange,
      disabled: disabled
    }),
    props.description && _react2.default.createElement(DescriptionField, {
      id: props.idSchema.$id + "__description",
      description: props.description,
      formContext: props.formContext
    }),
    props.properties.map(function (prop) {
      return prop.content;
    })
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
    return _this;
  }

  _createClass(ObjectField, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.getStateFromProps(nextProps));
    }
  }, {
    key: "getStateFromProps",
    value: function getStateFromProps(nextProps) {
      return {
        originalFormData: nextProps.formData === undefined || Object.keys(nextProps.formData).length === 0 ? this.state ? this.state.originalFormData : undefined : nextProps.formData,
        formJson: this.state && (0, _utils.deepEquals)(nextProps.formData, JSON.parse(this.state.formJson)) ? this.state.formJson : JSON.stringify(nextProps.formData, null, 2)
      };
    }
  }, {
    key: "isRequired",
    value: function isRequired(name) {
      var schema = this.props.schema;
      return Array.isArray(schema.required) && schema.required.indexOf(name) !== -1;
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
          registry = _props$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props$registry;
      var definitions = registry.definitions,
          fields = registry.fields,
          formContext = registry.formContext;
      var SchemaField = fields.SchemaField,
          TitleField = fields.TitleField,
          DescriptionField = fields.DescriptionField;

      var schema = (0, _utils.retrieveSchema)(this.props.schema, definitions, formData);
      var title = schema.title === undefined ? name : name === undefined ? schema.title : name + " (" + schema.title + ")";
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
        registry: registry
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
    key: "renderDynamic",
    value: function renderDynamic(templateProps) {
      var TitleField = templateProps.TitleField,
          DescriptionField = templateProps.DescriptionField;


      return _react2.default.createElement(
        "fieldset",
        null,
        (templateProps.uiSchema["ui:title"] || templateProps.title) && _react2.default.createElement(TitleField, {
          id: templateProps.idSchema.$id + "__title",
          title: templateProps.title || templateProps.uiSchema["ui:title"],
          required: templateProps.required,
          formContext: templateProps.formContext,
          nullify: templateProps.nullify,
          onNullifyChange: this.onNullifyChange,
          disabled: templateProps.disabled
        }),
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
            { className: "error-detail bs-callout bs-callout-info" },
            _react2.default.createElement(
              "li",
              { className: "text-danger" },
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
  }, {
    key: "renderObject",
    value: function renderObject(templateProps) {
      var _this2 = this;

      var name = templateProps.name,
          SchemaField = templateProps.SchemaField;

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
            { className: "config-error", style: { color: "red" } },
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

      var Template = templateProps.registry.ObjectFieldTemplate || DefaultObjectFieldTemplate;

      var newProps = _extends({}, templateProps, {
        properties: orderedProperties.map(function (name) {
          return {
            content: _react2.default.createElement(SchemaField, {
              key: name,
              name: name,
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
              readonly: templateProps.readonly
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

/* istanbul ignore else */


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
    return function (value, options) {
      var newFormData = _extends({}, _this3.props.formData, _defineProperty({}, name, value));
      _this3.props.onChange(newFormData, options);
    };
  };

  this.onNullifyChange = function () {
    if (_this3.shouldDisable()) {
      if (_this3.state.originalFormData) {
        _this3.props.onChange(_this3.state.originalFormData);
      } else if (!_this3.props.schema.properties) {
        _this3.props.onChange({ key: "value" });
      } else {
        _this3.props.onChange((0, _utils.getDefaultFormState)(_this3.props.schema, _this3.props.formData, _this3.props.definitions));
      }
    } else {
      _this3.props.onChange(undefined);
    }
  };

  this.shouldDisable = function () {
    return (_this3.props.formData === undefined || Object.keys(_this3.props.formData).length === 0) && !_this3.props.required;
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
};

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
    registry: _propTypes2.default.shape({
      widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
      fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
      definitions: _propTypes2.default.object.isRequired,
      formContext: _propTypes2.default.object.isRequired
    })
  };
}

exports.default = ObjectField;