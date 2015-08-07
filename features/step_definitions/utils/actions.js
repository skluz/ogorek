'use strict';

var logger = require('../utils/logger')(module);
var Q = require('q');

function sendKeys(element, keys) {
  logger.info('sendKeys: [%s][%s] - start', element.locator(), keys);
  return element.sendKeys(keys).then(function() {
    logger.info('sendKeys: [%s][%s] - done', element.locator(), keys);
  }, function(err) {
    logger.error('sendKeys: [%s][%s] - error', element.locator(), keys);
    return Q.reject(err);
  });
};

function click(element) {
  logger.info('click: [%s] - start', element.locator());
  return element.click().then(function() {
    logger.info('click: [%s] - done', element.locator());
  }, function(err) {
    logger.error('click: [%s] - error', element.locator());
    return Q.reject(err);
  });
};

exports.static = function(scope) {
  scope.sendKeys = sendKeys;
  scope.click = click;
}
