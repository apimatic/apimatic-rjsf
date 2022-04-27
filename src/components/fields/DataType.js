import React from "react";
import PropTypes from "prop-types";
import { prefixClass as pfx } from "../../utils";
import { ContextConsumer } from "../context";

function DataType(props) {
  const { title, link, type, markdown, markdownTitle } = props;

  if (!title && !markdown) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }

  if (markdown) {
    return (
      <ContextConsumer>
        {({ renderTypesPopover }) =>
          renderTypesPopover(markdown, markdownTitle)
        }
      </ContextConsumer>
    );
  }

  return (
    <ContextConsumer>
      {({ onRouteChange }) => (
        <div
          className={pfx(
            type !== "schema" ? type : link ? "object-type" : "base-type"
          )}
        >
          {link ? <a onClick={() => onRouteChange(link)}>{title}</a> : title}
        </div>
      )}
    </ContextConsumer>
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DataType.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.string
  };
}

export default DataType;
