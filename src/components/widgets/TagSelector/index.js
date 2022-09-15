import propTypes from "prop-types";
import React from "react";
import Select from "react-select";

import { prefixClass } from "../../../utils";

class TagSelector extends React.Component {
  render() {
    const {
      title,
      options,
      onChange,
      value = options[0],
      className = ""
    } = this.props;

    const onClick = option => {
      return () => {
        onChange && onChange(option.value);
      };
    };

    return (
      <div className={`tag-selector ${className}`}>
        <span className="__title --tag">{title}</span>
        <div className="__tags-wrapper --variant-tag">
          {options.map((option, index) => (
            <span
              key={`option-item-${index}-${option.label}`}
              className={`--tag ${value.index === index ? "--active" : ""}`}
              onClick={onClick(option)}
            >
              {option.label}
            </span>
          ))}
        </div>
        <div className="__tags-wrapper --variant-select">
          <Select
            className={`${prefixClass("form-control")}`}
            classNamePrefix="react-select"
            value={options[value.index]}
            options={options}
            onChange={({ value }) => onChange(value)}
          />
        </div>
      </div>
    );
  }
}

TagSelector.defaultProps = {
  title: propTypes.string.isRequired,
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.any,
      value: propTypes.any
    })
  ).isRequired,
  onChange: propTypes.func,
  value: propTypes.any
};

export default TagSelector;
