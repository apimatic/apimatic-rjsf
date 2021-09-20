"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextConsumer = exports.ContextProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppContext = React.createContext();

var ContextProvider = exports.ContextProvider = function (_React$Component) {
  _inherits(ContextProvider, _React$Component);

  function ContextProvider() {
    _classCallCheck(this, ContextProvider);

    return _possibleConstructorReturn(this, (ContextProvider.__proto__ || Object.getPrototypeOf(ContextProvider)).apply(this, arguments));
  }

  _createClass(ContextProvider, [{
    key: "render",
    value: function render() {
      return React.createElement(
        AppContext.Provider,
        { value: this.props.markdownRenderer },
        this.props.children
      );
    }
  }]);

  return ContextProvider;
}(React.Component);

var ContextConsumer = exports.ContextConsumer = function (_React$Component2) {
  _inherits(ContextConsumer, _React$Component2);

  function ContextConsumer() {
    _classCallCheck(this, ContextConsumer);

    return _possibleConstructorReturn(this, (ContextConsumer.__proto__ || Object.getPrototypeOf(ContextConsumer)).apply(this, arguments));
  }

  _createClass(ContextConsumer, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        AppContext.Consumer,
        null,
        function (markdownRenderer) {
          return _this3.props.children(markdownRenderer);
        }
      );
    }
  }]);

  return ContextConsumer;
}(React.Component);