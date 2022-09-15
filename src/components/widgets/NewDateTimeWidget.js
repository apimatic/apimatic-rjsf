/* istanbul ignore file */
/* ignore until we figure out shallow rendering to test all cases */
import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import moment from "moment";
import { prefixClass as pfx } from "../../utils";

// import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const timePickerProps = {
  placeholderText: "Select a date and time",
  showTimeSelect: true,
  timeFormat: "HH:mm",
  timeIntervals: 15,
  dateFormat: "lll"
};

function fromDateString(jsonDate) {
  if (jsonDate) {
    return moment.utc(jsonDate);
  }
}

function toDateString(dateobj, time) {
  if (dateobj) {
    return time ? dateobj.utc().format() : dateobj.format("YYYY-MM-DD");
  }
}

function DateTimeWidget(props) {
  const {
    value,
    onChange,
    disabled,
    disableTime,
    required,
    readonly,
    autofocus,
    onBlur,
    onFocus
  } = props;
  const time = !disableTime;

  return (
    <DatePicker
      showMonthDropdown
      showYearDropdown
      todayButton="Today"
      className={pfx("form-control field-datepicker")}
      selected={fromDateString(value)}
      onChange={value => onChange(toDateString(value, time))}
      dateFormat="ll"
      isClearable={true}
      utcOffset={0}
      disabled={disabled}
      required={required}
      readOnly={readonly}
      autoFocus={autofocus}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholderText="Select a date"
      disabledKeyboardNavigation
      {...(time ? timePickerProps : {})}
    />
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  DateTimeWidget.propTypes = {
    value: PropTypes.string
  };
}

export default DateTimeWidget;
