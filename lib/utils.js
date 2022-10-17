"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allowAdditionalItems = allowAdditionalItems;
exports.asNumber = asNumber;
exports.checkDiscriminator = checkDiscriminator;
exports.classNames = classNames;
exports.classPrefix = void 0;
exports.dataURItoBlob = dataURItoBlob;
exports.deepEquals = deepEquals;
exports.findSchemaDefinition = findSchemaDefinition;
exports.getArrayItem = getArrayItem;
exports.getDefaultFormState = getDefaultFormState;
exports.getDefaultRegistry = getDefaultRegistry;
exports.getDescription = getDescription;
exports.getEvenOdd = getEvenOdd;
exports.getEvenOddClass = getEvenOddClass;
exports.getListRootItem = getListRootItem;
exports.getMatchingOption = getMatchingOption;
exports.getUiOptions = getUiOptions;
exports.getWidget = getWidget;
exports.isConstant = isConstant;
exports.isDiscriminator = isDiscriminator;
exports.isFilesArray = isFilesArray;
exports.isFixedItems = isFixedItems;
exports.isMultiSelect = isMultiSelect;
exports.isMultipleSchema = void 0;
exports.isObject = isObject;
exports.isOneOfSchema = isOneOfSchema;
exports.isSelect = isSelect;
exports.mergeDefaultsWithFormData = mergeDefaultsWithFormData;
exports.mergeObjects = mergeObjects;
exports.optionsList = optionsList;
exports.orderProperties = orderProperties;
exports.pad = pad;
exports.parseDateString = parseDateString;
exports.pipe = pipe;
exports.prefixClass = prefixClass;
exports.rangeSpec = rangeSpec;
exports.retrieveSchema = retrieveSchema;
exports.setState = setState;
exports.shouldRender = shouldRender;
exports.toConstant = toConstant;
exports.toDateString = toDateString;
exports.unwrapFormData = unwrapFormData;
var _react = _interopRequireDefault(require("react"));
require("setimmediate");
var _validate = _interopRequireWildcard(require("./validate"));
var _excluded = ["options"],
  _excluded2 = ["$ref"],
  _excluded3 = ["dependencies"],
  _excluded4 = ["oneOf"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function unwrapFormData(formData) {
  var newFormData = formData;
  if (isObject(newFormData)) {
    if (checkDiscriminator(newFormData)) {
      newFormData = unwrapFormData(newFormData.value);
    } else {
      for (var key in newFormData) {
        newFormData = _objectSpread(_objectSpread({}, newFormData), {}, _defineProperty({}, key, unwrapFormData(newFormData[key])));
      }
    }
  }
  if (Array.isArray(newFormData)) {
    newFormData = newFormData.map(function (item) {
      if (item && isObject(item)) {
        return unwrapFormData(item);
      } else {
        return item;
      }
    });
  }
  return newFormData;
}
var widgetMap = {
  boolean: {
    checkbox: "CheckboxWidget",
    radio: "RadioWidget",
    select: "SelectWidget",
    hidden: "HiddenWidget"
  },
  string: {
    text: "TextWidget",
    password: "PasswordWidget",
    email: "EmailWidget",
    hostname: "TextWidget",
    ipv4: "TextWidget",
    ipv6: "TextWidget",
    uri: "URLWidget",
    "data-url": "FileWidget",
    radio: "RadioWidget",
    select: "SelectWidget",
    textarea: "TextareaWidget",
    hidden: "HiddenWidget",
    date: "NewDateWidget",
    datetime: "NewDateTimeWidget",
    "date-time": "NewDateTimeWidget",
    "alt-date": "AltDateWidget",
    "alt-datetime": "AltDateTimeWidget",
    color: "ColorWidget",
    file: "FileWidget"
  },
  number: {
    text: "TextWidget",
    select: "SelectWidget",
    updown: "UpDownWidget",
    range: "RangeWidget",
    radio: "RadioWidget",
    hidden: "HiddenWidget"
  },
  integer: {
    text: "TextWidget",
    select: "SelectWidget",
    updown: "UpDownWidget",
    range: "RangeWidget",
    radio: "RadioWidget",
    hidden: "HiddenWidget"
  },
  array: {
    select: "SelectWidget",
    checkboxes: "CheckboxesWidget",
    files: "FileWidget"
  }
};
function getDefaultRegistry() {
  return {
    fields: require("./components/fields").default,
    widgets: require("./components/widgets").default,
    definitions: {},
    formContext: {}
  };
}
function getWidget(schema, widget) {
  var registeredWidgets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var type = schema.type;
  function mergeOptions(Widget) {
    // cache return value as property of widget for proper react reconciliation
    if (!Widget.MergedWidget) {
      var defaultOptions = Widget.defaultProps && Widget.defaultProps.options || {};
      Widget.MergedWidget = function (_ref) {
        var _ref$options = _ref.options,
          options = _ref$options === void 0 ? {} : _ref$options,
          props = _objectWithoutProperties(_ref, _excluded);
        return /*#__PURE__*/_react.default.createElement(Widget, _extends({
          options: _objectSpread(_objectSpread({}, defaultOptions), options)
        }, props));
      };
    }
    return Widget.MergedWidget;
  }
  if (typeof widget === "function") {
    return mergeOptions(widget);
  }
  if (typeof widget !== "string") {
    throw new Error("Unsupported widget definition: ".concat(_typeof(widget)));
  }
  if (registeredWidgets.hasOwnProperty(widget)) {
    var registeredWidget = registeredWidgets[widget];
    return getWidget(schema, registeredWidget, registeredWidgets);
  }
  if (!widgetMap.hasOwnProperty(type)) {
    throw new Error("No widget for type \"".concat(type, "\""));
  }
  if (widgetMap[type].hasOwnProperty(widget)) {
    var _registeredWidget = registeredWidgets[widgetMap[type][widget]];
    return getWidget(schema, _registeredWidget, registeredWidgets);
  }
  throw new Error("No widget \"".concat(widget, "\" for type \"").concat(type, "\""));
}
function computeDefaults(schema, parentDefaults) {
  var schemaIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var dxInterface = arguments.length > 3 ? arguments[3] : undefined;
  var _dxInterface$definiti = dxInterface.definitions,
    definitions = _dxInterface$definiti === void 0 ? {} : _dxInterface$definiti;
  // Compute the defaults recursively: give highest priority to deepest nodes.
  var defaults = parentDefaults;
  if (isObject(defaults) && isObject(schema.default)) {
    // For object defaults, only override parent defaults that are defined in
    // schema.default.
    defaults = mergeObjects(defaults, schema.default);
  } else if ("default" in schema) {
    // Use schema defaults for this node.
    defaults = schema.default;
  } else if ("$ref" in schema) {
    // Use referenced schema defaults for this node.
    var refSchema = findSchemaDefinition(schema.$ref, definitions);
    return computeDefaults(refSchema, defaults, undefined, dxInterface);
  } else if (isFixedItems(schema)) {
    defaults = schema.items.map(function (itemSchema) {
      return computeDefaults(itemSchema, undefined, undefined, dxInterface);
    });
  } else if ("oneOf" in schema) {
    defaults = {
      $$__case: schemaIndex,
      $$__case_of: "oneOf",
      value: computeDefaults(schema.oneOf[schemaIndex], undefined, schemaIndex, dxInterface)
    };
  } else if ("anyOf" in schema) {
    defaults = {
      $$__case: schemaIndex,
      $$__case_of: "anyOf",
      value: computeDefaults(schema.anyOf[schemaIndex], undefined, schemaIndex, dxInterface)
    };
  }
  // Not defaults defined for this node, fallback to generic typed ones.
  if (typeof defaults === "undefined") {
    defaults = schema.default;
  }
  switch (schema.type) {
    // We need to recur for object schema inner default values.
    case "object":
      {
        defaults = Object.keys(schema.properties || {}).reduce(function (acc, key) {
          var property = schema.properties[key];
          if (property.hasOwnProperty("$ref")) {
            acc[key] = (defaults || {})[key];
          } else {
            acc[key] = computeDefaults(property, (defaults || {})[key], undefined, dxInterface);
          }
          return acc;
        }, {});
        break;
      }
    case "array":
      {
        // Inject defaults into existing array defaults
        if (Array.isArray(defaults)) {
          defaults = defaults.map(function (item, idx) {
            return computeDefaults(schema.items[idx] || schema.additionalItems || {}, item, undefined, dxInterface);
          });
        }
        if (schema.minItems) {
          if (!isMultiSelect(schema, dxInterface)) {
            var defaultsLength = defaults ? defaults.length : 0;
            if (schema.minItems > defaultsLength) {
              var defaultEntries = defaults || [];
              // populate the array with the defaults
              var fillerEntries = new Array(schema.minItems - defaultsLength).fill(computeDefaults(schema.items, schema.items.defaults, undefined, dxInterface));
              // then fill up the rest with either the item default or empty, up to minItems

              return defaultEntries.concat(fillerEntries);
            }
          } else {
            return [];
          }
        }
        break;
      }
  }
  return defaults;
}
function getDefaultFormState(_schema, formData) {
  var schemaIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var dxInterface = arguments.length > 3 ? arguments[3] : undefined;
  if (!isObject(_schema)) {
    throw new Error("Invalid schema: " + _schema);
  }
  var schema = retrieveSchema(_schema, formData, dxInterface);
  var defaults = computeDefaults(schema, _schema.default, schemaIndex, dxInterface);
  if (typeof formData === "undefined") {
    // No form data? Use schema defaults.
    return defaults;
  }
  if (isObject(formData)) {
    // Override schema defaults with form data.
    var a = mergeDefaultsWithFormData(defaults, formData);
    return a;
  }
  return formData || defaults;
}
function getUiOptions(uiSchema) {
  // get all passed options from ui:widget, ui:options, and ui:<optionName>
  return Object.keys(uiSchema).filter(function (key) {
    return key.indexOf("ui:") === 0;
  }).reduce(function (options, key) {
    var value = uiSchema[key];
    if (key === "ui:widget" && isObject(value)) {
      console.warn("Setting options via ui:widget object is deprecated, use ui:options instead");
      return _objectSpread(_objectSpread(_objectSpread({}, options), value.options || {}), {}, {
        widget: value.component
      });
    }
    if (key === "ui:options" && isObject(value)) {
      return _objectSpread(_objectSpread({}, options), value);
    }
    return _objectSpread(_objectSpread({}, options), {}, _defineProperty({}, key.substring(3), value));
  }, {});
}
function isObject(thing) {
  return _typeof(thing) === "object" && thing !== null && !Array.isArray(thing);
}
function mergeObjects(obj1, obj2) {
  var concatArrays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // Recursively merge deeply nested objects.
  var acc = Object.assign({}, obj1); // Prevent mutation of source object.
  return Object.keys(obj2).reduce(function (acc, key) {
    var left = obj1[key],
      right = obj2[key];
    if (obj1.hasOwnProperty(key) && isObject(right)) {
      acc[key] = mergeObjects(left, right, concatArrays);
    } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
      acc[key] = left.concat(right);
    } else {
      acc[key] = right;
    }
    return acc;
  }, acc);
}

/**
 * When merging defaults and form data, we want to merge in this specific way:
 * - objects are deeply merged
 * - arrays are merged in such a way that:
 *   - when the array is set in form data, only array entries set in form data
 *     are deeply merged; additional entries from the defaults are ignored
 *   - when the array is not set in form data, the default is copied over
 * - scalars are overwritten/set by form data
 */
function mergeDefaultsWithFormData(defaults, formData) {
  if (Array.isArray(formData)) {
    if (!Array.isArray(defaults)) {
      defaults = [];
    }
    return formData.map(function (value, idx) {
      if (defaults[idx]) {
        return mergeDefaultsWithFormData(defaults[idx], value);
      }
      return value;
    });
  } else if (isObject(formData) && formData.$$__case === undefined) {
    var acc = Object.assign({}, defaults);
    return Object.keys(formData).reduce(function (acc, key) {
      acc[key] = mergeDefaultsWithFormData(defaults ? defaults[key] : {}, formData[key]);
      return acc;
    }, acc);
  } else {
    return formData;
  }
}
function asNumber(value) {
  if (value === "") {
    return undefined;
  }
  if (/\.$/.test(value)) {
    // "3." can't really be considered a number even if it parses in js. The
    // user is most likely entering a float.
    return value;
  }
  if (/\.0$/.test(value)) {
    // we need to return this as a string here, to allow for input like 3.07
    return value;
  }
  var n = Number(value);
  var valid = typeof n === "number" && !Number.isNaN(n);
  if (/\.\d*0$/.test(value)) {
    // It's a number, that's cool - but we need it as a string so it doesn't screw
    // with the user when entering dollar amounts or other values (such as those with
    // specific precision or number of significant digits)
    return value;
  }
  return valid ? n : value;
}
function orderProperties(properties, order) {
  if (!Array.isArray(order)) {
    return properties;
  }
  var arrayToHash = function arrayToHash(arr) {
    return arr.reduce(function (prev, curr) {
      prev[curr] = true;
      return prev;
    }, {});
  };
  var errorPropList = function errorPropList(arr) {
    return arr.length > 1 ? "properties '".concat(arr.join("', '"), "'") : "property '".concat(arr[0], "'");
  };
  var propertyHash = arrayToHash(properties);
  var orderHash = arrayToHash(order);
  var extraneous = order.filter(function (prop) {
    return prop !== "*" && !propertyHash[prop];
  });
  if (extraneous.length) {
    throw new Error("uiSchema order list contains extraneous ".concat(errorPropList(extraneous)));
  }
  var rest = properties.filter(function (prop) {
    return !orderHash[prop];
  });
  var restIndex = order.indexOf("*");
  if (restIndex === -1) {
    if (rest.length) {
      throw new Error("uiSchema order list does not contain ".concat(errorPropList(rest)));
    }
    return order;
  }
  if (restIndex !== order.lastIndexOf("*")) {
    throw new Error("uiSchema order list contains more than one wildcard item");
  }
  var complete = _toConsumableArray(order);
  complete.splice.apply(complete, [restIndex, 1].concat(_toConsumableArray(rest)));
  return complete;
}

/**
 * This function checks if the given schema matches a single
 * constant value.
 */
function isConstant(schema) {
  return Array.isArray(schema.enum) && schema.enum.length === 1 || schema.hasOwnProperty("const");
}
function toConstant(schema) {
  if (Array.isArray(schema.enum) && schema.enum.length === 1) {
    return schema.enum[0];
  } else if (schema.hasOwnProperty("const")) {
    return schema.const;
  } else {
    throw new Error("schema cannot be inferred as a constant");
  }
}
function isSelect(_schema, dxInterface) {
  // clear
  var schema = retrieveSchema(_schema, undefined, dxInterface);
  var altSchemas = schema.oneOf || schema.anyOf;
  if (Array.isArray(schema.enum)) {
    return true;
  } else if (Array.isArray(altSchemas)) {
    return altSchemas.every(function (altSchemas) {
      return isConstant(altSchemas);
    });
  }
  return false;
}
function isMultiSelect(schema, dxInterface) {
  if (!schema.uniqueItems || !schema.items) {
    return false;
  }
  return isSelect(schema.items, dxInterface);
}
function isFilesArray(schema, uiSchema, dxInterface) {
  if (uiSchema["ui:widget"] === "files") {
    return true;
  } else if (schema.items) {
    // clear
    var itemsSchema = retrieveSchema(schema.items, undefined, dxInterface);
    return itemsSchema.type === "string" && itemsSchema.format === "data-url";
  }
  return false;
}
function isFixedItems(schema) {
  return Array.isArray(schema.items) && schema.items.length > 0 && schema.items.every(function (item) {
    return isObject(item);
  });
}
function allowAdditionalItems(schema) {
  if (schema.additionalItems === true) {
    console.warn("additionalItems=true is currently not supported");
  }
  return isObject(schema.additionalItems);
}
function optionsList(schema) {
  if (schema.enum) {
    return schema.enum.map(function (value, i) {
      var label = schema.enumNames && schema.enumNames[i] || String(value);
      return {
        label: label,
        value: value
      };
    });
  } else {
    var altSchemas = schema.oneOf || schema.anyOf;
    return altSchemas.map(function (schema, i) {
      var value = toConstant(schema);
      var label = schema.title || String(value);
      return {
        label: label,
        value: value
      };
    });
  }
}
function findSchemaDefinition($ref) {
  var definitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallback = arguments.length > 2 ? arguments[2] : undefined;
  // Extract and use the referenced definition if we have it.
  var match = /^ModelSchemas#\/(.*)$/.exec($ref);
  if (match && match[1]) {
    var parts = match[1].split("/");
    var current = definitions;
    var _iterator = _createForOfIteratorHelper(parts),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var part = _step.value;
        if (fallback) {
          part = part.replace(/~1/g, "/").replace(/~0/g, "~");
        }
        if (current.hasOwnProperty(part)) {
          current = current[part];
        } else {
          // TODO: Hack for compatiblity. Need to remove after proper fix
          if (!fallback) {
            var decodedRef = decodeURIComponent($ref);
            return findSchemaDefinition(decodedRef, definitions, true);
          }
          // No matching definition found, that's an error (bogus schema?)
          throw new Error("Could not find a definition for ".concat($ref, "."));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return current;
  }

  // No matching definition found, that's an error (bogus schema?)
  throw new Error("Could not find a definition for ".concat($ref, "."));
}
function getStructure(modelName, structures) {
  var structure = structures.find(function (struct) {
    return struct.Name === modelName || struct.OriginalName === modelName;
  });
  return structure;
}
var TABLE_HEADER = "| Type | Value |";
function splitDesription(description) {
  switch (description) {
    case "-":
      return;
    default:
      {
        var descriptionHas = Boolean(description.includes(TABLE_HEADER));
        var _description$split = description.split(TABLE_HEADER),
          _description$split2 = _slicedToArray(_description$split, 1),
          originalDescription = _description$split2[0];
        return descriptionHas ? originalDescription : description;
      }
  }
}
function getDescription(type) {
  var _type$Description = type.Description,
    Description = _type$Description === void 0 ? "" : _type$Description;
  var description = typeof Description === "string" ? Description.trim() : "";
  return splitDesription(description);
}
function getDataTypeDisplayText(type) {
  return type.DataType ? type.DataType : undefined;
}
function getUrl(linkMapper, link) {
  return linkMapper(link);
}
function generateAdditionalProperties(type, linkMapper) {
  return {
    description: getDescription(type),
    dataTypeDisplayText: getDataTypeDisplayText(type),
    dataTypeLink: type.LinkTo ? getUrl(linkMapper, type.LinkTo) : undefined,
    dataTypeMarkdown: type.DataTypeMarkdown,
    paramType: type.ParamType,
    title: type.Name,
    typeCombinatorTypes: type.TypeCombinatorTypes,
    discriminator: type.Discriminator,
    discriminatorValue: type.DiscriminatorValue,
    readOnly: type.ReadOnly,
    writeOnly: type.WriteOnly
  };
}
function mergeStructure(schema, structure, linkMapper) {
  if (structure && structure.Fields) {
    structure.Fields.forEach(function (field) {
      var property = schema.properties[field.GenericName];
      if (property) {
        var additionalProperties = generateAdditionalProperties(field, linkMapper);
        if (property.type === "array") {
          schema.properties[field.GenericName].items = _objectSpread(_objectSpread({}, property.items), {}, {
            typeCombinatorTypes: field.TypeCombinatorTypes,
            discriminator: field.Discriminator,
            dataTypeDisplayText: getArrayItem(field.DataType),
            dataTypeLink: additionalProperties.dataTypeLink,
            dataTypeMarkdown: additionalProperties.dataTypeMarkdown
          });
        }
        schema.properties[field.GenericName] = _objectSpread(_objectSpread({}, property), additionalProperties);
      }
    });
  }
  return schema;
}
function mergeFieldsData(refSchema, modelName, structure, linkMapper) {
  if (refSchema.hasOwnProperty("allOf")) {
    var selectedIndex = refSchema.allOf.findIndex(function (item) {
      return item.id === modelName;
    });
    if (selectedIndex) {
      var selectedSchema = refSchema.allOf[selectedIndex];
      refSchema.allOf[selectedIndex] = mergeStructure(selectedSchema, structure, linkMapper);
    }
  } else {
    refSchema = mergeStructure(refSchema, structure, linkMapper);
  }
  return refSchema;
}
function retrieveSchema(schema) {
  var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var dxInterface = arguments.length > 2 ? arguments[2] : undefined;
  var _dxInterface$definiti2 = dxInterface.definitions,
    definitions = _dxInterface$definiti2 === void 0 ? {} : _dxInterface$definiti2,
    _dxInterface$structur = dxInterface.structures,
    structures = _dxInterface$structur === void 0 ? [] : _dxInterface$structur,
    linkMapper = dxInterface.linkMapper;
  if (schema.hasOwnProperty("$ref")) {
    // Retrieve the referenced schema definition.
    var $refSchema = findSchemaDefinition(schema.$ref, definitions);
    var modelName = $refSchema.id || $refSchema.title;
    var structure = getStructure(modelName, structures);
    $refSchema = mergeFieldsData($refSchema, modelName, structure, linkMapper);

    // Drop the $ref property of the source schema.
    var $ref = schema.$ref,
      localSchema = _objectWithoutProperties(schema, _excluded2);
    // Update referenced schema definition with local schema properties.
    return retrieveSchema(_objectSpread(_objectSpread({}, $refSchema), localSchema), formData, dxInterface);
  } else if (schema.hasOwnProperty("dependencies")) {
    var resolvedSchema = resolveDependencies(schema, formData, dxInterface);
    return retrieveSchema(resolvedSchema, formData, dxInterface);
  } else if (schema.hasOwnProperty("allOf")) {
    var name = schema.id || schema.title;
    var _structure = getStructure(name, structures);
    var _$refSchema = schema;
    _$refSchema = mergeFieldsData(_$refSchema, name, _structure, linkMapper);
    _$refSchema.allOf = _$refSchema.allOf.map(function (schema) {
      return retrieveSchema(schema, formData, dxInterface);
    });
    return schema;
  } else {
    // No $ref or dependencies attribute found, returning the original schema.
    return schema;
  }
}
function resolveDependencies(schema, formData, dxInterface) {
  // Drop the dependencies from the source schema.
  var _schema$dependencies = schema.dependencies,
    dependencies = _schema$dependencies === void 0 ? {} : _schema$dependencies,
    resolvedSchema = _objectWithoutProperties(schema, _excluded3);
  // Process dependencies updating the local schema properties as appropriate.
  for (var dependencyKey in dependencies) {
    // Skip this dependency if its trigger property is not present.
    if (formData[dependencyKey] === undefined) {
      continue;
    }
    var dependencyValue = dependencies[dependencyKey];
    if (Array.isArray(dependencyValue)) {
      resolvedSchema = withDependentProperties(resolvedSchema, dependencyValue);
    } else if (isObject(dependencyValue)) {
      resolvedSchema = withDependentSchema(resolvedSchema, formData, dependencyKey, dependencyValue, dxInterface);
    }
  }
  return resolvedSchema;
}
function withDependentProperties(schema, additionallyRequired) {
  if (!additionallyRequired) {
    return schema;
  }
  var required = Array.isArray(schema.required) ? Array.from(new Set([].concat(_toConsumableArray(schema.required), _toConsumableArray(additionallyRequired)))) : additionallyRequired;
  return _objectSpread(_objectSpread({}, schema), {}, {
    required: required
  });
}
function withDependentSchema(schema, formData, dependencyKey, dependencyValue, dxInterface) {
  var _retrieveSchema = retrieveSchema(dependencyValue, formData, dxInterface),
    oneOf = _retrieveSchema.oneOf,
    dependentSchema = _objectWithoutProperties(_retrieveSchema, _excluded4);
  schema = mergeSchemas(schema, dependentSchema);
  return oneOf === undefined ? schema : withExactlyOneSubschema(schema, formData, dependencyKey, oneOf, dxInterface);
}
function withExactlyOneSubschema(schema, formData, dependencyKey, oneOf, dxInterface) {
  var definitions = dxInterface.definitions;
  if (!Array.isArray(oneOf)) {
    throw new Error("invalid oneOf: it is some ".concat(_typeof(oneOf), " instead of an array"));
  }
  var validSubschemas = oneOf.filter(function (subschema) {
    if (!subschema.properties) {
      return false;
    }
    var conditionPropertySchema = subschema.properties[dependencyKey];
    if (conditionPropertySchema) {
      var conditionSchema = {
        type: "object",
        properties: _defineProperty({}, dependencyKey, conditionPropertySchema)
      };
      var _validateFormData = (0, _validate.default)(formData, conditionSchema, undefined, undefined, undefined, definitions),
        errors = _validateFormData.errors;
      return errors.length === 0;
    }
  });
  if (validSubschemas.length !== 1) {
    console.warn("ignoring oneOf in dependencies because there isn't exactly one subschema that is valid");
    return schema;
  }
  var subschema = validSubschemas[0];
  var _subschema$properties = subschema.properties,
    conditionPropertySchema = _subschema$properties[dependencyKey],
    dependentSubschema = _objectWithoutProperties(_subschema$properties, [dependencyKey].map(_toPropertyKey));
  var dependentSchema = _objectSpread(_objectSpread({}, subschema), {}, {
    properties: dependentSubschema
  });
  return mergeSchemas(schema, retrieveSchema(dependentSchema, formData, dxInterface));
}
function mergeSchemas(schema1, schema2) {
  return mergeObjects(schema1, schema2, true);
}
function isArguments(object) {
  return Object.prototype.toString.call(object) === "[object Arguments]";
}
function deepEquals(a, b) {
  var ca = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  // Partially extracted from node-deeper and adapted to exclude comparison
  // checks for functions.
  // https://github.com/othiym23/node-deeper
  if (a === b) {
    return true;
  } else if (typeof a === "function" || typeof b === "function") {
    // Assume all functions are equivalent
    // see https://github.com/mozilla-services/react-jsonschema-form/issues/255
    return true;
  } else if (_typeof(a) !== "object" || _typeof(b) !== "object") {
    return false;
  } else if (a === null || b === null) {
    return false;
  } else if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  } else if (a instanceof RegExp && b instanceof RegExp) {
    return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
  } else if (isArguments(a) || isArguments(b)) {
    if (!(isArguments(a) && isArguments(b))) {
      return false;
    }
    var slice = Array.prototype.slice;
    return deepEquals(slice.call(a), slice.call(b), ca, cb);
  } else {
    if (a.constructor !== b.constructor) {
      return false;
    }
    var ka = Object.keys(a);
    var kb = Object.keys(b);
    // don't bother with stack acrobatics if there's nothing there
    if (ka.length === 0 && kb.length === 0) {
      return true;
    }
    if (ka.length !== kb.length) {
      return false;
    }
    var cal = ca.length;
    while (cal--) {
      if (ca[cal] === a) {
        return cb[cal] === b;
      }
    }
    ca.push(a);
    cb.push(b);
    ka.sort();
    kb.sort();
    for (var j = ka.length - 1; j >= 0; j--) {
      if (ka[j] !== kb[j]) {
        return false;
      }
    }
    var key;
    for (var k = ka.length - 1; k >= 0; k--) {
      key = ka[k];
      if (!deepEquals(a[key], b[key], ca, cb)) {
        return false;
      }
    }
    ca.pop();
    cb.pop();
    return true;
  }
}
function shouldRender(comp, nextProps, nextState) {
  var props = comp.props,
    state = comp.state;
  return !deepEquals(props, nextProps) || !deepEquals(state, nextState);
}
function parseDateString(dateString) {
  var includeTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!dateString) {
    return {
      year: -1,
      month: -1,
      day: -1,
      hour: includeTime ? -1 : 0,
      minute: includeTime ? -1 : 0,
      second: includeTime ? -1 : 0
    };
  }
  var date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    throw new Error("Unable to parse date " + dateString);
  }
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    // oh you, javascript.
    day: date.getUTCDate(),
    hour: includeTime ? date.getUTCHours() : 0,
    minute: includeTime ? date.getUTCMinutes() : 0,
    second: includeTime ? date.getUTCSeconds() : 0
  };
}
function toDateString(_ref2) {
  var year = _ref2.year,
    month = _ref2.month,
    day = _ref2.day,
    _ref2$hour = _ref2.hour,
    hour = _ref2$hour === void 0 ? 0 : _ref2$hour,
    _ref2$minute = _ref2.minute,
    minute = _ref2$minute === void 0 ? 0 : _ref2$minute,
    _ref2$second = _ref2.second,
    second = _ref2$second === void 0 ? 0 : _ref2$second;
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var utcTime = Date.UTC(year, month - 1, day, hour, minute, second);
  var datetime = new Date(utcTime).toJSON();
  return time ? datetime : datetime.slice(0, 10);
}
function pad(num, size) {
  var s = String(num);
  while (s.length < size) {
    s = "0" + s;
  }
  return s;
}
function setState(instance, state, callback) {
  var safeRenderCompletion = instance.props.safeRenderCompletion;
  if (safeRenderCompletion) {
    instance.setState(state, callback);
  } else {
    instance.setState(state);
    setImmediate(callback);
  }
}
function dataURItoBlob(dataURI) {
  // Split metadata from data
  var splitted = dataURI.split(",");
  // Split params
  var params = splitted[0].split(";");
  // Get mime-type from params
  var type = params[0].replace("data:", "");
  // Filter the name property from params
  var properties = params.filter(function (param) {
    return param.split("=")[0] === "name";
  });
  // Look for the name and use unknown if no name property.
  var name;
  if (properties.length !== 1) {
    name = "unknown";
  } else {
    // Because we filtered out the other property,
    // we only have the name case here.
    name = properties[0].split("=")[1];
  }

  // Built the Uint8Array Blob parameter from the base64 string.
  var binary = atob(splitted[1]);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  // Create the blob object
  var blob = new window.Blob([new Uint8Array(array)], {
    type: type
  });
  return {
    blob: blob,
    name: name
  };
}
function rangeSpec(schema) {
  var spec = {};
  if (schema.multipleOf) {
    spec.step = schema.multipleOf;
  }
  if (schema.minimum || schema.minimum === 0) {
    spec.min = schema.minimum;
  }
  if (schema.maximum || schema.maximum === 0) {
    spec.max = schema.maximum;
  }
  return spec;
}
var classPrefix = "rjsf-";
exports.classPrefix = classPrefix;
function prefixClass(className) {
  return className && classPrefix ? className.split(" ").map(function (e) {
    return e !== "" && e.indexOf(classPrefix) !== 0 ? classPrefix + e : e;
  }).join(" ") : className;
}
function getMatchingOption(formData, options, rootSchema) {
  for (var i = 0; i < options.length; i++) {
    var option = options[i];

    // If the schema describes an object then we need to add slightly more
    // strict matching to the schema, because unless the schema uses the
    // "requires" keyword, an object will match the schema as long as it
    // doesn't have matching keys with a conflicting type. To do this we use an
    // "anyOf" with an array of requires. This augmentation expresses that the
    // schema should match if any of the keys in the schema are present on the
    // object and pass validation.
    if (option.properties) {
      // Create an "anyOf" schema that requires at least one of the keys in the
      // "properties" object
      var requiresAnyOf = {
        anyOf: Object.keys(option.properties).map(function (key) {
          return {
            required: [key]
          };
        })
      };
      var augmentedSchema = void 0;

      // If the "anyOf" keyword already exists, wrap the augmentation in an "allOf"
      if (option.anyOf) {
        // Create a shallow clone of the option
        var shallowClone = _extends({}, (_objectDestructuringEmpty(option), option));
        if (!shallowClone.allOf) {
          shallowClone.allOf = [];
        } else {
          // If "allOf" already exists, shallow clone the array
          shallowClone.allOf = shallowClone.allOf.slice();
        }
        shallowClone.allOf.push(requiresAnyOf);
        augmentedSchema = shallowClone;
      } else {
        augmentedSchema = Object.assign({}, option, requiresAnyOf);
      }

      // Remove the "required" field as it's likely that not all fields have
      // been filled in yet, which will mean that the schema is not valid
      delete augmentedSchema.required;
      if ((0, _validate.isValid)(augmentedSchema, formData)) {
        return i;
      }
    } else if ((0, _validate.isValid)(options[i], formData)) {
      return i;
    }
  }
  return 0;
}
function checkDiscriminator(data) {
  if (data && isObject(data) && data.hasOwnProperty("$$__case")) {
    return true;
  }
  return false;
}
var isMultipleSchema = function isMultipleSchema(schema) {
  return !!(schema && (schema.hasOwnProperty("oneOf") || schema.hasOwnProperty("anyOf")));
};
exports.isMultipleSchema = isMultipleSchema;
function classNames(classObj) {
  if (_typeof(classObj) !== "object") {
    return;
  }
  var className = "";
  Object.entries(classObj).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    if (value) {
      className += " ".concat(key);
    }
  });
  return className;
}
function isOneOfSchema() {
  var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return schema.oneOf || schema.anyOf;
}
function pipe() {
  for (var _len = arguments.length, func = new Array(_len), _key = 0; _key < _len; _key++) {
    func[_key] = arguments[_key];
  }
  return function (data) {
    return func.reduce(function (cache, currentFunc) {
      return currentFunc(cache);
    }, data);
  };
}
function getListRootItem(markdown) {
  var items = markdown.split("*");
  return items[1];
}
function isDiscriminator() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var discriminatorObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var discriminatorProperty = discriminatorObj.name;
  var isDiscriminator = discriminatorProperty && discriminatorProperty === name;
  return isDiscriminator;
}
function getArrayItem(type) {
  var pattern = /<(.+)>/;
  var match = pattern.exec(type);
  if (match) {
    return match[1];
  }
  return "";
}
function getEvenOdd(depth) {
  return depth % 2 === 0;
}
function getEvenOddClass(depth) {
  return getEvenOdd(depth) ? "even" : "odd";
}