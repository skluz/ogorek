'use strict';

var logger = require('../utils/logger')(module);
var Q = require('q');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

function validateEquals(promise, expected) {
  return promise.then(function (value) {
    logger.info('validateEquals [%s] - expected: [%s], value: [%s]', value.constructor.name, value, expected);
    return expect(value).to.equal(expected);
  }, function(err) {
    logger.error('Error: ', err);
    return Q.reject(err);
  });
};

function validateDeepEquals(promise, expected) {
  return promise.then(function (value) {
    // TODO: using .join for nicer String representation - can fail in case different object
    logger.info('validateDeepEquals [%s] - expected: [%s], value: [%s]', value.constructor.name, expected, value.join(','));
    return expect(value).to.deep.equal(expected);
  }, function(err) {
    logger.error('Error: ', err);
    return Q.reject(err);
  });
};

function elementTextShouldBeEmpty(promise) {
  return validateElementText(promise, /^$/);
};

function validateElementText(element, regexp) {
  logger.info('validateElementText - element: [%s], regexp: [%s] - start', element.locator(), regexp);
  //return expect(element.getText()).to.eventually.match(regexp);
  return element.getText().then(function(text) {
    logger.info('validateElementText - expected: [%s], value: [%s]', element.locator(), regexp, text);
    return expect(text).to.match(regexp);
  }, function(err) {
    logger.error('Error: ', err);
    return Q.reject(err);
  });
};

function validateArrayContains(array, key) {
  return array.then(function (values) {
    logger.info('validateArrayContains - array: [%s], key: [%s]', values, key);
    return expect(values).to.contains(key);
    }, function(err) {
      return Q.reject(err);
    });
};

exports.static = function(scope) {
  scope.validateElementText = validateElementText;
  scope.validateDeepEquals = validateDeepEquals;
  scope.validateEquals = validateEquals;
  scope.validateArrayContains = validateArrayContains;
};
