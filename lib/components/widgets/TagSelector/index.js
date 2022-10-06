"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _utils = require("../../../utils");

var _context = require("../../context");

var _Icons = require("../../Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          _onChange = _props.onChange,
          _props$value = _props.value,
          value = _props$value === undefined ? options[0] : _props$value,
          _props$className = _props.className,
          className = _props$className === undefined ? "" : _props$className;


      var onClick = function onClick(option) {
        return function () {
          _onChange && _onChange(option.value);
        };
      };

      var selectValue = options && options[value.index];

      var selectedLabel = selectValue && selectValue.label;

      var selectLinkTo = selectValue && selectValue.value.linkTo;

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
          { className: "__tags-wrapper --variant-tag" },
          options.map(function (option, index) {
            var value = option.value;

            var linkTo = value.linkTo;
            return _react2.default.createElement(
              "div",
              { className: "tag-wrapper-item" },
              _react2.default.createElement(
                "span",
                {
                  key: "option-item-" + index + "-" + option.label,
                  className: "--tag tag-label " + (value.index === index ? "--active" : ""),
                  onClick: onClick(option)
                },
                option.label
              ),
              linkTo && value.index === index && _react2.default.createElement(
                _context.ContextConsumer,
                null,
                function (_ref) {
                  var onRouteChange = _ref.onRouteChange;
                  return _react2.default.createElement(
                    "span",
                    {
                      key: "option-item-" + index + "-" + option.label,
                      className: "--tag tag-link " + (value.index === index ? "--active" : ""),
                      onClick: function onClick() {
                        console.log(linkTo);
                        onRouteChange(linkTo);
                      }
                    },
                    _react2.default.createElement(_Icons.TagLinkSvg, { width: "10", color: "#fff" })
                  );
                }
              )
            );
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "__tags-wrapper --variant-select" },
          _react2.default.createElement(_reactSelect2.default, {
            className: "" + (0, _utils.prefixClass)("form-control"),
            classNamePrefix: "react-select",
            value: selectValue,
            options: options,
            onChange: function onChange(_ref2) {
              var value = _ref2.value;
              return _onChange(value);
            }
          }),
          _react2.default.createElement(
            "span",
            { className: "tags-variant-select-link" },
            _react2.default.createElement(_Icons.TagLinkSvg, { width: "10", color: "#0062ff" }),
            _react2.default.createElement(
              _context.ContextConsumer,
              null,
              function (_ref3) {
                var onRouteChange = _ref3.onRouteChange;
                return _react2.default.createElement(
                  "a",
                  { onClick: function onClick() {
                      return onRouteChange(selectLinkTo);
                    } },
                  selectedLabel
                );
              }
            )
          )
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