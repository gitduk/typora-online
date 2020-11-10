(function (exports, require, module, __filename, __dirname, process, global, Buffer) { return function (exports, require, module, __filename, __dirname) { (function() {
  var combine;

  combine = require('./helpers').combine;

  module.exports = {
    Emitter: require('./emitter'),
    Subscriber: require('./subscriber'),
    Signal: require('./signal'),
    Behavior: require('./behavior'),
    combine: combine
  };

}).call(this);

}.call(this, exports, require, module, __filename, __dirname); });