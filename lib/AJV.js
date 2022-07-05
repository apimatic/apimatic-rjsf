"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AJV = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ajv = require("ajv");

var _ajv2 = _interopRequireDefault(_ajv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AJV = exports.AJV = function () {
  function AJV() {
    _classCallCheck(this, AJV);
  }

  _createClass(AJV, null, [{
    key: "initializeAJV",
    value: function initializeAJV(definitions) {
      var ajv = new _ajv2.default({
        errorDataPath: "property",
        allErrors: true
      });
      // add custom formats
      ajv.addFormat("data-url", /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/);
      ajv.addFormat("color", /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/);

      ajv.addSchema(definitions, "ModelSchemas");

      return ajv;
    }
  }, {
    key: "getInstance",
    value: function getInstance() {
      if (AJV.ajv) {
        return AJV.ajv;
      }
    }
  }, {
    key: "setInstance",
    value: function setInstance(definitions) {
      AJV.ajv = AJV.initializeAJV(definitions);
    }
  }]);

  return AJV;
}();