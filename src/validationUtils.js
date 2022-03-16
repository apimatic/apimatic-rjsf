import traverse from "json-schema-traverse";
export function getOneAnyOfPath(path = "", obj) {
  const result = path
    ? `${path}/${obj.$$__case_of}/${obj.$$__case}`
    : `${obj.$$__case_of}/${obj.$$__case}`;

  return result;
}

function validate(errors, formData) {
  let clonedErrors = [...errors];

  // Traversing formData property by property
  traverse(formData, {
    allKeys: true,
    cb(...args) {
      const [node, jsonPointer, , parentJsonPointer, , parentSchema] = args;

      // Getting case number
      const index = node["$$__case"];
      // Getting case type e.g oneOf or anyOf
      const type = node["$$__case_of"] || "oneOf";
      // Getting current property from pointer/path
      const [property] = jsonPointer.split("/").slice(-1);
      // Getting parent property
      const [parentProperty] = (parentJsonPointer || "").split("/").slice(-1);

      // If there is case number, it means that it is either oneOf or anyOf
      if (index !== undefined) {
        // Group the related errors of current property and case type
        // let suppose we have 'to' is the current property and type of 'to' is 'oneOf' then we
        // will group errors by checking 'to/oneOf' substring in errors schemaPath
        const relatedErrors = [];

        // Base path is the substring which is being used to group errors as relatedErrors
        // There is two cases, if current property is value then we can assume that it is direct
        // nested case of oneOf and anyOf. In this case we use parent property to make path.
        const basePath =
          property === "value"
            ? `${parentProperty}/${parentSchema["$$__case_of"]}/${parentSchema["$$__case"]}/${type}`
            : `${property}/${type}`;

        // Making two error groups
        // 1) Related errors w.r.t current property and case type
        // 2) Unrelated errors other then current property
        clonedErrors = clonedErrors.filter(error => {
          if (error.schemaPath.indexOf(basePath) === -1) {
            return true;
          }

          relatedErrors.push(error);
          return false;
        });

        // Further filteration of the relatedErrors based on case selection
        // Case number is added at the end to pick only selected errors
        const selectedErrors = relatedErrors.filter(error => {
          const path = `${basePath}/${index}/`;

          if (error.schemaPath.indexOf(path) !== -1) {
            return true;
          }
        });

        // Merging of unrelated and selectedErrors
        clonedErrors = [...clonedErrors, ...selectedErrors];
      }
    }
  });

  return clonedErrors;
}

export function validateSchema(schema, formData, originalFormData, ajv) {
  const compiled = ajv.compile(schema);
  compiled(formData);

  if (originalFormData && compiled.errors) {
    ajv.errors = validate(compiled.errors, originalFormData);
  }
}
