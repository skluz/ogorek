var logger = require('../utils/logger')(module);

var Hooks = function() {

  this.BeforeStep(function(event, callback) {
    var stepName = event.getPayloadItem('step').getName();
    callback();
  });

};

module.exports = Hooks;