export function getOneAnyOfPath(path = "", obj) {
  const result = path
    ? `${path}/${obj.$$__case_of}/${obj.$$__case}`
    : `${obj.$$__case_of}/${obj.$$__case}`;

  return result;
}

const ARR_ITEM_REGEX = /\[\d+\]/;

function traverseDeep(
  callback,
  obj,
  property = "",
  parentProperty = "",
  parent
) {
  callback(obj, property, parentProperty, parent);

  if (typeof obj !== "object" || !obj) {
    return;
  }

  if (Array.isArray(obj)) {
    obj.forEach((subObj, index) => {
      traverseDeep(callback, subObj, `[${index}]`, property, obj);
    });
    return;
  }

  if (typeof obj === "object") {
    Object.entries(obj).forEach(([key, value]) => {
      traverseDeep(callback, value, key, property, obj);
    });
    return;
  }
}

function getPath(property, parentProperty, parentNode, type) {
  if (property.match(ARR_ITEM_REGEX)) {
    return `${parentProperty}/items/${type}`;
  }
  if (property === "value") {
    return `${parentProperty}/${parentNode["$$__case_of"]}/${parentNode["$$__case"]}/${type}`;
  } else {
    return `${property}/${type}`;
  }
}

function validate(errors, formData) {
  let clonedErrors = [...errors];

  // Traversing formData property by property
  traverseDeep((node, property, parentProperty, parentNode) => {
    if (node && node.$$__case !== undefined) {
      // Getting case number
      const index = node["$$__case"];
      // Getting case type e.g oneOf or anyOf
      const type = node["$$__case_of"] || "oneOf";
      // Getting current property from pointer/path

      // If there is case number, it means that it is either oneOf or anyOf

      // Group the related errors of current property and case type
      // let suppose we have 'to' is the current property and type of 'to' is 'oneOf' then we
      // will group errors by checking 'to/oneOf' substring in errors schemaPath
      const relatedErrors = [];

      // Base path is the substring which is being used to group errors as relatedErrors
      // There is two cases, if current property is value then we can assume that it is direct
      // nested case of oneOf and anyOf. In this case we use parent property to make path.
      const basePath = getPath(property, parentProperty, parentNode, type);

      // Making two error groups
      // 1) Related errors w.r.t current property and case type
      // 2) Unrelated errors other then current property
      clonedErrors = clonedErrors.filter(error => {
        if (
          error.schemaPath.indexOf(basePath) &&
          property.match(ARR_ITEM_REGEX) &&
          error.dataPath.indexOf(parentProperty + property) === -1
        ) {
          return true;
        }
        if (error.schemaPath.indexOf(basePath) === -1) {
          return true;
        } else {
          relatedErrors.push(error);
          return false;
        }
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
  }, formData);

  return clonedErrors;
}

export function validateSchema(schema, formData, originalFormData, ajv) {
  ajv.validate(schema, formData);
  if (originalFormData && ajv.errors) {
    ajv.errors = validate(ajv.errors, originalFormData);
  }
}
