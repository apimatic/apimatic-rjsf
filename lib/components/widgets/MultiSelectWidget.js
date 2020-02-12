"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MultiSelect(props) {
  var autoFocus = props.autoFocus,
      className = props.className,
      classNamePrefix = props.classNamePrefix,
      isDisabled = props.isDisabled,
      isMulti = props.isMulti,
      isSearchable = props.isSearchable,
      name = props.name,
      onChange = props.onChange,
      options = props.options,
      placeholder = props.placeholder,
      noOptionsMessage = props.noOptionsMessage,
      value = props.value;

  return _react2.default.createElement(_reactSelect2.default, { autoFocus: autoFocus,
    className: className,
    classNamePrefix: classNamePrefix,
    isDisabled: isDisabled,
    isMulti: isMulti,
    isSearchable: isSearchable,
    name: name,
    onChange: onChange,
    options: options,
    placeholder: placeholder,
    noOptionsMessage: noOptionsMessage,
    value: value });
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  MultiSelect.propTypes = {
    defaultValue: _propTypes2.default.object | _propTypes2.default.array,
    autoFocus: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    isDisabled: _propTypes2.default.bool,
    isMulti: _propTypes2.default.bool,
    isSearchable: _propTypes2.default.bool,
    name: _propTypes2.default.string,
    options: _propTypes2.default.array.isRequired,
    placeholder: _propTypes2.default.node,
    value: _propTypes2.default.any,
    onChange: _propTypes2.default.func,
    noOptionsMessage: _propTypes2.default.func,
    onBlur: _propTypes2.default.func
  };
}

exports.default = MultiSelect;