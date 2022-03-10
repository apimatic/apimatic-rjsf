import traverse from "json-schema-traverse";
import lodashGet from "lodash.get";
import lodashSet from "lodash.setwith";
import lodashCloneDeep from "lodash.clonedeep";

export const TYPE_ENUM = {
  ARRAY: 0,
  OBJECT: 1,
  OTHER: 2
};

function getOneOfParamValue(rawFormData, path) {
  let value = rawFormData;

  for (let i = 0; i < path.length; i++) {
    const currentValue = value[path[i]];
    if (currentValue) {
      value = currentValue;
    } else if (value.$$__case) {
      value = value.value[path[i]];
    }
  }

  return value;
}

function recursiveArray(arr, fullPath, rootSchema) {
  if (Array.isArray(arr)) {
    return arr.map(arrItem => recursiveArray(arrItem, fullPath, rootSchema));
  } else if (typeof arr === "string") {
    const itemPath = [...fullPath, ...arr.split("/")];
    const leafNode = lodashGet(rootSchema, itemPath);

    return leafNode;
  }
}

/**
 *
 * @param pointer get path of the node with forward slashes
 * @param includesProperties additional "properties" from json-schema
 * @returns convert pointer path to lodash object path
 */
export function pointerToPath(pointer, includesProperties = false) {
  const pathArr = pointer.split("/");
  const path = [];

  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i]) {
      if (!includesProperties && pathArr[i] === "properties") {
        continue;
      }
      path.push(pathArr[i]);
    }
  }

  return path;
}

/**
 *
 * @param parentNode
 * @returns type of the node
 */
export function getType(parentNode) {
  if (!parentNode) {
    return TYPE_ENUM.OTHER;
  }

  if (parentNode.type === "array") {
    return TYPE_ENUM.ARRAY;
  }
  if (parentNode.additionalProperties) {
    return TYPE_ENUM.OBJECT;
  }

  return TYPE_ENUM.OTHER;
}

/**
 *
 * @param type node type
 * @param parentJsonPointer parent pointer with forward slashes
 * @param jsonPointer node/current pointer with forward slashes
 * @returns convert pointer path to lodash object path based on node type
 */
export function getPath(type, parentJsonPointer, jsonPointer) {
  switch (type) {
    case TYPE_ENUM.ARRAY:
      return pointerToPath(parentJsonPointer);
    case TYPE_ENUM.OBJECT:
      return pointerToPath(parentJsonPointer);
    default:
      return pointerToPath(jsonPointer);
  }
}

export function getPathFromParentToChild(type, property) {
  switch (type) {
    case TYPE_ENUM.ARRAY:
      return ["items"];
    case TYPE_ENUM.OBJECT:
      return ["properties"];
    default:
      return ["properties", property];
  }
}

/**
 * Delete the additional properties from schema e.g oneOf, anyOf ...
 * @param type
 * @param node
 * @param parentSchema
 * @param property
 * @returns
 */
export function deleteOneOfAnyOfProperties(type, node, parentSchema, property) {
  switch (type) {
    case TYPE_ENUM.ARRAY:
      return;
    case TYPE_ENUM.OBJECT:
      delete parentSchema["additionalProperties"];
      return;
    default:
      {
        if (node.oneOf) {
          delete parentSchema["properties"][property].oneOf;
          delete node.oneOf;
        } else if (node.anyOf) {
          delete parentSchema["properties"][property].anyOf;
          delete node.anyOf;
        }
      }
      return;
  }
}

export function getOneAnyOfPath(path = "", obj) {
  const result = path
    ? `${path}/${obj.$$__case_of}/${obj.$$__case}`
    : `${obj.$$__case_of}/${obj.$$__case}`;

  return result;
}

export function getNestedValue(data, path = getOneAnyOfPath("", data)) {
  if (data && Array.isArray(data.value)) {
    if (data.value.some(item => item && item.$$__case)) {
      return data.value.map(val => {
        return getNestedValue(val, getOneAnyOfPath(path + "/items", val));
      });
    } else {
      return path.includes("undefined") ? undefined : path;
    }
  } else if (
    data &&
    typeof data.value === "object" &&
    data.hasOwnProperty("value")
  ) {
    return getNestedValue(data.value, getOneAnyOfPath(path, data.value));
  } else if (data && data.value === undefined) {
    return path;
  }
}

export function getSelectedFormDataFieldPath(formDataFieldValue) {
  let fieldPath = "";
  let isArr = false;
  let arrVal;
  let breakable;

  traverse(formDataFieldValue, {
    allKeys: true,
    cb(n) {
      const index = n["$$__case"];
      const val = n["value"];
      const type = n["$$__case_of"] || "oneOf";

      if (!index && !val) {
        breakable = true;
      }

      if (Array.isArray(val)) {
        isArr = true;
        arrVal = n;
      }

      if (index !== undefined && !isArr && !breakable) {
        fieldPath += `/${type}`;
        fieldPath += `/${index}`;
      }
    }
  });

  return {
    fieldPath,
    fieldValue: arrVal && getNestedValue(arrVal)
  };
}

function modifyArray({
  type,
  property,
  rootSchema,
  jsonPointer,
  parentSchema,
  formDataFieldValue
}) {
  const items = [];
  const pathFromParentToChild = getPathFromParentToChild(type, property);

  for (let i = 0; i < formDataFieldValue.length; i++) {
    const { fieldPath, fieldValue } = getSelectedFormDataFieldPath(
      formDataFieldValue[i]
    );
    const fullPath = pointerToPath(jsonPointer + fieldPath, true);
    const childNode = lodashGet(rootSchema, fullPath);

    if (fieldValue) {
      items[i] = recursiveArray(fieldValue, fullPath, rootSchema);
    } else {
      items.push(childNode);
    }
  }

  lodashSet(parentSchema, pathFromParentToChild, items);
}

function modifyObject({
  node,
  type,
  property,
  rootSchema,
  jsonPointer,
  parentSchema,
  formDataFieldValue
}) {
  const additionalProperties = {};

  Object.entries(formDataFieldValue).forEach(([key, value]) => {
    const { fieldPath } = getSelectedFormDataFieldPath(value);
    const fullPath = pointerToPath(jsonPointer + fieldPath, true);
    const childNode = lodashGet(rootSchema, fullPath);

    additionalProperties[key] = childNode;
  });
  const pathFromParentToChild = getPathFromParentToChild(type, property);

  lodashSet(parentSchema, pathFromParentToChild, additionalProperties);
  deleteOneOfAnyOfProperties(type, node, parentSchema, property);
}

function modifyOther({
  node,
  type,
  property,
  rootSchema,
  jsonPointer,
  parentSchema,
  formDataFieldValue,
  originalFormData
}) {
  const { fieldPath, fieldValue } = getSelectedFormDataFieldPath(
    formDataFieldValue
  );
  const pathFromParentToChild = getPathFromParentToChild(type, property);
  const fullPath = pointerToPath(jsonPointer + fieldPath, true);

  if (fieldValue) {
    lodashSet(parentSchema, pathFromParentToChild, {
      ...node,
      ...recursiveArray(fieldValue, fullPath, rootSchema)
    });

    deleteOneOfAnyOfProperties(type, node, parentSchema, property);
  } else {
    const childNode = lodashGet(rootSchema, fullPath);
    lodashSet(parentSchema, pathFromParentToChild, {
      ...node,
      ...childNode
    });

    deleteOneOfAnyOfProperties(type, node, parentSchema, property);

    traverse(rootSchema, {}, cb(originalFormData));
  }
}

export const cb = (rawFormData, checkForOneOrAnyOf = () => {}) => (...args) => {
  const [
    node,
    jsonPointer,
    rootSchema,
    parentJsonPointer,
    ,
    parentSchema,
    property
  ] = args;

  if (node.oneOf || node.anyOf) {
    const type = getType(parentSchema);
    const formDataFieldPath = getPath(type, parentJsonPointer, jsonPointer);
    const formDataFieldValue = lodashGet(
      rawFormData,
      formDataFieldPath,
      getOneOfParamValue(rawFormData, formDataFieldPath)
    );

    if (type === TYPE_ENUM.ARRAY) {
      modifyArray({
        type,
        property,
        rootSchema,
        jsonPointer,
        parentSchema,
        formDataFieldValue
      });
    }

    if (type === TYPE_ENUM.OBJECT) {
      modifyObject({
        node,
        type,
        property,
        rootSchema,
        jsonPointer,
        parentSchema,
        formDataFieldValue
      });
    }

    if (type === TYPE_ENUM.OTHER) {
      modifyOther({
        node,
        type,
        property,
        rootSchema,
        jsonPointer,
        parentSchema,
        formDataFieldValue,
        originalFormData: rawFormData
      });
    }

    checkForOneOrAnyOf(true);
  }
};

export function validateSchema(
  schema,
  formData,
  originalFormData,
  ajv,
  validateOneOf,
  setValidateOneOf
) {
  try {
    let isOneOrAnyOf = false;
    const clonedSchema = lodashCloneDeep(schema);
    const checkForOneOrAnyOf = () => {
      isOneOrAnyOf = true;
    };

    if (validateOneOf || validateOneOf === undefined) {
      traverse(clonedSchema, {
        allKeys: true,
        cb: cb(originalFormData, checkForOneOrAnyOf)
      });
    }

    setValidateOneOf(isOneOrAnyOf);
    ajv.validate(clonedSchema, formData);
  } catch (ex) {
    console.log("Exception in validation", ex);
  }
}
