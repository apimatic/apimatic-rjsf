import React from "react";
import PropTypes from "prop-types";
import { prefixClass as pfx } from "../../utils";
function DataType(props) {
  const { title, link, type } = props;

  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  return (
    <div className={pfx("type-container")}>
      <div
        className={pfx(
          type !== "schema" ? type : link ? "object-type" : "base-type"
        )}
      >
        {link ? <a href={link}>{title}</a> : title}
      </div>
    </div>
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
