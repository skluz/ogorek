'use strict';

var logger = require('../utils/logger')(module);
var Q = require('q');

function valueString(value) {
  return value.locator().toString();
};

function sendKeys(element, keys) {
  return element.sendKeys(keys).then(function() {
    logger.info('sendKeys - element: [%s], value: [%s]', valueString(element), keys);
  }, function(err) {
    return Q.reject(err);
  });
};

function click(element) {
  return element.click().then(function() {
    logger.info('click - element: [%s]', valueString(element));
  }, function(err) {
    return Q.reject(err);
  });
};

exports.static = function(scope) {
  scope.sendKeys = sendKeys;
  scope.click = click;
}
