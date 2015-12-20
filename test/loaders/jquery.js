var jQuery = require('../vendor/jquery-1.11.3');
if (typeof window.jQuery !== "undefined") {
  // Make sure we loaded jQuery with noGlobal behavior.
  throw new Error("jQuery present on window");
}
module.exports = function(src, callback) {
  return jQuery.getScript(src, callback);
};
