var logger = require('../utils/logger')(module);

var Hooks = function() {

  this.BeforeStep(function(event, callback) {
    var step = event.getPayloadItem('step');
    var parts = step.getUri().split(/[\\/]/);
    var fileName = parts[parts.length - 2] + '/' + parts.pop();
    logger.info("[%s:%s] Step: %s", fileName, step.getLine(), step.getName());
    callback();
  });

  this.Before(function (scenario, callback) {
    var parts = scenario.getUri().split(/[\\/]/);
    var fileName = parts[parts.length - 2] + '/' + parts.pop();
    logger.info("[%s:%s] Scenario: %s", fileName, scenario.getLine(), scenario.getName());
    callback();
  });

};

module.exports = Hooks;