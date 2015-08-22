'use strict';

module.exports = function() {

  this.BeforeStep(function(event, callback) {
    var step = event.getPayloadItem('step');
    var parts = step.getUri().split(/[\\/]/);
    var fileName = parts[parts.length - 2] + '/' + parts.pop();
    logger.step("[%s:%s] %s", fileName, step.getLine(), step.getName());
    callback();
  });

  this.BeforeScenario(function (event, callback) {
    var scenario = event.getPayloadItem('scenario');
    var parts = scenario.getUri().split(/[\\/]/);
    var fileName = parts[parts.length - 2] + '/' + parts.pop();
    logger.scenario("[%s:%s] %s, tags: [%s]", fileName, scenario.getLine(), scenario.getName(), _tagsToString(scenario));
    callback();
  });

  this.BeforeFeature(function (event, callback) {
    var feature = event.getPayloadItem('feature');
    var parts = feature.getUri().split(/[\\/]/);
    var fileName = parts[parts.length - 2] + '/' + parts.pop();
    logger.feature("[%s:%s] %s, tags: [%s]", fileName, feature.getLine(), feature.getName(), _tagsToString(feature));
    callback();
  });

  var _tagsToString = function(element) {
    var result = new Array();
    element.getTags().forEach(function(tag) {
      result.push(tag.getName());
    });
    return result.join(', ');
  };

};