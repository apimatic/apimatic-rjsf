import React, { useState } from "react";

const areEqualObjs = (obj1, obj2) => {
  if (obj1 && obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  return false;
};

const TagSelector = props => {
  const { title, options, onChange } = props;
  const [selectedItem, setSelectedItem] = useState(options[0]);

  const onClick = option => {
    return () => {
      setSelectedItem(option);
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
              areEqualObjs(option, selectedItem) ? "--active" : ""
            }`}
            onClick={onClick(option)}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagSelector;
