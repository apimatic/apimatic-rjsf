import React from "react";

const areEqualObjs = (obj1, obj2) => {
  if (obj1 && obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  return false;
};

class TagSelector extends React.Component {
  render() {
    const { title, options, onChange, value = options[0] } = this.props;

    const onClick = option => {
      return () => {
        onChange && onChange(option.value);
      };
    };

    return (
      <div className="tag-selector">
        <span className="__title --tag">{title}</span>
        <div className="__tags-wrapper">
          {options.map(option => (
            <span
              className={`--tag ${
                areEqualObjs(option.value, value) ? "--active" : ""
              }`}
              onClick={onClick(option)}
            >
              {option.label}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default TagSelector;
