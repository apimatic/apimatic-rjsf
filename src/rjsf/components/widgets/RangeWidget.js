import React from "react";
import PropTypes from "prop-types";

import { rangeSpec, prefixClass as pfx } from "../../utils";

function RangeWidget(props) {
  const {
    schema,
    value,
    dxInterface: {
      registry: {
        widgets: { BaseInput }
      }
    }
  } = props;
  return (
    <div className={pfx("field-range-wrapper")}>
      <BaseInput type="range" {...props} {...rangeSpec(schema)} />
      <span className={pfx("range-view")}>{value}</span>
    </div>
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  RangeWidget.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
}

export default RangeWidget;
