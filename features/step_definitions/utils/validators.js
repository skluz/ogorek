'use strict';

var logger = require('../utils/logger')(module);
var Q = require('q');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

function valueClass(value) {
  if(typeof value === 'undefined') {
    return 'undefined';
  } else {
    return value.constructor.name;
  }
};

function expectElementEquals(promise, expected) {
  return promise.then(function (value) {
    logger.info('expectElementEquals [class:%s] - expected: [%s], value: [%s]', valueClass(value), expected, value);
    return expect(value).to.equal(expected);
  }, function(err) {
    logger.error('Error: ', err);
    return Q.reject(err);
  });
};

function expectElementDeepEquals(promise, expected) {
  return promise.then(function (value) {
    var s = 'unknown';
    if(Array.isArray(value)) {
      s = value.join(',')
    }
    logger.info('expectElementDeepEquals [class:%s] - expected: [%s], value: [%s]', valueClass(value), expected, s);
    return expect(value).to.deep.equal(expected);
  }, function(err) {
    logger.error('Error: ', err);
    return Q.reject(err);
  });
};

function expectElementTextEquals(element, expected) {
  return element.getText().then(function(text) {
    logger.info('expectElementTextEquals - expected: [%s], value: [%s]', expected, text);
    return expect(text).to.equal(expected);
  }, function(err) {
    logger.error('Error: ', err);
    return Q.reject(err);
  });
};

function expectElementTextMatch(element, regexp) {
  return element.getText().then(function(text) {
    logger.info('expectElementTextMatch - expected: [%s], value: [%s]', regexp, text);
    return expect(text).to.match(regexp);
  }, function(err) {
    logger.error('Error: ', err);
    return Q.reject(err);
  });
};

function expectArrayContains(array, key) {
  return array.then(function (values) {
    logger.info('expectArrayContains - array: [%s], key: [%s]', values, key);
    return expect(values).to.contains(key);
    }, function(err) {
      return Q.reject(err);
    });
};

function expectArrayLength(array, length) {
  return array.then(function (values) {
    logger.info('expectArrayLength - array: [%s], length: [%s]', values, length);
    return expect(values).to.have.length(length);
  }, function(err) {
    return Q.reject(err);
  });
};

exports.static = function(scope) {
  scope.expectElementEquals = expectElementEquals;
  scope.expectElementDeepEquals = expectElementDeepEquals;
  scope.expectElementTextEquals = expectElementTextEquals;
  scope.expectElementTextMatch = expectElementTextMatch;
  scope.expectArrayContains = expectArrayContains;
  scope.expectArrayLength = expectArrayLength;
};
