import React from "react";
import PropTypes from "prop-types";
import { prefixClass as pfx } from "../../utils";
import { ContextConsumer } from "../context";

function DescriptionField(props) {
  const { id, description } = props;
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }

  return (
    <div id={id} className={pfx("field-description")}>
      <ContextConsumer>
        {({ markdownRenderer }) =>
          markdownRenderer(description.replace(/<br>/gi, "\n"))
        }
      </ContextConsumer>
    </div>
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  };
}

export default DescriptionField;
