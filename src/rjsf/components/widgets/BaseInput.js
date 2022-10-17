import React, { Component } from "react";
import PropTypes from "prop-types";
import { prefixClass as pfx } from "../../utils";

class BaseInput extends Component {
  state = {
    isSingleLine: true
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  onKeyDown = ({ key }) => {
    const { isSingleLine } = this.state;
    const { value = "", onChange, schema } = this.props;
    const needToConvert =
      key === "Enter" && isSingleLine && schema.type === "string" && value;

    if (needToConvert) {
      this.setState({
        isSingleLine: false
      });

      onChange(`${value}\n`);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { isSingleLine } = this.state;

    if (isSingleLine !== prevState.isSingleLine) {
      this.inputRef.current.focus();
    }
  }

  getValue = value => {
    const { options } = this.props;

    return value === "" ? options.emptyValue : value;
  };

  onChange = ({ target: { value: val } }) => {
    const { onChange: _onChange } = this.props;
    const value = this.getValue(val);

    if (!value) {
      return _onChange(value);
    }

    if (!value.includes("\n")) {
      this.setState({
        isSingleLine: true
      });
    }

    return _onChange(value.trimStart());
  };

  render() {
    // Note: since React 15.2.0 we can't forward unknown element attributes, so we
    // exclude the "options" and "schema" ones here.
    const {
      value,
      readonly,
      disabled,
      autofocus,
      onBlur,
      onFocus,
      options,
      schema,
      formContext,
      registry,
      onChange,
      ...inputProps
    } = this.props;
    const { isSingleLine } = this.state;

    inputProps.type = options.inputType || inputProps.type || "text";

    const InputField = isSingleLine ? "input" : "textarea";

    return (
      <InputField
        ref={this.inputRef}
        className={pfx("form-control")}
        readOnly={readonly}
        disabled={disabled}
        autoFocus={autofocus}
        value={value == null ? "" : value}
        {...inputProps}
        onChange={this.onChange}
        onBlur={onBlur && (event => onBlur(inputProps.id, event.target.value))}
        onFocus={
          onFocus && (event => onFocus(inputProps.id, event.target.value))
        }
        onKeyDownCapture={this.onKeyDown}
      />
    );
  }
}

BaseInput.defaultProps = {
  type: "text",
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
};

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  BaseInput.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
  };
}

export default BaseInput;
