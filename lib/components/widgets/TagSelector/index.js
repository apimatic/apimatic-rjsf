"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var areEqualObjs = function areEqualObjs(obj1, obj2) {
  if (obj1 && obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  return false;
};

var TagSelector = function (_React$Component) {
  _inherits(TagSelector, _React$Component);

  function TagSelector() {
    _classCallCheck(this, TagSelector);

    return _possibleConstructorReturn(this, (TagSelector.__proto__ || Object.getPrototypeOf(TagSelector)).apply(this, arguments));
  }

  _createClass(TagSelector, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          options = _props.options,
          onChange = _props.onChange,
          _props$value = _props.value,
          value = _props$value === undefined ? options[0] : _props$value,
          _props$className = _props.className,
          className = _props$className === undefined ? "" : _props$className;


      var onClick = function onClick(option) {
        return function () {
          onChange && onChange(option.value);
        };
      };

      return _react2.default.createElement(
        "div",
        { className: "tag-selector " + className },
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
                key: "option-item-" + option.label,
                className: "--tag " + (areEqualObjs(option.value, value) ? "--active" : ""),
                onClick: onClick(option)
              },
              option.label
            );
          })
        )
      );
    }
  }]);

  return TagSelector;
}(_react2.default.Component);

TagSelector.defaultProps = {
  title: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.any,
    value: _propTypes2.default.any
  })).isRequired,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.any
};

exports.default = TagSelector;