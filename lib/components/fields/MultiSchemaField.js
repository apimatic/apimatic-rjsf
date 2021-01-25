"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _types = require("../../types");

var types = _interopRequireWildcard(_types);

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnyOfField = function (_Component) {
  _inherits(AnyOfField, _Component);

  function AnyOfField(props) {
    _classCallCheck(this, AnyOfField);

    var _this = _possibleConstructorReturn(this, (AnyOfField.__proto__ || Object.getPrototypeOf(AnyOfField)).call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        formData = _this$props.formData,
        options = _this$props.options;


    _this.state = {
      selectedOption: _this.getMatchingOption(formData, options)
    };
    return _this;
  }

  _createClass(AnyOfField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!(0, _utils.deepEquals)(this.props.formData, prevProps.formData) && this.props.idSchema.$id === prevProps.idSchema.$id) {
        var matchingOption = this.getMatchingOption(this.props.formData, this.props.options);

        if (!prevState || matchingOption === this.state.selectedOption) {
          return;
        }

        this.setState({
          selectedOption: matchingOption
        });
      }
    }
  }, {
    key: "getMatchingOption",
    value: function getMatchingOption(formData, options) {
      var rootSchema = this.props.registry.rootSchema;


      var option = (0, _utils.getMatchingOption)(formData, options, rootSchema);
      if (option !== 0) {
        return option;
      }
      // If the form data matches none of the options, use the currently selected
      // option, assuming it's available; otherwise use the first option
      return this && this.state ? this.state.selectedOption : 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          baseType = _props.baseType,
          disabled = _props.disabled,
          errorSchema = _props.errorSchema,
          formData = _props.formData,
          idPrefix = _props.idPrefix,
          idSchema = _props.idSchema,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          onFocus = _props.onFocus,
          options = _props.options,
          registry = _props.registry,
          uiSchema = _props.uiSchema,
          schema = _props.schema;


      var _SchemaField = registry.fields.SchemaField;
      var widgets = registry.widgets;
      var selectedOption = this.state.selectedOption;

      var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
          _getUiOptions$widget = _getUiOptions.widget,
          widget = _getUiOptions$widget === undefined ? "select" : _getUiOptions$widget,
          uiOptions = _objectWithoutProperties(_getUiOptions, ["widget"]);

      var Widget = (0, _utils.getWidget)({ type: "number" }, widget, widgets);

      var option = options[selectedOption] || null;
      var optionSchema = void 0;

      if (option) {
        // If the subschema doesn't declare a type, infer the type from the
        // parent schema
        optionSchema = option.type ? option : Object.assign({}, option, { type: baseType });
      }

      var enumOptions = options.map(function (option, index) {
        return {
          label: option.title || "Option " + (index + 1),
          value: index
        };
      });

      return _react2.default.createElement(
        "div",
        { className: "panel panel-default panel-body" },
        _react2.default.createElement(
          "div",
          { className: "form-group" },
          _react2.default.createElement(Widget, _extends({
            id: "" + idSchema.$id + (schema.oneOf ? "__oneof_select" : "__anyof_select"),
            schema: { type: "number", default: 0 },
            onChange: this.onOptionChange,
            onBlur: onBlur,
            onFocus: onFocus,
            value: selectedOption,
            options: { enumOptions: enumOptions }
          }, uiOptions))
        ),
        option !== null && _react2.default.createElement(_SchemaField, {
          schema: optionSchema,
          uiSchema: uiSchema,
          errorSchema: errorSchema,
          idSchema: idSchema,
          idPrefix: idPrefix,
          formData: formData,
          onChange: onChange,
          onBlur: onBlur,
          onFocus: onFocus,
          registry: registry,
          disabled: disabled
        })
      );
    }
  }]);

  return AnyOfField;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onOptionChange = function (option) {
    var selectedOption = parseInt(option, 10);
    var _props2 = _this2.props,
        formData = _props2.formData,
        onChange = _props2.onChange,
        options = _props2.options,
        registry = _props2.registry;
    var rootSchema = registry.rootSchema;

    var newOption = (0, _utils.retrieveSchema)(options[selectedOption], rootSchema, formData);

    // If the new option is of type object and the current data is an object,
    // discard properties added using the old option.
    var newFormData = undefined;
    if ((0, _utils.guessType)(formData) === "object" && (newOption.type === "object" || newOption.properties)) {
      newFormData = Object.assign({}, formData);

      var optionsToDiscard = options.slice();
      optionsToDiscard.splice(selectedOption, 1);

      // Discard any data added using other options
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = optionsToDiscard[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _option = _step.value;

          if (_option.properties) {
            for (var key in _option.properties) {
              if (newFormData.hasOwnProperty(key)) {
                delete newFormData[key];
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    // Call getDefaultFormState to make sure defaults are populated on change.
    onChange((0, _utils.getDefaultFormState)(options[selectedOption], newFormData, rootSchema));

    _this2.setState({
      selectedOption: parseInt(option, 10)
    });
  };
};

AnyOfField.defaultProps = {
  disabled: false,
  errorSchema: {},
  idSchema: {},
  uiSchema: {}
};

if (process.env.NODE_ENV !== "production") {
  AnyOfField.propTypes = {
    options: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    baseType: _propTypes2.default.string,
    uiSchema: _propTypes2.default.object,
    idSchema: _propTypes2.default.object,
    formData: _propTypes2.default.any,
    errorSchema: _propTypes2.default.object,
    registry: types.registry.isRequired
  };
}

exports.default = AnyOfField;