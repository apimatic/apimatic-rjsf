import React, { Component } from "react";
import PropTypes from "prop-types";
import { classNames, prefixClass as pfx } from "../../utils";
import { EyeOffSvg, EyeOpenSvg } from "../Icons";

class BaseInput extends Component {
  state = {
    isSingleLine: true,
    isHidden: true
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

  setPasswordVisibility = () => {
    this.setState(st => ({
      ...st,
      isHidden: !st.isHidden
    }));
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
    const { isSingleLine, isHidden } = this.state;

    const { isFormatPassword } = schema;

    inputProps.type = options.inputType || inputProps.type || "text";

    inputProps.type =
      isFormatPassword && isHidden ? "password" : inputProps.type;

    const InputField = isSingleLine || isFormatPassword ? "input" : "textarea";

    const isPassword = inputProps.type === "password";

    return (
      <React.Fragment>
        <InputField
          ref={this.inputRef}
          className={pfx(
            classNames({
              "form-control": true,
              "form-control-password": isFormatPassword
            })
          )}
          readOnly={readonly}
          disabled={disabled}
          autoFocus={autofocus}
          value={value == null ? "" : value}
          {...inputProps}
          onChange={this.onChange}
          onBlur={
            onBlur && (event => onBlur(inputProps.id, event.target.value))
          }
          onFocus={
            onFocus && (event => onFocus(inputProps.id, event.target.value))
          }
          onKeyDownCapture={this.onKeyDown}
        />
        {(isPassword || !isHidden) && (
          <div
            className={pfx("form-control-svg")}
            onClick={this.setPasswordVisibility}
          >
            {isPassword ? <EyeOpenSvg /> : <EyeOffSvg />}
          </div>
        )}
      </React.Fragment>
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
