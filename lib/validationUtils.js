"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneAnyOfPath = getOneAnyOfPath;
exports.validateField = validateField;
var _lodash = _interopRequireDefault(require("lodash.clonedeep"));
var _AJV = require("./AJV");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function getOneAnyOfPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var obj = arguments.length > 1 ? arguments[1] : undefined;
  var result = path ? "".concat(path, "/").concat(obj.$$__case_of, "/").concat(obj.$$__case) : "".concat(obj.$$__case_of, "/").concat(obj.$$__case);
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
      var clonedSchema = (0, _lodash.default)(schema);
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