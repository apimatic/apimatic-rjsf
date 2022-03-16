"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getOneAnyOfPath = getOneAnyOfPath;
exports.validateSchema = validateSchema;

var _jsonSchemaTraverse = require("json-schema-traverse");

var _jsonSchemaTraverse2 = _interopRequireDefault(_jsonSchemaTraverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getOneAnyOfPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var obj = arguments[1];

  var result = path ? path + "/" + obj.$$__case_of + "/" + obj.$$__case : obj.$$__case_of + "/" + obj.$$__case;

  return result;
}

function validate(errors, formData) {
  var clonedErrors = [].concat(_toConsumableArray(errors));

  // Traversing formData property by property
  (0, _jsonSchemaTraverse2.default)(formData, {
    allKeys: true,
    cb: function cb() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var node = args[0],
          jsonPointer = args[1],
          parentJsonPointer = args[3],
          parentSchema = args[5];

      // Getting case number

      var index = node["$$__case"];
      // Getting case type e.g oneOf or anyOf
      var type = node["$$__case_of"] || "oneOf";
      // Getting current property from pointer/path

      var _jsonPointer$split$sl = jsonPointer.split("/").slice(-1),
          _jsonPointer$split$sl2 = _slicedToArray(_jsonPointer$split$sl, 1),
          property = _jsonPointer$split$sl2[0];
      // Getting parent property


      var _split$slice = (parentJsonPointer || "").split("/").slice(-1),
          _split$slice2 = _slicedToArray(_split$slice, 1),
          parentProperty = _split$slice2[0];

      // If there is case number, it means that it is either oneOf or anyOf


      if (index !== undefined) {
        // Group the related errors of current property and case type
        // let suppose we have 'to' is the current property and type of 'to' is 'oneOf' then we
        // will group errors by checking 'to/oneOf' substring in errors schemaPath
        var relatedErrors = [];

        // Base path is the substring which is being used to group errors as relatedErrors
        // There is two cases, if current property is value then we can assume that it is direct
        // nested case of oneOf and anyOf. In this case we use parent property to make path.
        var basePath = property === "value" ? parentProperty + "/" + parentSchema["$$__case_of"] + "/" + parentSchema["$$__case"] + "/" + type : property + "/" + type;

        // Making two error groups
        // 1) Related errors w.r.t current property and case type
        // 2) Unrelated errors other then current property
        clonedErrors = clonedErrors.filter(function (error) {
          if (error.schemaPath.indexOf(basePath) === -1) {
            return true;
          }

          relatedErrors.push(error);
          return false;
        });

        // Further filteration of the relatedErrors based on case selection
        // Case number is added at the end to pick only selected errors
        var selectedErrors = relatedErrors.filter(function (error) {
          var path = basePath + "/" + index;

          if (error.schemaPath.indexOf(path) !== -1) {
            return true;
          }
        });

        // Merging of unrelated and selectedErrors
        clonedErrors = [].concat(_toConsumableArray(clonedErrors), _toConsumableArray(selectedErrors));
      }
    }
  });

  return clonedErrors;
}

function validateSchema(schema, formData, originalFormData, ajv) {
  ajv.validate(schema, formData);

  if (originalFormData && ajv.errors) {
    ajv.errors = validate(ajv.errors, originalFormData);
  }
}