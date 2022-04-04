import traverse from "json-schema-traverse";
import deepClone from "lodash.clonedeep";

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

function getBasePath(property, parentProperty, parentNode, type) {
  if (property.match(ARR_ITEM_REGEX)) {
    return `${parentProperty}/items/${type}`;
  } else if (property === "value") {
    return `${parentProperty}/${parentNode["$$__case_of"]}/${parentNode["$$__case"]}/${type}`;
  } else {
    return `${property}/${type}`;
  }
}

function getSelectionPath({
  error,
  objectPattern,
  parentProperty,
  type,
  index,
  basePath,
  arrOfArrGenericPattern
}) {
  if (error.dataPath.match(objectPattern)) {
    return new RegExp(
      `${
        parentProperty.match(ARR_ITEM_REGEX) ? "items" : parentProperty
      }\\/(properties|additionalProperties)\\/${type}\\/${index}`
    );
  } else if (error.dataPath.match(arrOfArrGenericPattern)) {
    return new RegExp(
      `\\/(properties|additionalProperties)\\/items\\/${type}\\/${index}`
    );
  } else {
    return `${basePath}/${index}/`;
  }
}

function getBracketRegex(arrItem) {
  return arrItem.replace("[", "\\[").replace("]", "\\]");
}

function validate(errors, formData) {
  let clonedErrors = [...errors];

  // Traversing formData property by property
  traverseDeep((node, property, parentProperty, parentNode) => {
    if (node && node.$$__case !== undefined) {
      const parentPropertyRegex = getBracketRegex(parentProperty);
      const propertyRegex = getBracketRegex(property);

      const genericObjPattern = new RegExp(
        `${parentPropertyRegex}\\[\\'.+\\'\\]`
      );
      const objectPattern = new RegExp(
        `${parentPropertyRegex}\\[\\'${property}\\'\\]`
      );
      const mapArrPattern = new RegExp(
        `\\[\\'${parentPropertyRegex}\\'\\]${propertyRegex}`
      );
      const mapArrGenericPattern = new RegExp(
        `\\[\\'${parentPropertyRegex}\\'\\]\\[\\d+\\]`
      );

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
      const basePath = getBasePath(property, parentProperty, parentNode, type);

      // Making two error groups
      // 1) Related errors w.r.t current property and case type
      // 2) Unrelated errors other then current property
      clonedErrors = clonedErrors.filter(error => {
        if (
          error.schemaPath.indexOf(basePath) !== -1 &&
          property.match(ARR_ITEM_REGEX) &&
          error.dataPath.indexOf(parentProperty + property) === -1
        ) {
          return true;
        } else if (
          error.dataPath.match(genericObjPattern) &&
          !error.dataPath.match(objectPattern)
        ) {
          return true;
        } else if (
          error.dataPath.match(mapArrGenericPattern) &&
          !error.dataPath.match(mapArrPattern)
        ) {
          return true;
        } else if (
          !error.dataPath.match(genericObjPattern) &&
          !error.dataPath.match(mapArrGenericPattern) &&
          error.schemaPath.indexOf(basePath) === -1
        ) {
          return true;
        } else {
          relatedErrors.push(error);
          return false;
        }
      });

      // Further filteration of the relatedErrors based on case selection
      // Case number is added at the end to pick only selected errors
      const selectedErrors = relatedErrors.filter(error => {
        const path = getSelectionPath({
          arrOfArrGenericPattern: mapArrGenericPattern,
          basePath,
          error,
          index,
          objectPattern,
          parentProperty,
          type
        });

        if (
          error.schemaPath.indexOf(path) !== -1 ||
          error.schemaPath.match(path)
        ) {
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
  const clonedSchema = deepClone(schema);

  // if item of oneOf doesn't has required properties then manually add
  // addtionalProperties in schema.
  traverse(clonedSchema, {}, node => {
    const { oneOf, anyOf } = node;

    if (oneOf || anyOf) {
      const oneOfArr = oneOf || anyOf;

      oneOfArr.forEach(item => {
        if (item.properties && !item.additionalProperties && !item.required) {
          item.additionalProperties = false;
        }
      });
    }
  });

  ajv.validate(clonedSchema, formData);

  if (originalFormData && ajv.errors) {
    ajv.errors = validate(ajv.errors, originalFormData);
  }
}
