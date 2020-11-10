"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsonIcon = exports.RequiredInfoIcon = exports.CheveronIcon = exports.ArrowUpIcon = exports.ArrowDownIcon = exports.DeleteIcon = exports.CloseIcon = exports.PlusIcon = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_GRAY = "#3E445D";

var PlusIcon = exports.PlusIcon = function PlusIcon(_ref) {
  var width = _ref.width,
      color = _ref.color;
  return _react2.default.createElement(
    "svg",
    {
      width: width,
      height: width * 448 / 352,
      className: (0, _utils.prefixClass)("icon icon-plus"),
      viewBox: "0 0 352 448"
    },
    _react2.default.createElement("title", null),
    _react2.default.createElement("g", { id: "icomoon-ignore" }),
    _react2.default.createElement("path", {
      fill: color || DEFAULT_GRAY,
      d: "M352 184v48c0 13.25-10.75 24-24 24h-104v104c0 13.25-10.75 24-24 24h-48c-13.25 0-24-10.75-24-24v-104h-104c-13.25 0-24-10.75-24-24v-48c0-13.25 10.75-24 24-24h104v-104c0-13.25 10.75-24 24-24h48c13.25 0 24 10.75 24 24v104h104c13.25 0 24 10.75 24 24z"
    })
  );
};

var CloseIcon = exports.CloseIcon = function CloseIcon(_ref2) {
  var width = _ref2.width,
      color = _ref2.color;
  return _react2.default.createElement(
    "svg",
    {
      width: width,
      height: width * 448 / 352,
      className: (0, _utils.prefixClass)("icon icon-remove"),
      viewBox: "0 0 352 448"
    },
    _react2.default.createElement("title", null),
    _react2.default.createElement("g", { id: "icomoon-ignore" }),
    _react2.default.createElement("path", {
      fill: color || DEFAULT_GRAY,
      d: "M324.5 330.5c0 6.25-2.5 12.5-7 17l-34 34c-4.5 4.5-10.75 7-17 7s-12.5-2.5-17-7l-73.5-73.5-73.5 73.5c-4.5 4.5-10.75 7-17 7s-12.5-2.5-17-7l-34-34c-4.5-4.5-7-10.75-7-17s2.5-12.5 7-17l73.5-73.5-73.5-73.5c-4.5-4.5-7-10.75-7-17s2.5-12.5 7-17l34-34c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l73.5 73.5 73.5-73.5c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l34 34c4.5 4.5 7 10.75 7 17s-2.5 12.5-7 17l-73.5 73.5 73.5 73.5c4.5 4.5 7 10.75 7 17z"
    })
  );
};

var DeleteIcon = exports.DeleteIcon = function DeleteIcon(_ref3) {
  var width = _ref3.width,
      color = _ref3.color;
  return _react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: width || "17.756",
      height: (width || 20.5) * 17.756 / 20.5,
      viewBox: "0 0 17.756 20.5"
    },
    _react2.default.createElement(
      "g",
      { transform: "translate(0.75 0.75)" },
      _react2.default.createElement("path", {
        d: "M3,6H19.256",
        transform: "translate(-3 -2.2)",
        fill: "none",
        stroke: color || "#3E445D",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      }),
      _react2.default.createElement("path", {
        d: "M17.256,5.8V19.1A1.83,1.83,0,0,1,15.5,21H6.751A1.83,1.83,0,0,1,5,19.1V5.8m2.626,0V3.9A1.83,1.83,0,0,1,9.377,2h3.5a1.83,1.83,0,0,1,1.751,1.9V5.8",
        transform: "translate(-3 -2)",
        fill: "none",
        stroke: color || "#3E445D",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      }),
      _react2.default.createElement("line", {
        y2: "6",
        transform: "translate(6.322 8.357)",
        fill: "none",
        stroke: color || "#3E445D",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      }),
      _react2.default.createElement("line", {
        y2: "6",
        transform: "translate(9.934 8.357)",
        fill: "none",
        stroke: color || "#3E445D",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      })
    )
  );
};

var ArrowDownIcon = exports.ArrowDownIcon = function ArrowDownIcon(_ref4) {
  var width = _ref4.width,
      color = _ref4.color;
  return ArrowUpIcon({ width: width, color: color, rotate: 180 });
};

var ArrowUpIcon = exports.ArrowUpIcon = function ArrowUpIcon(_ref5) {
  var width = _ref5.width,
      color = _ref5.color,
      rotate = _ref5.rotate;
  return _react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: width || 16.121,
      height: (width || 15.5) * 16.121 / 15.5,
      transform: "rotate(" + (rotate ? rotate : 0) + ")",
      viewBox: "0 0 16.121 15.5"
    },
    _react2.default.createElement(
      "g",
      { transform: "translate(-3.939 -4.25)" },
      _react2.default.createElement("line", {
        y1: "14",
        transform: "translate(12 5)",
        fill: "none",
        stroke: color || "#3E445D",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      }),
      _react2.default.createElement("path", {
        d: "M5,12l7-7,7,7",
        fill: "none",
        stroke: color || "#3E445D",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      })
    )
  );
};

var CheveronIcon = exports.CheveronIcon = function CheveronIcon(_ref6) {
  var width = _ref6.width,
      color = _ref6.color,
      rotate = _ref6.rotate;
  return _react2.default.createElement(
    "svg",
    {
      width: width,
      height: width * 14.828 / 8.414,
      className: (0, _utils.prefixClass)("icon icon-cheveron"),
      transform: "rotate(" + (rotate ? rotate : 0) + ")",
      viewBox: "0 0 14.828 8.414"
    },
    _react2.default.createElement("title", null),
    _react2.default.createElement("g", { id: "icomoon-ignore" }),
    _react2.default.createElement("path", {
      fill: "none",
      stroke: color || DEFAULT_GRAY,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2px",
      d: "M9,18l6-6L9,6",
      transform: "translate(-4.586 16) rotate(-90)"
    })
  );
};

var RequiredInfoIcon = exports.RequiredInfoIcon = function RequiredInfoIcon(_ref7) {
  var width = _ref7.width,
      color = _ref7.color;

  return _react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: width || "11.591",
      height: (width | 10.149) * 11.591 / 10.149,
      viewBox: "0 0 11.591 10.149"
    },
    _react2.default.createElement(
      "g",
      { transform: "translate(-1.038 -2.397)" },
      _react2.default.createElement("path", {
        d: "M5.968,3.384,1.687,10.53a1.011,1.011,0,0,0,.864,1.516h8.562a1.011,1.011,0,0,0,.864-1.516L7.7,3.384a1.011,1.011,0,0,0-1.728,0Z",
        fill: "none",
        stroke: color || DEFAULT_GRAY,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1"
      }),
      _react2.default.createElement("line", {
        y2: "2.022",
        transform: "translate(6.832 5.982)",
        fill: "none",
        stroke: color || DEFAULT_GRAY,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1"
      }),
      _react2.default.createElement("line", {
        x2: "0.005",
        transform: "translate(6.832 10.025)",
        fill: "none",
        stroke: color || DEFAULT_GRAY,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1"
      })
    )
  );
};

var JsonIcon = exports.JsonIcon = function JsonIcon(_ref8) {
  var width = _ref8.width,
      color = _ref8.color;

  return _react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: width || "16.57",
      height: (width | 13) * 16.57 / 13,
      viewBox: "0 0 16.57 13"
    },
    _react2.default.createElement(
      "g",
      { transform: "translate(-374 -272.36)" },
      _react2.default.createElement("path", {
        d: "M17.59,16.55v-2.6a.635.635,0,0,1,.618-.65.651.651,0,0,0,0-1.3,1.906,1.906,0,0,0-1.854,1.95v2.6a1.27,1.27,0,0,1-1.236,1.3.651.651,0,0,0,0,1.3,1.27,1.27,0,0,1,1.236,1.3v2.6A1.906,1.906,0,0,0,18.208,25a.651.651,0,0,0,0-1.3.635.635,0,0,1-.618-.65v-2.6a2.641,2.641,0,0,0-.854-1.95A2.641,2.641,0,0,0,17.59,16.55Z",
        transform: "translate(359.5 260.36)",
        fill: color || "#3E445D"
      }),
      _react2.default.createElement("path", {
        d: "M3.09,4.55V1.95a.635.635,0,0,1,.618-.65A.635.635,0,0,0,4.326.65.635.635,0,0,0,3.708,0,1.906,1.906,0,0,0,1.854,1.95v2.6A1.27,1.27,0,0,1,.618,5.85a.651.651,0,0,0,0,1.3,1.27,1.27,0,0,1,1.236,1.3v2.6A1.906,1.906,0,0,0,3.708,13a.651.651,0,0,0,0-1.3.635.635,0,0,1-.618-.65V8.45A2.641,2.641,0,0,0,2.236,6.5,2.641,2.641,0,0,0,3.09,4.55Z",
        transform: "translate(390.57 285.36) rotate(180)",
        fill: color || "#3E445D"
      }),
      _react2.default.createElement(
        "g",
        { transform: "translate(381.315 276.15)" },
        _react2.default.createElement("rect", {
          width: "1.052",
          height: "2.855",
          rx: "0.526",
          transform: "translate(0.451 3.906)",
          fill: color || "#3E445D"
        }),
        _react2.default.createElement("circle", {
          cx: "0.901",
          cy: "0.901",
          r: "0.901",
          transform: "translate(0)",
          fill: color || "#3E445D"
        })
      )
    )
  );
};