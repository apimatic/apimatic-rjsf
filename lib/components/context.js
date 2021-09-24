"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextConsumer = exports.ContextProvider = undefined;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var AppContext = React.createContext();

var ContextProvider = exports.ContextProvider = AppContext.Provider;

var ContextConsumer = exports.ContextConsumer = AppContext.Consumer;