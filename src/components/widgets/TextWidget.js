import React from "react";
import PropTypes from "prop-types";

function TextWidget(props) {
  const { BaseInput } = props.registry.widgets;
  return <BaseInput {...props} />;
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  TextWidget.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
}

export default TextWidget;
