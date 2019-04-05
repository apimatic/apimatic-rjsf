"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowDownIcon = exports.ArrowUpIcon = exports.CloseIcon = exports.PlusIcon = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      fill: color || "#000",
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
      fill: color || "#000",
      d: "M324.5 330.5c0 6.25-2.5 12.5-7 17l-34 34c-4.5 4.5-10.75 7-17 7s-12.5-2.5-17-7l-73.5-73.5-73.5 73.5c-4.5 4.5-10.75 7-17 7s-12.5-2.5-17-7l-34-34c-4.5-4.5-7-10.75-7-17s2.5-12.5 7-17l73.5-73.5-73.5-73.5c-4.5-4.5-7-10.75-7-17s2.5-12.5 7-17l34-34c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l73.5 73.5 73.5-73.5c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l34 34c4.5 4.5 7 10.75 7 17s-2.5 12.5-7 17l-73.5 73.5 73.5 73.5c4.5 4.5 7 10.75 7 17z"
    })
  );
};

var ArrowUpIcon = exports.ArrowUpIcon = function ArrowUpIcon(_ref3) {
  var width = _ref3.width,
      color = _ref3.color;
  return _react2.default.createElement(
    "svg",
    {
      width: width,
      height: width * 448 / 416,
      className: (0, _utils.prefixClass)("icon icon-arrow-up"),
      viewBox: "0 0 416 448"
    },
    _react2.default.createElement("title", null),
    _react2.default.createElement("g", { id: "icomoon-ignore" }),
    _react2.default.createElement("path", {
      fill: color || "#000",
      d: "M402.75 242.75c0 8.5-3.5 16.5-9.25 22.5l-18.75 18.75c-6 6-14.25 9.5-22.75 9.5s-16.75-3.5-22.5-9.5l-73.5-73.25v176c0 18-15 29.25-32 29.25h-32c-17 0-32-11.25-32-29.25v-176l-73.5 73.25c-5.75 6-14 9.5-22.5 9.5s-16.75-3.5-22.5-9.5l-18.75-18.75c-6-6-9.5-14-9.5-22.5s3.5-16.75 9.5-22.75l162.75-162.75c5.75-6 14-9.25 22.5-9.25s16.75 3.25 22.75 9.25l162.75 162.75c5.75 6 9.25 14.25 9.25 22.75z"
    })
  );
};

var ArrowDownIcon = exports.ArrowDownIcon = function ArrowDownIcon(_ref4) {
  var width = _ref4.width,
      color = _ref4.color;
  return _react2.default.createElement(
    "svg",
    {
      width: width,
      height: width * 448 / 416,
      className: (0, _utils.prefixClass)("icon icon-arrow-down"),
      viewBox: "0 0 416 448"
    },
    _react2.default.createElement("title", null),
    _react2.default.createElement("g", { id: "icomoon-ignore" }),
    _react2.default.createElement("path", {
      fill: color || "#000",
      d: "M402.75 208c0 8.5-3.5 16.75-9.25 22.5l-162.75 163c-6 5.75-14.25 9.25-22.75 9.25s-16.75-3.5-22.5-9.25l-162.75-163c-6-5.75-9.5-14-9.5-22.5s3.5-16.75 9.5-22.75l18.5-18.75c6-5.75 14.25-9.25 22.75-9.25s16.75 3.5 22.5 9.25l73.5 73.5v-176c0-17.5 14.5-32 32-32h32c17.5 0 32 14.5 32 32v176l73.5-73.5c5.75-5.75 14-9.25 22.5-9.25s16.75 3.5 22.75 9.25l18.75 18.75c5.75 6 9.25 14.25 9.25 22.75z"
    })
  );
};