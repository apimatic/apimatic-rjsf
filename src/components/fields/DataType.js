import React from "react";
import PropTypes from "prop-types";
import { getListRootItem, prefixClass as pfx } from "../../utils";
import { ContextConsumer } from "../context";

function DataType(props) {
  const { title, link, type, markdown } = props;

  if (!title && !markdown) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }

  if (markdown) {
    const label = getListRootItem(markdown);

    return (
      <ContextConsumer>
        {({ renderTypesPopover }) => renderTypesPopover(markdown, label)}
      </ContextConsumer>
    );
  }

  return (
    <div
      className={pfx(
        type !== "schema" ? type : link ? "object-type" : "base-type"
      )}>
      {link ? (
        <ContextConsumer>
          {({ onRouteChange }) => (
            <a onClick={() => onRouteChange(link)}>{title}</a>
          )}
        </ContextConsumer>
      ) : (
        title
      )}
    </div>
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DataType.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.string,
  };
}

export default DataType;
