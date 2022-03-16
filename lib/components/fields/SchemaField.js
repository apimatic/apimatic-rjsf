"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Label = Label;
exports.DefaultTemplate = DefaultTemplate;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DataType = require("./DataType");

var _DataType2 = _interopRequireDefault(_DataType);

var _utils = require("../../utils");

var _UnsupportedField = require("./UnsupportedField");

var _UnsupportedField2 = _interopRequireDefault(_UnsupportedField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

function getFieldComponent(schema, uiSchema, idSchema, fields) {
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

  // console.log(componentName);
  return componentName in fields ? fields[componentName] : function () {
    return _react2.default.createElement(_UnsupportedField2.default, {
      schema: schema,
      idSchema: idSchema,
      reason: "Unknown field type " + schema.type
    });
  };
}

function Label(props) {
  var label = props.label,
      id = props.id;

  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("div", null);
  }
  return _react2.default.createElement(
    "label",
    { className: (0, _utils.prefixClass)("control-label"), htmlFor: id },
    _react2.default.createElement(
      "div",
      { className: "label-text" },
      label
    )
  );
}

function Help(props) {
  var help = props.help;

  if (!help) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("div", null);
  }
  if (typeof help === "string") {
    return _react2.default.createElement(
      "p",
      { className: (0, _utils.prefixClass)("help-block") },
      help
    );
  }
  return _react2.default.createElement(
    "div",
    { className: (0, _utils.prefixClass)("help-block") },
    help
  );
}

function ErrorList(props) {
  var _props$errors = props.errors,
      errors = _props$errors === undefined ? [] : _props$errors;

  if (errors.length === 0) {
    return _react2.default.createElement("div", null);
  }
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement("p", null),
    _react2.default.createElement(
      "ul",
      { className: (0, _utils.prefixClass)("error-detail bs-callout bs-callout-info") },
      errors.map(function (error, index) {
        return _react2.default.createElement(
          "li",
          { className: (0, _utils.prefixClass)("text-danger"), key: index },
          error
        );
      })
    )
  );
}

function DefaultTemplate(props) {
  var id = props.id,
      classNames = props.classNames,
      label = props.label,
      children = props.children,
      errors = props.errors,
      help = props.help,
      description = props.description,
      hidden = props.hidden,
      required = props.required,
      displayLabel = props.displayLabel,
      nullify = props.nullify,
      onNullifyChange = props.onNullifyChange,
      fromDiscriminator = props.fromDiscriminator;

  if (hidden) {
    return children;
  }

  var dataType = props.schema.dataTypeDisplayText ? props.schema.dataTypeDisplayText : props.schema.type;

  return _react2.default.createElement(
    "div",
    { className: (0, _utils.prefixClass)(classNames) },
    displayLabel && _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)("field-header") },
      onNullifyChange && !required ? _react2.default.createElement(
        "legend",
        null,
        _react2.default.createElement(
          "label",
          { onClick: function onClick(ev) {
              return ev.stopPropagation();
            } },
          _react2.default.createElement("input", {
            type: "checkbox",
            checked: nullify,
            className: nullify ? "checked" : "unchecked",
            onChange: onNullifyChange
          }),
          _react2.default.createElement("span", null)
        ),
        _react2.default.createElement(
          "div",
          { className: (0, _utils.prefixClass)("checkbox-text") },
          label
        )
      ) : _react2.default.createElement(Label, { label: label, required: required, id: id }),
      !fromDiscriminator && required && _react2.default.createElement(
        "div",
        { className: (0, _utils.prefixClass)("element-required") },
        _react2.default.createElement(
          "span",
          null,
          "Required"
        )
      )
    ),
    displayLabel && _react2.default.createElement(
      "div",
      { className: (0, _utils.prefixClass)("type-container") },
      _react2.default.createElement(_DataType2.default, {
        title: dataType,
        link: props.schema.dataTypeLink,
        type: "schema"
      }),
      props.schema.paramType && _react2.default.createElement(
        "div",
        { className: (0, _utils.prefixClass)("param-type") },
        props.schema.paramType
      )
    ),
    displayLabel && description ? description : null,
    children,
    (nullify || required) && errors,
    help
  );
}

if (process.env.NODE_ENV !== "production") {
  DefaultTemplate.propTypes = {
    id: _propTypes2.default.string,
    classNames: _propTypes2.default.string,
    label: _propTypes2.default.string,
    children: _propTypes2.default.node.isRequired,
    errors: _propTypes2.default.element,
    rawErrors: _propTypes2.default.arrayOf(_propTypes2.default.string),
    help: _propTypes2.default.element,
    rawHelp: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    description: _propTypes2.default.element,
    rawDescription: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    hidden: _propTypes2.default.bool,
    required: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
    displayLabel: _propTypes2.default.bool,
    fields: _propTypes2.default.object,
    formContext: _propTypes2.default.object
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
      formData = props.formData,
      errorSchema = props.errorSchema,
      idSchema = props.idSchema,
      name = props.name,
      required = props.required,
      schemaIndex = props.schemaIndex,
      _props$registry = props.registry,
      registry = _props$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props$registry,
      anyOfTitle = props.anyOfTitle,
      typeCombinatorTypes = props.typeCombinatorTypes;
  var definitions = registry.definitions,
      fields = registry.fields,
      formContext = registry.formContext,
      _registry$FieldTempla = registry.FieldTemplate,
      FieldTemplate = _registry$FieldTempla === undefined ? DefaultTemplate : _registry$FieldTempla;

  var schema = (0, _utils.retrieveSchema)(props.schema, definitions, formData);
  var FieldComponent = getFieldComponent(schema, uiSchema, idSchema, fields);
  var DescriptionField = fields.DescriptionField;

  var disabled = Boolean(props.disabled || uiSchema["ui:disabled"]);
  var readonly = Boolean(props.readonly || uiSchema["ui:readonly"]);
  var autofocus = Boolean(props.autofocus || uiSchema["ui:autofocus"]);
  var _typeCombinatorTypes = typeCombinatorTypes || schema.typeCombinatorTypes || null;

  if (Object.keys(schema).length === 0) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("div", null);
  }

  var uiOptions = (0, _utils.getUiOptions)(uiSchema);
  var _uiOptions$label = uiOptions.label,
      displayLabel = _uiOptions$label === undefined ? true : _uiOptions$label;

  if (schema.type === "array") {
    displayLabel = (0, _utils.isMultiSelect)(schema, definitions) || (0, _utils.isFilesArray)(schema, uiSchema, definitions);
  }
  if (schema.type === "object") {
    displayLabel = false;
  }
  if (schema.type === "boolean" && !uiSchema["ui:widget"]) {
    displayLabel = false;
  }
  if (uiSchema["ui:field"]) {
    displayLabel = false;
  }

  var __errors = errorSchema.__errors,
      fieldErrorSchema = _objectWithoutProperties(errorSchema, ["__errors"]);

  var type = schema.type;

  var id = idSchema.$id;
  var label = uiSchema["ui:title"] || props.schema.title || schema.title || name;
  var description = uiSchema["ui:description"] || props.schema.description || schema.description;
  var errors = __errors;
  var help = uiSchema["ui:help"];
  var hidden = uiSchema["ui:widget"] === "hidden";
  var classNames = ["form-group", "field", "field-" + type, errors && errors.length > 0 ? "field-error has-error has-danger" : "", schema.oneOf || schema.anyOf ? "discriminator-container" : "", uiSchema.classNames].join(" ").trim();

  var fieldProps = {
    description: _react2.default.createElement(DescriptionField, {
      id: id + "__description",
      description: description,
      formContext: formContext
    }),
    rawDescription: description,
    help: _react2.default.createElement(Help, { help: help }),
    rawHelp: typeof help === "string" ? help : undefined,
    errors: _react2.default.createElement(ErrorList, { errors: errors }),
    rawErrors: errors,
    id: id,
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
    anyOfTitle: anyOfTitle
  };

  // See #439: uiSchema: Don't pass consumed class names to child components
  var field = _react2.default.createElement(FieldComponent, _extends({}, props, {
    schema: schema,
    uiSchema: _extends({}, uiSchema, { classNames: undefined }),
    disabled: disabled,
    readonly: readonly,
    autofocus: autofocus,
    errorSchema: fieldErrorSchema,
    formContext: formContext,
    schemaIndex: schemaIndex,
    typeCombinatorTypes: _typeCombinatorTypes,
    fieldProps: fieldProps
  }));

  return (0, _utils.isOneOfSchema)(schema) ? field : _react2.default.createElement(
    FieldTemplate,
    fieldProps,
    field
  );
}

var SchemaField = function (_React$Component) {
  _inherits(SchemaField, _React$Component);

  function SchemaField() {
    _classCallCheck(this, SchemaField);

    return _possibleConstructorReturn(this, (SchemaField.__proto__ || Object.getPrototypeOf(SchemaField)).apply(this, arguments));
  }

  _createClass(SchemaField, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      // if schemas are equal idSchemas will be equal as well,
      // so it is not necessary to compare
      return !(0, _utils.deepEquals)(_extends({}, this.props, { idSchema: undefined }), _extends({}, nextProps, { idSchema: undefined }));
    }
  }, {
    key: "render",
    value: function render() {
      return SchemaFieldRender(this.props);
    }
  }]);

  return SchemaField;
}(_react2.default.Component);

SchemaField.defaultProps = {
  uiSchema: {},
  errorSchema: {},
  idSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  SchemaField.propTypes = {
    schema: _propTypes2.default.object.isRequired,
    uiSchema: _propTypes2.default.object,
    idSchema: _propTypes2.default.object,
    formData: _propTypes2.default.any,
    errorSchema: _propTypes2.default.object,
    schemaIndex: _propTypes2.default.number,
    registry: _propTypes2.default.shape({
      widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
      fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
      definitions: _propTypes2.default.object.isRequired,
      ArrayFieldTemplate: _propTypes2.default.func,
      ObjectFieldTemplate: _propTypes2.default.func,
      FieldTemplate: _propTypes2.default.func,
      formContext: _propTypes2.default.object.isRequired
    })
  };
}

exports.default = SchemaField;