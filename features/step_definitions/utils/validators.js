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

function validateTextEquals(text, expected) {
  return expect(text).to.equals(expected);
};

function validateElementTextEquals(element, expected) {
  return element.getText().then(function(text) {
    logger.info('validateElementTextEquals - expected: [%s], value: [%s]', expected, text);
    return expect(text).to.equal(expected);
  }, function(err) {
    logger.error('Error: ', err);
    return Q.reject(err);
  });
};

function validateElementTextMatch(element, regexp) {
  return element.getText().then(function(text) {
    logger.info('validateElementTextEquals - expected: [%s], value: [%s]', regexp, text);
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
  scope.validateElementTextEquals = validateElementTextEquals;
  scope.validateElementTextMatch = validateElementTextMatch;
  scope.validateArrayContains = validateArrayContains;
  scope.validateTextEquals = validateTextEquals;
};
