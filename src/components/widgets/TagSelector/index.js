import propTypes from "prop-types";
import React from "react";
import Select from "react-select";

import { prefixClass } from "../../../utils";
import { ContextConsumer } from "../../context";
import { TagLinkSvg } from "../../Icons";

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

    const selectValue = options && options[value.index];

    const selectedLabel = selectValue && selectValue.label;

    const selectLinkTo = selectValue && selectValue.value.linkTo;

    return (
      <div className={`tag-selector ${className}`}>
        <span className="__title --tag">{title}</span>
        <div className="__tags-wrapper --variant-tag">
          {options.map((option, index) => {
            const { value } = option;
            const linkTo = value.linkTo;
            return (
              <div className="tag-wrapper-item">
                <span
                  key={`option-item-${index}-${option.label}`}
                  className={`--tag tag-label ${
                    value.index === index ? "--active" : ""
                  }`}
                  onClick={onClick(option)}
                >
                  {option.label}
                </span>
                {linkTo && value.index === index && (
                  <ContextConsumer>
                    {({ onRouteChange }) => (
                      <span
                        key={`option-item-${index}-${option.label}`}
                        className={`--tag tag-link ${
                          value.index === index ? "--active" : ""
                        }`}
                        onClick={() => {
                          console.log(linkTo);
                          onRouteChange(linkTo);
                        }}
                      >
                        <TagLinkSvg width="10" color="#fff" />
                      </span>
                    )}
                  </ContextConsumer>
                )}
              </div>
            );
          })}
        </div>
        <div className="__tags-wrapper --variant-select">
          <Select
            className={`${prefixClass("form-control")}`}
            classNamePrefix="react-select"
            value={selectValue}
            options={options}
            onChange={({ value }) => onChange(value)}
          />
          <span className="tags-variant-select-link">
            <TagLinkSvg width="10" color="#0062ff" />
            <ContextConsumer>
              {({ onRouteChange }) => (
                <a onClick={() => onRouteChange(selectLinkTo)}>
                  {selectedLabel}
                </a>
              )}
            </ContextConsumer>
          </span>
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
