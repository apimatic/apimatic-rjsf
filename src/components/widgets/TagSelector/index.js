import propTypes from "prop-types";
import React from "react";
import Select from "react-select";

import { prefixClass, classNames } from "../../../utils";
import { ContextConsumer } from "../../context";
import { TagLinkSvg } from "../../Icons";

const VIEW_MODEL = "View Model";

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

    // const selectedLabel = selectValue && selectValue.label;

    const selectLinkTo = selectValue && selectValue.value.linkTo;

    return (
      <div className={`tag-selector ${className}`}>
        <span className="__title --tag">{title}</span>
        <div className="__tags-wrapper --variant-tag">
          {options.map((option, index) => {
            const linkTo = option.value.linkTo;

            const classTagLabel = classNames({
              "--tag": true,
              " tag-label": true,
              "--active": value.index === index
            });

            const classTagLink = classNames({
              "--tag": true,
              "tag-link": true,
              "--active": value.index === index,
              "tag-selector-button-link": true
            });

            return (
              <div className="tag-wrapper-item">
                <span
                  key={`option-item-${index}-${option.label}`}
                  className={classTagLabel}
                  onClick={onClick(option)}
                >
                  {option.label}
                </span>
                {linkTo && value.index === index && (
                  <ContextConsumer>
                    {({ onRouteChange }) => (
                      <span
                        key={`option-item-${index}-${option.label}`}
                        className={classTagLink}
                        onClick={() => {
                          onRouteChange(linkTo);
                        }}
                      >
                        <TagLinkSvg width="10" />
                      </span>
                    )}
                  </ContextConsumer>
                )}
              </div>
            );
          })}
        </div>
        <div className="__tags-wrapper --variant-select">
          <div>
            <Select
              className={`${prefixClass("form-control")}`}
              classNamePrefix="react-select"
              value={selectValue}
              options={options}
              onChange={({ value }) => onChange(value)}
            />
          </div>
          <div>
            <span className="tags-variant-select-link">
              <TagLinkSvg width="10" />
              <ContextConsumer>
                {({ onRouteChange }) => (
                  <a onClick={() => onRouteChange(selectLinkTo)}>
                    {VIEW_MODEL}
                  </a>
                )}
              </ContextConsumer>
            </span>
          </div>
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
