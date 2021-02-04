import React from "react";
import PropTypes from "prop-types";
import { prefixClass as pfx } from "../../utils";

function DescriptionField(props) {
  const { id, description } = props;
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  if (typeof description === "string") {
    return (
      <p id={id} className={pfx("field-description")}>
        {description.replace(/<br>/gi, "\n")}
      </p>
    );
  } else {
    return (
      <div id={id} className={pfx("field-description")}>
        {description}
      </div>
    );
  }
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };
}

export default DescriptionField;
