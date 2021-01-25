"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // import React from "react";
// import PropTypes from "prop-types";
// import { prefixClass as pfx } from "../../utils";

// function BaseInput(props) {
//   // Note: since React 15.2.0 we can't forward unknown element attributes, so we
//   // exclude the "options" and "schema" ones here.
//   const {
//     value,
//     readonly,
//     disabled,
//     autofocus,
//     onBlur,
//     onFocus,
//     options,
//     schema,
//     formContext,
//     registry,
//     ...inputProps
//   } = props;

//   inputProps.type = options.inputType || inputProps.type || "text";
//   const _onChange = ({ target: { value } }) => {
//     return props.onChange(value === "" ? options.emptyValue : value);
//   };
//   return (
//     <input
//       className={pfx("form-control")}
//       readOnly={readonly}
//       disabled={disabled}
//       autoFocus={autofocus}
//       value={value == null ? "" : value}
//       {...inputProps}
//       onChange={_onChange}
//       onBlur={onBlur && (event => onBlur(inputProps.id, event.target.value))}
//       onFocus={onFocus && (event => onFocus(inputProps.id, event.target.value))}
//     />
//   );
// }

// BaseInput.defaultProps = {
//   type: "text",
//   required: false,
//   disabled: false,
//   readonly: false,
//   autofocus: false
// };

// /* istanbul ignore else */
// if (process.env.NODE_ENV !== "production") {
//   BaseInput.propTypes = {
//     id: PropTypes.string.isRequired,
//     placeholder: PropTypes.string,
//     value: PropTypes.any,
//     required: PropTypes.bool,
//     disabled: PropTypes.bool,
//     readonly: PropTypes.bool,
//     autofocus: PropTypes.bool,
//     onChange: PropTypes.func,
//     onBlur: PropTypes.func,
//     onFocus: PropTypes.func
//   };
// }

// export default BaseInput;

function BaseInput(props) {
  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
  // exclude the "options" and "schema" ones here.
  // if (!props.id) {
  //   console.log("No id for", props);
  //   throw new Error(`no id for props ${JSON.stringify(props)}`);
  // }
  var value = props.value,
      readonly = props.readonly,
      disabled = props.disabled,
      autofocus = props.autofocus,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      options = props.options,
      schema = props.schema,
      uiSchema = props.uiSchema,
      formContext = props.formContext,
      registry = props.registry,
      rawErrors = props.rawErrors,
      inputProps = _objectWithoutProperties(props, ["value", "readonly", "disabled", "autofocus", "onBlur", "onFocus", "options", "schema", "uiSchema", "formContext", "registry", "rawErrors"]);

  // If options.inputType is set use that as the input type


  if (options.inputType) {
    inputProps.type = options.inputType;
  } else if (!inputProps.type) {
    // If the schema is of type number or integer, set the input type to number
    if (schema.type === "number") {
      inputProps.type = "number";
      // Setting step to 'any' fixes a bug in Safari where decimals are not
      // allowed in number inputs
      inputProps.step = "any";
    } else if (schema.type === "integer") {
      inputProps.type = "number";
      // Since this is integer, you always want to step up or down in multiples
      // of 1
      inputProps.step = "1";
    } else {
      inputProps.type = "text";
    }
  }

  if (options.autocomplete) {
    inputProps.autoComplete = options.autocomplete;
  }

  // If multipleOf is defined, use this as the step value. This mainly improves
  // the experience for keyboard users (who can use the up/down KB arrows).
  if (schema.multipleOf) {
    inputProps.step = schema.multipleOf;
  }

  if (typeof schema.minimum !== "undefined") {
    inputProps.min = schema.minimum;
  }

  if (typeof schema.maximum !== "undefined") {
    inputProps.max = schema.maximum;
  }

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;

    return props.onChange(value === "" ? options.emptyValue : value);
  };

  return _react2.default.createElement("input", _extends({
    key: inputProps.id,
    className: "form-control",
    readOnly: readonly,
    disabled: disabled,
    autoFocus: autofocus,
    value: value == null ? "" : value
  }, inputProps, {
    list: schema.examples ? "examples_" + inputProps.id : null,
    onChange: _onChange,
    onBlur: onBlur && function (event) {
      return onBlur(inputProps.id, event.target.value);
    },
    onFocus: onFocus && function (event) {
      return onFocus(inputProps.id, event.target.value);
    }
  }));
}

BaseInput.defaultProps = {
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
};

if (process.env.NODE_ENV !== "production") {
  BaseInput.propTypes = {
    id: _propTypes2.default.string.isRequired,
    placeholder: _propTypes2.default.string,
    value: _propTypes2.default.any,
    required: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
    autofocus: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onFocus: _propTypes2.default.func
  };
}

exports.default = BaseInput;