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
        } else {
          delete parentSchema["properties"][property].oneOf;
          delete node.oneOf;
        }
      }
      return;
  }
}

function getSelectedFormDataFieldPath(formDataFieldValue) {
  let fieldPath = "";

  traverse(formDataFieldValue, {
    allKeys: true,
    cb(n) {
      const val = n["$$__case"];
      const type = n["$$__case_of"] || "oneOf";
      if (val !== undefined) {
        fieldPath += `/${type}`;
        fieldPath += `/${val}`;
      }
    }
  });

  return fieldPath;
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
    const fieldPath = getSelectedFormDataFieldPath(formDataFieldValue[i]);
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
    const fieldPath = getSelectedFormDataFieldPath(value);
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
  const fieldPath = getSelectedFormDataFieldPath(formDataFieldValue);
  const fullPath = pointerToPath(jsonPointer + fieldPath, true);
  const childNode = lodashGet(rootSchema, fullPath);
  const pathFromParentToChild = getPathFromParentToChild(type, property);

  lodashSet(parentSchema, pathFromParentToChild, {
    ...node,
    ...childNode
  });

  deleteOneOfAnyOfProperties(type, node, parentSchema, property);
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
