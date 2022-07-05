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

function validateField(schema, formData, required, disabled) {
  var errors = [];

  if (required && formData === undefined && !disabled) {
    errors = ["is a required property"];
  } else if (schema.type !== "object" && schema.type !== "array" && !disabled) {
    var clonedSchema = (0, _lodash2.default)(schema);
    delete clonedSchema.id;

    var ajv = _AJV.AJV.getInstance();
    ajv.validate(clonedSchema, formData);

    errors = ajv.errors ? [].concat(_toConsumableArray(ajv.errors.map(function (err) {
      return err.message;
    })), _toConsumableArray(errors)) : errors;
  }

  return errors;
}