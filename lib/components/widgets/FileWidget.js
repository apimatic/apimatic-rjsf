"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function addNameToDataURL(dataURL, name) {
  return dataURL.replace(";base64", ";name=".concat(name, ";base64"));
}
function processFile(file) {
  var name = file.name,
    size = file.size,
    type = file.type;
  return new Promise(function (resolve, reject) {
    var reader = new window.FileReader();
    reader.onload = function (event) {
      resolve({
        dataURL: addNameToDataURL(event.target.result, name),
        name: name,
        size: size,
        type: type
      });
    };
    reader.readAsDataURL(file);
  });
}
function processFiles(files) {
  return Promise.all([].map.call(files, processFile));
}
function FilesInfo(props) {
  var filesInfo = props.filesInfo;
  if (filesInfo.length === 0) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: (0, _utils.prefixClass)("file-info")
  }, filesInfo.map(function (fileInfo, key) {
    var name = fileInfo.name,
      size = fileInfo.size,
      type = fileInfo.type;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("strong", null, name), " (", type, ", ", size, " bytes)");
  }));
}
function extractFileInfo(dataURLs) {
  return dataURLs.filter(function (dataURL) {
    return typeof dataURL !== "undefined" && dataURL.includes(",");
  }).map(function (dataURL) {
    var _dataURItoBlob = (0, _utils.dataURItoBlob)(dataURL),
      blob = _dataURItoBlob.blob,
      name = _dataURItoBlob.name;
    return {
      name: name,
      size: blob.size,
      type: blob.type
    };
  });
}
var FileWidget = /*#__PURE__*/function (_Component) {
  _inherits(FileWidget, _Component);
  var _super = _createSuper(FileWidget);
  function FileWidget(props) {
    var _this;
    _classCallCheck(this, FileWidget);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var _this$props = _this.props,
        multiple = _this$props.multiple,
        onChange = _this$props.onChange;
      processFiles(event.target.files).then(function (filesInfo) {
        var state = {
          values: filesInfo.map(function (fileInfo) {
            return fileInfo.dataURL;
          }),
          filesInfo: filesInfo
        };
        (0, _utils.setState)(_assertThisInitialized(_this), state, function () {
          if (multiple) {
            onChange(state.values);
          } else {
            onChange(state.values[0]);
          }
        });
      });
    });
    var value = props.value;
    var values = Array.isArray(value) ? value : [value];
    _this.state = {
      values: values,
      filesInfo: extractFileInfo(values)
    };
    return _this;
  }
  _createClass(FileWidget, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _utils.shouldRender)(this, nextProps, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        multiple = _this$props2.multiple,
        id = _this$props2.id,
        readonly = _this$props2.readonly,
        disabled = _this$props2.disabled,
        autofocus = _this$props2.autofocus;
      var filesInfo = this.state.filesInfo;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("input", {
        ref: function ref(_ref) {
          return _this2.inputRef = _ref;
        },
        id: id,
        type: "file",
        disabled: readonly || disabled,
        onChange: this.onChange,
        defaultValue: "",
        autoFocus: autofocus,
        multiple: multiple
      })), /*#__PURE__*/_react.default.createElement(FilesInfo, {
        filesInfo: filesInfo
      }));
    }
  }]);
  return FileWidget;
}(_react.Component); /* istanbul ignore else */
_defineProperty(FileWidget, "defaultProps", {
  multiple: false,
  autofocus: false
});
if (process.env.NODE_ENV !== "production") {
  FileWidget.propTypes = {
    multiple: _propTypes.default.bool,
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
    autofocus: _propTypes.default.bool
  };
}
var _default = FileWidget;
exports.default = _default;