import deepClone from "lodash.clonedeep";
import { AJV } from "./AJV";

export function getOneAnyOfPath(path = "", obj) {
  const result = path
    ? `${path}/${obj.$$__case_of}/${obj.$$__case}`
    : `${obj.$$__case_of}/${obj.$$__case}`;

  return result;
}

function isPrimitiveSchema(schema) {
  return (
    schema.type !== "object" &&
    schema.type !== "array" &&
    !schema.hasOwnProperty("oneOf") &&
    !schema.hasOwnProperty("anyOf")
  );
}

export function validateField(schema, formData, required, disabled) {
  let errors = [];
  // We shows validation only on enabled fields
  if (!disabled) {
    // if formData === undefined it means that we are in initial state
    if (formData === undefined) {
      // if optional field we don't need to show errors;
      // otherwise we will show required error on initial state.
      if (!required) {
        return errors;
      } else {
        errors = ["is a required field"];
      }
    } else if (isPrimitiveSchema(schema)) {
      const clonedSchema = deepClone(schema);
      delete clonedSchema.id;

      const ajv = AJV.getInstance();
      ajv.validate(clonedSchema, formData);

      errors = ajv.errors
        ? [...ajv.errors.map(err => err.message), ...errors]
        : errors;
    }
  }

  return errors;
}
