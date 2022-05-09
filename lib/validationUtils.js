"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getOneAnyOfPath = getOneAnyOfPath;
exports.validateSchema = validateSchema;

var _jsonSchemaTraverse = require("json-schema-traverse");

var _jsonSchemaTraverse2 = _interopRequireDefault(_jsonSchemaTraverse);

var _lodash = require("lodash.clonedeep");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getOneAnyOfPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var obj = arguments[1];

  var result = path ? path + "/" + obj.$$__case_of + "/" + obj.$$__case : obj.$$__case_of + "/" + obj.$$__case;

  return result;
}

var ARR_ITEM_REGEX = /\[\d+\]/;

function traverseDeep(callback, obj) {
  var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var parentProperty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var parent = arguments[4];

  callback(obj, property, parentProperty, parent);

  if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object" || !obj) {
    return;
  }

  if (Array.isArray(obj)) {
    obj.forEach(function (subObj, index) {
      traverseDeep(callback, subObj, "[" + index + "]", property, obj);
    });
    return;
  }

  if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
    Object.entries(obj).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      traverseDeep(callback, value, key, property, obj);
    });
    return;
  }
}

function getBasePath(property, parentProperty, parentNode, type) {
  if (property.match(ARR_ITEM_REGEX)) {
    return parentProperty + "/items/" + type;
  } else if (property === "value") {
    return parentProperty + "/" + parentNode["$$__case_of"] + "/" + parentNode["$$__case"] + "/" + type;
  } else {
    return property + "/" + type;
  }
}

function getSelectionPath(_ref3) {
  var error = _ref3.error,
      objectPattern = _ref3.objectPattern,
      parentProperty = _ref3.parentProperty,
      type = _ref3.type,
      index = _ref3.index,
      basePath = _ref3.basePath,
      arrOfArrGenericPattern = _ref3.arrOfArrGenericPattern;

  if (error.dataPath.match(objectPattern)) {
    return new RegExp((parentProperty.match(ARR_ITEM_REGEX) ? "items" : parentProperty) + "\\/(properties|additionalProperties)\\/" + type + "\\/" + index);
  } else if (error.dataPath.match(arrOfArrGenericPattern)) {
    return new RegExp("\\/(properties|additionalProperties)\\/items\\/" + type + "\\/" + index);
  } else {
    return basePath + "/" + index + "/";
  }
}

function getBracketRegex(arrItem) {
  return arrItem.replace("[", "\\[").replace("]", "\\]");
}

function validate(errors, formData) {
  var clonedErrors = [].concat(_toConsumableArray(errors));

  // Traversing formData property by property
  traverseDeep(function (node, property, parentProperty, parentNode) {
    if (node && node.$$__case !== undefined) {
      var parentPropertyRegex = getBracketRegex(parentProperty);
      var propertyRegex = getBracketRegex(property);

      var genericObjPattern = new RegExp(parentPropertyRegex + "\\[\\'.+\\'\\]");
      var objectPattern = new RegExp(parentPropertyRegex + "\\[\\'" + property + "\\'\\]");
      var mapArrPattern = new RegExp("\\[\\'" + parentPropertyRegex + "\\'\\]" + propertyRegex);
      var mapArrGenericPattern = new RegExp("\\[\\'" + parentPropertyRegex + "\\'\\]\\[\\d+\\]");

      // Getting case number
      var index = node["$$__case"];
      // Getting case type e.g oneOf or anyOf
      var type = node["$$__case_of"] || "oneOf";
      // Getting current property from pointer/path

      // If there is case number, it means that it is either oneOf or anyOf

      // Group the related errors of current property and case type
      // let suppose we have 'to' is the current property and type of 'to' is 'oneOf' then we
      // will group errors by checking 'to/oneOf' substring in errors schemaPath
      var relatedErrors = [];

      // Base path is the substring which is being used to group errors as relatedErrors
      // There is two cases, if current property is value then we can assume that it is direct
      // nested case of oneOf and anyOf. In this case we use parent property to make path.
      var basePath = getBasePath(property, parentProperty, parentNode, type);

      // Making two error groups
      // 1) Related errors w.r.t current property and case type
      // 2) Unrelated errors other then current property
      clonedErrors = clonedErrors.filter(function (error) {
        if (error.schemaPath.indexOf(basePath) !== -1 && property.match(ARR_ITEM_REGEX) && error.dataPath.indexOf(parentProperty + property) === -1) {
          return true;
        } else if (error.dataPath.match(genericObjPattern) && !error.dataPath.match(objectPattern)) {
          return true;
        } else if (error.dataPath.match(mapArrGenericPattern) && !error.dataPath.match(mapArrPattern)) {
          return true;
        } else if (!error.dataPath.match(genericObjPattern) && !error.dataPath.match(mapArrGenericPattern) && error.schemaPath.indexOf(basePath) === -1) {
          return true;
        } else {
          relatedErrors.push(error);
          return false;
        }
      });

      // Further filteration of the relatedErrors based on case selection
      // Case number is added at the end to pick only selected errors
      var selectedErrors = relatedErrors.filter(function (error) {
        var path = getSelectionPath({
          arrOfArrGenericPattern: mapArrGenericPattern,
          basePath: basePath,
          error: error,
          index: index,
          objectPattern: objectPattern,
          parentProperty: parentProperty,
          type: type
        });

        if (error.schemaPath.indexOf(path) !== -1 || error.schemaPath.match(path)) {
          return true;
        }
      });

      // Merging of unrelated and selectedErrors
      clonedErrors = [].concat(_toConsumableArray(clonedErrors), _toConsumableArray(selectedErrors));
    }
  }, formData);

  return clonedErrors;
}

function validateSchema(schema, formData, originalFormData, ajv) {
  var clonedSchema = (0, _lodash2.default)(schema);

  // if item of oneOf doesn't has required properties then manually add
  // addtionalProperties in schema.
  (0, _jsonSchemaTraverse2.default)(clonedSchema, {}, function (node) {
    var oneOf = node.oneOf,
        anyOf = node.anyOf;


    if (oneOf || anyOf) {
      var oneOfArr = oneOf || anyOf;

      oneOfArr.forEach(function (item) {
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