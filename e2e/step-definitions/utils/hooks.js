'use strict';

var Hooks = function() {

  this.BeforeStep(function(event, callback) {
    var step = event.getPayloadItem('step');
    var parts = step.getUri().split(/[\\/]/);
    var fileName = parts[parts.length - 2] + '/' + parts.pop();
    logger.error("[%s:%s] Step: %s", fileName, step.getLine(), step.getName());
    callback();
  });

  this.BeforeScenario(function (event, callback) {
    var scenario = event.getPayloadItem('scenario');
    var parts = scenario.getUri().split(/[\\/]/);
    var fileName = parts[parts.length - 2] + '/' + parts.pop();
    logger.info("[%s:%s] Scenario: %s", fileName, scenario.getLine(), scenario.getName());
    callback();
  });

  this.BeforeFeature(function (event, callback) {
    var feature = event.getPayloadItem('feature');
    var parts = feature.getUri().split(/[\\/]/);
    var fileName = parts[parts.length - 2] + '/' + parts.pop();
    logger.info("[%s:%s] Feature: %s", fileName, feature.getLine(), feature.getName());
    callback();
  });

};

module.exports = Hooks;