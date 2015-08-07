'use strict';

var logger = require('../utils/logger')(module);
var Q = require('q');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

function validateElementText(element, regexp) {
  logger.info('validateElementText: [%s][%s] - start', element.locator(), regexp);
  //return expect(element.getText()).to.eventually.match(regexp);
  return element.getText().then(function(text) {
    logger.info('validateElementText: [%s][%s][%s]', element.locator(), regexp, text);
    return expect(text).to.match(regexp);
  }, function(error) {
    logger.error("Error");
  });
};

exports.static = function(scope) {
  scope.validateElementText = validateElementText;
}
