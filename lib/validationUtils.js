"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneAnyOfPath = getOneAnyOfPath;
exports.validateField = validateField;

var _lodash = require("lodash.clonedeep");

var _lodash2 = _interopRequireDefault(_lodash);

var _AJV = require("./AJV");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getOneAnyOfPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var obj = arguments[1];

  var result = path ? path + "/" + obj.$$__case_of + "/" + obj.$$__case : obj.$$__case_of + "/" + obj.$$__case;

  return result;
}

function isPrimitiveSchema(schema) {
  return schema.type !== "object" && schema.type !== "array" && !schema.hasOwnProperty("oneOf") && !schema.hasOwnProperty("anyOf");
}

function validateField(schema, formData, required, disabled) {
  var errors = [];
  // We shows validation only on enabled fields
  if (!disabled) {
    // if formData === undefined it means that we are in initial state
    if (formData === undefined) {
      // if optional field we don't need to show errors;
      // otherwise we will show required error on initial state.
      if (required && isPrimitiveSchema(schema)) {
        errors = ["is a required field"];
      } else {
        return errors;
      }
    } else if (isPrimitiveSchema(schema)) {
      var clonedSchema = (0, _lodash2.default)(schema);
      delete clonedSchema.id;

      var ajv = _AJV.AJV.getInstance();
      ajv.validate(clonedSchema, formData);

      errors = ajv.errors ? [].concat(_toConsumableArray(ajv.errors.map(function (err) {
        return err.message;
      })), _toConsumableArray(errors)) : errors;
    }
  }

  return errors;
}