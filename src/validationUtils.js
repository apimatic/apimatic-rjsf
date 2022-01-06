import traverse from "json-schema-traverse";
import lodashGet from "lodash.get";
import lodashSet from "lodash.setwith";
import lodashCloneDeep from "lodash.clonedeep";

const TYPE_ENUM = {
  ARRAY: 0,
  OBJECT: 1,
  OTHER: 2
};

/**
 *
 * @param pointer get path of the node with forward slashes
 * @param includesProperties additional "properties" from json-schema
 * @returns convert pointer path to lodash object path
 */
function pointerToPath(pointer, includesProperties = false) {
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
function getType(parentNode) {
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
function getPath(type, parentJsonPointer, jsonPointer) {
  switch (type) {
    case TYPE_ENUM.ARRAY:
      return pointerToPath(parentJsonPointer);
    case TYPE_ENUM.OBJECT:
      return pointerToPath(parentJsonPointer);
    default:
      return pointerToPath(jsonPointer);
  }
}

function getPathFromParentToChild(type, property) {
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
function deleteOneOfAnyOfProperties(type, node, parentSchema, property) {
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
          delete parentSchema["properties"][property].oneOf;
          delete node.oneOf;
        }
      }
      return;
  }
}

function getOneAnyOfPath(path = "", obj) {
  const result = path
    ? `${path}/${obj.$$__case_of}/${obj.$$__case}`
    : `${obj.$$__case_of}/${obj.$$__case}`;

  return result;
}

function getNestedValue(data, path = getOneAnyOfPath("", data)) {
  if (data && Array.isArray(data.value)) {
    if (data.value.some(item => item && item.value)) {
      return data.value.map(val => {
        return getNestedValue(val, getOneAnyOfPath(path + "/items", val));
      });
    } else {
      return path;
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

function getSelectedFormDataFieldPath(formDataFieldValue) {
  let fieldPath = "";
  let isArr = false;
  let arrVal;

  traverse(formDataFieldValue, {
    allKeys: true,
    cb(n) {
      const index = n["$$__case"];
      const val = n["value"];
      const type = n["$$__case_of"] || "oneOf";

      if (Array.isArray(val)) {
        isArr = true;
        arrVal = n;
      }

      if (index !== undefined && !isArr) {
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

  for (let i = 0; i < formDataFieldValue.length; i++) {
    const { fieldPath } = getSelectedFormDataFieldPath(formDataFieldValue[i]);
    const fullPath = pointerToPath(jsonPointer + fieldPath, true);
    const childNode = lodashGet(rootSchema, fullPath);

    items.push(childNode);
  }

  const pathFromParentToChild = getPathFromParentToChild(type, property);

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
  formDataFieldValue
}) {
  const { fieldPath, fieldValue } = getSelectedFormDataFieldPath(
    formDataFieldValue
  );
  const pathFromParentToChild = getPathFromParentToChild(type, property);
  const fullPath = pointerToPath(jsonPointer + fieldPath, true);

  if (fieldValue) {
    const recursiveArray = arr => {
      if (Array.isArray(arr)) {
        return arr.map(arrItem => recursiveArray(arrItem));
      } else if (typeof arr === "string") {
        const itemPath = [...fullPath, ...arr.split("/")];
        const leafNode = lodashGet(rootSchema, itemPath);

        return leafNode;
      }
    };

    lodashSet(parentSchema, pathFromParentToChild, {
      ...node,
      type: "array",
      items: recursiveArray(fieldValue)
    });

    deleteOneOfAnyOfProperties(type, node, parentSchema, property);
  } else {
    const childNode = lodashGet(rootSchema, fullPath);

    lodashSet(parentSchema, pathFromParentToChild, {
      ...node,
      ...childNode
    });
    deleteOneOfAnyOfProperties(type, node, parentSchema, property);
  }
}

export const cb = rawFormData => (...args) => {
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
    const formDataFieldValue = lodashGet(rawFormData, formDataFieldPath);

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
        formDataFieldValue
      });
    }
  }
};

export function validateSchema(schema, formData, originalFormData, ajv) {
  const clonedSchema = lodashCloneDeep(schema);

  traverse(clonedSchema, {
    allKeys: true,
    cb: cb(originalFormData)
  });

  ajv.validate(clonedSchema, formData);
}
