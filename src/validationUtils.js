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
    !schema.hasOwnProperty("oneOf")
  );
}

export function validateField(schema, formData, required, disabled) {
  let errors = [];

  if (required && formData === undefined && !disabled) {
    errors = ["is a required property"];
  } else if (isPrimitiveSchema(schema) && !disabled) {
    const clonedSchema = deepClone(schema);
    delete clonedSchema.id;

    const ajv = AJV.getInstance();
    ajv.validate(clonedSchema, formData);

    errors = ajv.errors
      ? [...ajv.errors.map(err => err.message), ...errors]
      : errors;
  }

  return errors;
}
