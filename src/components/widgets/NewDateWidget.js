import React from "react";
import PropTypes from "prop-types";
import DateTimeWidget from "./NewDateTimeWidget";

function DateWidget(props) {
  return <DateTimeWidget {...props} disableTime />;
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DateWidget.propTypes = {
    value: PropTypes.string,
  };
}

export default DateWidget;
