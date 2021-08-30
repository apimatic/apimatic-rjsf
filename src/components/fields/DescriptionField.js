import React from "react";
import PropTypes from "prop-types";
import { prefixClass as pfx } from "../../utils";
import ReactMarkdown from "react-markdown";

function DescriptionField(props) {
  const { id, description } = props;
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }

  const renderers = {};
  if (window.renderCodeBlock) {
    renderers.code = window.renderCodeBlock;
  }

  return (
    <div id={id} className={pfx("field-description")}>
      // TODO: children should be in child level
      <ReactMarkdown
        children={description.replace(/<br>/gi, "\n")}
        renderers={{ ...renderers }}
      />
    </div>
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };
}

export default DescriptionField;
