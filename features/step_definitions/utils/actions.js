'use strict';

var logger = require('../utils/logger')(module);
var Q = require('q');

function sendKeys(element, keys) {
  return element.sendKeys(keys).then(function() {
    logger.info('sendKeys: [%s][%s]', element.locator(), keys);
  }, function(err) {
    return Q.reject(err);
  });
};

function click(element) {
  return element.click().then(function() {
    logger.info('click: ' + element.locator());
  }, function(err) {
    return Q.reject(err);
  });
};

exports.static = function(scope) {
  scope.sendKeys = sendKeys;
  scope.click = click;
}
