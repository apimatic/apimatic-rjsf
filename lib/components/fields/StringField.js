"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _types = require("../../types");

var types = _interopRequireWildcard(_types);

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // import React from "react";
// import PropTypes from "prop-types";

// import {
//   getWidget,
//   getUiOptions,
//   isSelect,
//   optionsList,
//   getDefaultRegistry
// } from "../../utils";

// function StringField(props) {
//   const {
//     schema,
//     name,
//     uiSchema,
//     idSchema,
//     formData,
//     required,
//     disabled,
//     readonly,
//     autofocus,
//     onChange,
//     onBlur,
//     onFocus,
//     registry = getDefaultRegistry()
//   } = props;
//   const { title, format } = schema;
//   const { widgets, formContext } = registry;
//   const enumOptions = isSelect(schema) && optionsList(schema);
//   const defaultWidget = format || (enumOptions ? "select" : "text");
//   const { widget = defaultWidget, placeholder = "", ...options } = getUiOptions(
//     uiSchema
//   );
//   const Widget = getWidget(schema, widget, widgets);

//   const _onChange = value => {
//     if (value === undefined && required) {
//       return onChange("");
//     }
//     return onChange(value === "" ? options.emptyValue : value);
//   };

//   return (
//     <Widget
//       options={{ ...options, enumOptions }}
//       schema={schema}
//       id={idSchema && idSchema.$id}
//       label={title === undefined ? name : title}
//       value={formData}
//       onChange={_onChange}
//       onBlur={onBlur}
//       onFocus={onFocus}
//       required={required}
//       disabled={disabled}
//       readonly={readonly}
//       formContext={formContext}
//       autofocus={autofocus}
//       registry={registry}
//       placeholder={placeholder}
//     />
//   );
// }

// /* istanbul ignore else */
// if (process.env.NODE_ENV !== "production") {
//   StringField.propTypes = {
//     schema: PropTypes.object.isRequired,
//     uiSchema: PropTypes.object.isRequired,
//     idSchema: PropTypes.object,
//     onChange: PropTypes.func.isRequired,
//     onBlur: PropTypes.func,
//     onFocus: PropTypes.func,
//     formData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     registry: PropTypes.shape({
//       widgets: PropTypes.objectOf(
//         PropTypes.oneOfType([PropTypes.func, PropTypes.object])
//       ).isRequired,
//       fields: PropTypes.objectOf(PropTypes.func).isRequired,
//       definitions: PropTypes.object.isRequired,
//       formContext: PropTypes.object.isRequired
//     }),
//     formContext: PropTypes.object.isRequired,
//     required: PropTypes.bool,
//     disabled: PropTypes.bool,
//     readonly: PropTypes.bool,
//     autofocus: PropTypes.bool
//   };
// }

// StringField.defaultProps = {
//   uiSchema: {},
//   disabled: false,
//   readonly: false,
//   autofocus: false
// };

// export default StringField;

function StringField(props) {
  var schema = props.schema,
      name = props.name,
      uiSchema = props.uiSchema,
      idSchema = props.idSchema,
      formData = props.formData,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      _props$registry = props.registry,
      registry = _props$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props$registry,
      rawErrors = props.rawErrors;
  var title = schema.title,
      format = schema.format;
  var widgets = registry.widgets,
      formContext = registry.formContext;

  var enumOptions = (0, _utils.isSelect)(schema) && (0, _utils.optionsList)(schema);
  var defaultWidget = enumOptions ? "select" : "text";
  if (format && (0, _utils.hasWidget)(schema, format, widgets)) {
    defaultWidget = format;
  }

  var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
      _getUiOptions$widget = _getUiOptions.widget,
      widget = _getUiOptions$widget === undefined ? defaultWidget : _getUiOptions$widget,
      _getUiOptions$placeho = _getUiOptions.placeholder,
      placeholder = _getUiOptions$placeho === undefined ? "" : _getUiOptions$placeho,
      options = _objectWithoutProperties(_getUiOptions, ["widget", "placeholder"]);

  var Widget = (0, _utils.getWidget)(schema, widget, widgets);
  return _react2.default.createElement(Widget, {
    options: _extends({}, options, { enumOptions: enumOptions }),
    schema: schema,
    uiSchema: uiSchema,
    id: idSchema && idSchema.$id,
    label: title === undefined ? name : title,
    value: formData,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    required: required,
    disabled: disabled,
    readonly: readonly,
    formContext: formContext,
    autofocus: autofocus,
    registry: registry,
    placeholder: placeholder,
    rawErrors: rawErrors
  });
}

if (process.env.NODE_ENV !== "production") {
  StringField.propTypes = types.fieldProps;
}

StringField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};

exports.default = StringField;