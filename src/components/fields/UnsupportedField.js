import React from "react";
import PropTypes from "prop-types";
import { prefixClass as pfx } from "../../utils";

function UnsupportedField({ schema, reason }) {
  return (
    <div className={pfx("unsupported-field")}>
      <p>
        Unsupported field schema
        {reason && <em>: {reason}</em>}.
      </p>
      {schema && <pre>{JSON.stringify(schema, null, 2)}</pre>}
    </div>
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  UnsupportedField.propTypes = {
    schema: PropTypes.object.isRequired,
    reason: PropTypes.string
  };
}

export default UnsupportedField;
