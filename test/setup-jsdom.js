var jsdom = require("jsdom");

// Setup the jsdom environment
// @see https://github.com/facebook/react/issues/5046
if (!global.hasOwnProperty("window")) {
  global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
  global.document.body.createTextRange = function() {
    return {
      setEnd: function() {},
      setStart: function() {},
      getBoundingClientRect: function() {
        return { right: 0 };
      },
      getClientRects: function() {
        return {
          length: 0,
          left: 0,
          right: 0,
        };
      },
    };
  };
  global.window = document.defaultView;
  global.navigator = global.window.navigator;
}

// atob
global.atob = require("atob");

// HTML debugging helper
global.d = function d(node) {
  console.log(require("html").prettyPrint(node.outerHTML, { indent_size: 2 }));
};
