"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cb = exports.TYPE_ENUM = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.pointerToPath = pointerToPath;
exports.getType = getType;
exports.getPath = getPath;
exports.getPathFromParentToChild = getPathFromParentToChild;
exports.deleteOneOfAnyOfProperties = deleteOneOfAnyOfProperties;
exports.getOneAnyOfPath = getOneAnyOfPath;
exports.getNestedValue = getNestedValue;
exports.getSelectedFormDataFieldPath = getSelectedFormDataFieldPath;
exports.validateSchema = validateSchema;

var _jsonSchemaTraverse = require("json-schema-traverse");

var _jsonSchemaTraverse2 = _interopRequireDefault(_jsonSchemaTraverse);

var _lodash = require("lodash.get");

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require("lodash.setwith");

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require("lodash.clonedeep");

var _lodash6 = _interopRequireDefault(_lodash5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var TYPE_ENUM = exports.TYPE_ENUM = {
  ARRAY: 0,
  OBJECT: 1,
  OTHER: 2
};

function getOneOfParamValue(rawFormData, path) {
  var value = rawFormData;

  for (var i = 0; i < path.length; i++) {
    var currentValue = value[path[i]];
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
    return arr.map(function (arrItem) {
      return recursiveArray(arrItem, fullPath, rootSchema);
    });
  } else if (typeof arr === "string") {
    var itemPath = [].concat(_toConsumableArray(fullPath), _toConsumableArray(arr.split("/")));
    var leafNode = (0, _lodash2.default)(rootSchema, itemPath);

    return leafNode;
  }
}

/**
 *
 * @param pointer get path of the node with forward slashes
 * @param includesProperties additional "properties" from json-schema
 * @returns convert pointer path to lodash object path
 */
function pointerToPath(pointer) {
  var includesProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var pathArr = pointer.split("/");
  var path = [];

  for (var i = 0; i < pathArr.length; i++) {
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
          delete parentSchema["properties"][property].anyOf;
          delete node.anyOf;
        }
      }
      return;
  }
}

function getOneAnyOfPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var obj = arguments[1];

  var result = path ? path + "/" + obj.$$__case_of + "/" + obj.$$__case : obj.$$__case_of + "/" + obj.$$__case;

  return result;
}

function getNestedValue(data) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getOneAnyOfPath("", data);

  if (data && Array.isArray(data.value)) {
    if (data.value.some(function (item) {
      return item && item.$$__case;
    })) {
      return data.value.map(function (val) {
        return getNestedValue(val, getOneAnyOfPath(path + "/items", val));
      });
    } else {
      return path.includes("undefined") ? undefined : path;
    }
  } else if (data && _typeof(data.value) === "object" && data.hasOwnProperty("value")) {
    return getNestedValue(data.value, getOneAnyOfPath(path, data.value));
  } else if (data && data.value === undefined) {
    return path;
  }
}

function getSelectedFormDataFieldPath(formDataFieldValue) {
  var fieldPath = "";
  var isArr = false;
  var arrVal = void 0;
  var breakable = void 0;

  (0, _jsonSchemaTraverse2.default)(formDataFieldValue, {
    allKeys: true,
    cb: function cb(n) {
      var index = n["$$__case"];
      var val = n["value"];
      var type = n["$$__case_of"] || "oneOf";

      if (!index && !val) {
        breakable = true;
      }

      if (Array.isArray(val)) {
        isArr = true;
        arrVal = n;
      }

      if (index !== undefined && !isArr && !breakable) {
        fieldPath += "/" + type;
        fieldPath += "/" + index;
      }
    }
  });

  return {
    fieldPath: fieldPath,
    fieldValue: arrVal && getNestedValue(arrVal)
  };
}

function modifyArray(_ref) {
  var type = _ref.type,
      property = _ref.property,
      rootSchema = _ref.rootSchema,
      jsonPointer = _ref.jsonPointer,
      parentSchema = _ref.parentSchema,
      formDataFieldValue = _ref.formDataFieldValue;

  var items = [];
  var pathFromParentToChild = getPathFromParentToChild(type, property);

  for (var i = 0; i < formDataFieldValue.length; i++) {
    var _getSelectedFormDataF = getSelectedFormDataFieldPath(formDataFieldValue[i]),
        fieldPath = _getSelectedFormDataF.fieldPath,
        fieldValue = _getSelectedFormDataF.fieldValue;

    var fullPath = pointerToPath(jsonPointer + fieldPath, true);
    var childNode = (0, _lodash2.default)(rootSchema, fullPath);

    if (fieldValue) {
      items[i] = recursiveArray(fieldValue, fullPath, rootSchema);
    } else {
      items.push(childNode);
    }
  }

  (0, _lodash4.default)(parentSchema, pathFromParentToChild, items);
}

function modifyObject(_ref2) {
  var node = _ref2.node,
      type = _ref2.type,
      property = _ref2.property,
      rootSchema = _ref2.rootSchema,
      jsonPointer = _ref2.jsonPointer,
      parentSchema = _ref2.parentSchema,
      formDataFieldValue = _ref2.formDataFieldValue;

  var additionalProperties = {};

  Object.entries(formDataFieldValue).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    var _getSelectedFormDataF2 = getSelectedFormDataFieldPath(value),
        fieldPath = _getSelectedFormDataF2.fieldPath;

    var fullPath = pointerToPath(jsonPointer + fieldPath, true);
    var childNode = (0, _lodash2.default)(rootSchema, fullPath);

    additionalProperties[key] = childNode;
  });
  var pathFromParentToChild = getPathFromParentToChild(type, property);

  (0, _lodash4.default)(parentSchema, pathFromParentToChild, additionalProperties);
  deleteOneOfAnyOfProperties(type, node, parentSchema, property);
}

function modifyOther(_ref5) {
  var node = _ref5.node,
      type = _ref5.type,
      property = _ref5.property,
      rootSchema = _ref5.rootSchema,
      jsonPointer = _ref5.jsonPointer,
      parentSchema = _ref5.parentSchema,
      formDataFieldValue = _ref5.formDataFieldValue,
      originalFormData = _ref5.originalFormData;

  var _getSelectedFormDataF3 = getSelectedFormDataFieldPath(formDataFieldValue),
      fieldPath = _getSelectedFormDataF3.fieldPath,
      fieldValue = _getSelectedFormDataF3.fieldValue;

  var pathFromParentToChild = getPathFromParentToChild(type, property);
  var fullPath = pointerToPath(jsonPointer + fieldPath, true);

  if (fieldValue) {
    (0, _lodash4.default)(parentSchema, pathFromParentToChild, _extends({}, node, recursiveArray(fieldValue, fullPath, rootSchema)));

    deleteOneOfAnyOfProperties(type, node, parentSchema, property);
  } else {
    var childNode = (0, _lodash2.default)(rootSchema, fullPath);
    (0, _lodash4.default)(parentSchema, pathFromParentToChild, _extends({}, node, childNode));

    deleteOneOfAnyOfProperties(type, node, parentSchema, property);

    (0, _jsonSchemaTraverse2.default)(rootSchema, {}, cb(originalFormData));
  }
}

var cb = exports.cb = function cb(rawFormData) {
  var checkForOneOrAnyOf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var node = args[0],
        jsonPointer = args[1],
        rootSchema = args[2],
        parentJsonPointer = args[3],
        parentSchema = args[5],
        property = args[6];


    if (node.oneOf || node.anyOf) {
      var type = getType(parentSchema);
      var formDataFieldPath = getPath(type, parentJsonPointer, jsonPointer);
      var formDataFieldValue = (0, _lodash2.default)(rawFormData, formDataFieldPath, getOneOfParamValue(rawFormData, formDataFieldPath));

      if (type === TYPE_ENUM.ARRAY) {
        modifyArray({
          type: type,
          property: property,
          rootSchema: rootSchema,
          jsonPointer: jsonPointer,
          parentSchema: parentSchema,
          formDataFieldValue: formDataFieldValue
        });
      }

      if (type === TYPE_ENUM.OBJECT) {
        modifyObject({
          node: node,
          type: type,
          property: property,
          rootSchema: rootSchema,
          jsonPointer: jsonPointer,
          parentSchema: parentSchema,
          formDataFieldValue: formDataFieldValue
        });
      }

      if (type === TYPE_ENUM.OTHER) {
        modifyOther({
          node: node,
          type: type,
          property: property,
          rootSchema: rootSchema,
          jsonPointer: jsonPointer,
          parentSchema: parentSchema,
          formDataFieldValue: formDataFieldValue,
          originalFormData: rawFormData
        });
      }

      checkForOneOrAnyOf(true);
    }
  };
};

function validateSchema(schema, formData, originalFormData, ajv, validateOneOf, setValidateOneOf) {
  try {
    var isOneOrAnyOf = false;
    var clonedSchema = (0, _lodash6.default)(schema);
    var checkForOneOrAnyOf = function checkForOneOrAnyOf() {
      isOneOrAnyOf = true;
    };

    if (validateOneOf || validateOneOf === undefined) {
      (0, _jsonSchemaTraverse2.default)(clonedSchema, {
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