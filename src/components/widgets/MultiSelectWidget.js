import React from  "react";
import PropTypes from "prop-types";
import ReactSelect from 'react-select';

function MultiSelect(props) {
    const { autoFocus, className, classNamePrefix, isDisabled, isMulti, isSearchable, name, onChange, options, placeholder, noOptionsMessage, value } = props;
    return <ReactSelect autoFocus={autoFocus} 
    className={className} 
    classNamePrefix={classNamePrefix} 
    isDisabled={isDisabled} 
    isMulti={isMulti} 
    isSearchable={isSearchable} 
    name={name} 
    onChange={onChange} 
    options={options} 
    placeholder={placeholder} 
    noOptionsMessage={noOptionsMessage} 
    value={value} />;
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  MultiSelect.propTypes = {
      defaultValue: PropTypes.object | PropTypes.array,
      autoFocus: PropTypes.bool,
      className: PropTypes.string,
      isDisabled: PropTypes.bool,
      isMulti: PropTypes.bool,
      isSearchable: PropTypes.bool,
      name: PropTypes.string,
      options: PropTypes.array.isRequired,
      placeholder: PropTypes.node,
      value: PropTypes.any,
      onChange: PropTypes.func,
      noOptionsMessage: PropTypes.func,
      onBlur: PropTypes.func
    };
  }

export default MultiSelect;