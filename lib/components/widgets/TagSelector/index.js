"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var areEqualObjs = function areEqualObjs(obj1, obj2) {
  if (obj1 && obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  return false;
};

var TagSelector = function TagSelector(props) {
  var title = props.title,
      options = props.options,
      onChange = props.onChange;

  var _useState = (0, _react.useState)(options[0]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedItem = _useState2[0],
      setSelectedItem = _useState2[1];

  var onClick = function onClick(option) {
    return function () {
      setSelectedItem(option);
      onChange && onChange(option.value);
    };
  };

  return _react2.default.createElement(
    "div",
    { className: "tag-selector" },
    _react2.default.createElement(
      "span",
      { className: "__title --tag" },
      title
    ),
    _react2.default.createElement(
      "div",
      { className: "__tags-wrapper" },
      options.map(function (option) {
        return _react2.default.createElement(
          "span",
          {
            className: "--tag " + (areEqualObjs(option, selectedItem) ? "--active" : ""),
            onClick: onClick(option)
          },
          option.label
        );
      })
    )
  );
};

exports.default = TagSelector;