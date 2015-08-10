'use strict';

var logger = require('../utils/logger')(module);
var Q = require('q');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

function validateEquals(value, expected) {
  return value.then(function (array) {
    logger.info('validateDeepEquals [%s] - expected: [%s], value: [%s]', array.constructor.name, array, expected);
    return expect(array).to.equal(expected);
  }, function(err) {
    logger.error('Error: ', err);
    return Q.reject(err);
  });
};

function validateDeepEquals(value, expected) {
  return value.then(function (array) {
    logger.info('validateDeepEquals [%s] - expected: [%s], value: [%s]', array.constructor.name, array, expected.join(','));
    return expect(array).to.deep.equal(expected);
  }, function(err) {
    logger.error('Error: ', err);
    return Q.reject(err);
  });
};

function elementTextShouldBeEmpty(element) {
  return validateElementText(element, /^$/);
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
    return expect(values).to.contains(key).then(function () {
      return Q(this);
    }, function(err) {
      return Q.reject('dupa!', err);
    })
  });
};

exports.static = function(scope) {
  scope.validateElementText = validateElementText;
  scope.validateDeepEquals = validateDeepEquals;
  scope.validateEquals = validateEquals;
  scope.validateArrayContains = validateArrayContains;
};
