'use strict';

var logger = require('../utils/logger')(module);

var chai = require('chai');
var expect = chai.expect;

var Q = require('q');

var Actions = function() {

};

Actions.prototype.sendKeys = function(element, keys) {
  logger.info('sendKeys: [%s][%s] - start', element.locator(), keys);
  return element.sendKeys(keys).then(function() {
    logger.info('sendKeys: [%s][%s] - done', element.locator(), keys);
  }, function(err) {
    logger.error('sendKeys: [%s][%s] - error', element.locator(), keys);
    return Q.reject(err);
  });
};

module.exports = Actions;
