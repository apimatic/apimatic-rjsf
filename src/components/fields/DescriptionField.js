import React from "react";
import PropTypes from "prop-types";
import { prefixClass as pfx } from "../../utils";
import { ContextConsumer } from "../context";

function DescriptionField(props) {
  const READONLY_TEXT =
    "This field is disabled and gets auto-filled based on the selected discriminator value.";

  const { id, isDiscriminatorField, description } = props;

  let DESCRIPTION_TEXT = description;

  // Check if the field is Discriminator Field, then append the discriminator info
  if (isDiscriminatorField) {
    DESCRIPTION_TEXT = `${
      DESCRIPTION_TEXT ? DESCRIPTION_TEXT : ""
    } ${READONLY_TEXT}`;
  }

  if (!DESCRIPTION_TEXT) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }

  return (
    <div id={id} className={pfx("field-description")}>
      <ContextConsumer>
        {({ markdownRenderer }) => markdownRenderer(DESCRIPTION_TEXT)}
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
