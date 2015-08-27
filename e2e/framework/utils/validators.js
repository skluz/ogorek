'use strict';

function _getType(value) {
  if(typeof value === 'undefined') {
    return 'undefined';
  } else {
    return value.constructor.name;
  }
};

function _getLocator(value) {
  return value.locator().toString();
};

function _asString(value) {
  if(Array.isArray(value)) {
    return value.join(',');
  } else if(value instanceof Object) {
    return JSON.stringify(value);
  } else {
    return value;
  }
};

function expectPromiseValueEqual(promise, expectedValue, message) {
  return promise.then(function (actualValue) {
    logger.info('expectPromiseValueEqual [%s], type: [%s], expected: [%s], actual: [%s]', message, _getType(actualValue), _asString(expectedValue), actualValue);
    return expect(actualValue).to.equal(expectedValue, message);
  }, function(err) {
    logger.error('expectPromiseValueEqual [%s], expected: [%s], error: [%s]', message, expectedValue, err.message);
    return Q.reject(err);
  });

};
function expectPromiseValueDeepEqual(promise, expectedValue, message) {
  return promise.then(function (actualValue) {
    logger.info('expectPromiseValueDeepEqual [%s], type: [%s], expected: [%s], actual: [%s]', message, _getType(actualValue), expectedValue, _asString(actualValue));
    return expect(actualValue).to.deep.equal(expectedValue, message);
  }, function(err) {
    logger.error('expectPromiseValueDeepEqual [%s], expected: [%s], message: [%s], error: [%s]', message, expectedValue, err.message);
    return Q.reject(err);
  });
};

function expectElementTextEqual(element, expectedValue, message) {
  return element.getText().then(function(actualValue) {
    logger.info('expectElementTextEqual - [%s], locator: [%s], expected: [%s], actual: [%s]', message, _getLocator(element), expectedValue, actualValue);
    return expect(actualValue).to.equal(expectedValue, message);
  }, function(err) {
    logger.error('expectElementTextEqual - [%s], locator: [%s], expected: [%s], error: [%s]', _getLocator(element), expectedValue, err.message);
    return Q.reject(err);
  });
};

function expectElementTextMatch(element, regExpToMatch, message) {
  return element.getText().then(function(actualValue) {
    logger.info('expectElementTextMatch - regExpToMatch: [%s], actual: [%s], message: [%s]', regExpToMatch, actualValue, message);
    return expect(actualValue).to.match(regExpToMatch, message);
  }, function(err) {
    logger.error('expectElementTextMatch - regExpToMatch: [%s], message: [%s], error: [%s]', regExpToMatch, message, err.message);
    return Q.reject(err);
  });
};

function expectElementTextContains(element, textToContains, message) {
  return element.getText().then(function(actualValue) {
    logger.info('expectElementTextContains - textToContains: [%s], actual: [%s], message: [%s]', textToContains, actualValue, message);
    return expect(actualValue).to.have.string(textToContains, message);
  }, function(err) {
    logger.error('expectElementTextContains - textToContains: [%s], message: [%s], error: [%s]', textToContains, message, err.message);
    return Q.reject(err);
  });
};

function expectPromiseArrayValueContains(promiseArray, keyToContains, message) {
  return promiseArray.then(function (actualArray) {
    logger.info('expectPromiseArrayValueContains - array: [%s], key: [%s], message: [%s]', actualArray, keyToContains, message);
    return expect(actualArray).to.include(keyToContains, message);
    }, function(err) {
      logger.error('expectPromiseArrayValueContains - key: [%s], message: [%s], error: [%s]', keyToContains, message, err.message);
      return Q.reject(err);
    });
};

function expectPromiseArrayValueLength(promiseArray, expectedLength, message) {
  return promiseArray.then(function (actualArray) {
    logger.info('expectPromiseArrayValueLength - array: [%s], length: [%s], message: [%s]', actualArray, expectedLength, message);
    return expect(actualArray).to.have.length(expectedLength, message);
  }, function(err) {
    logger.error('expectPromiseArrayValueLength - length: [%s], message: [%s], error: [%s]', length, message, err.message);
    return Q.reject(err);
  });
};

function expectElementIsEnabled(element, message) {
  return expectElementEnabledStatus(element, true, message);
};

function expectElementEnabledStatus(element, expectedStatus, message) {
  return element.isEnabled().then(function(isEnabled) {
    logger.info('expectElementEnabledStatus - element: [%s], expected: [%s], value: [%s], message: [%s]', _getLocator(element), expectedStatus, isEnabled, message);
    return expect(expectedStatus).to.be.equal(isEnabled, message);
  }, function(err) {
    logger.error("expectElementEnabledStatus - element: [%s], expected: [%s], message: [%s], error: [%s]", _getLocator(element), expectedStatus, message, err.message);
    return Q.reject(err);
  });
};

function expectElementIsDisplayed(element, message) {
  return expectElementDisplayedStatus(element, true, message);
};

function expectElementDisplayedStatus(element, expectedStatus, message) {
  return element.isDisplayed().then(function(isEnabled) {
    logger.info('expectElementDisplayedStatus - element: [%s], expected: [%s], value: [%s], message: [%s]', _getLocator(element), expectedStatus, isEnabled, message);
    return expect(expectedStatus).to.be.equal(isEnabled, message);
  }, function(err) {
    logger.error("expectElementDisplayedStatus - element: [%s], expected: [%s], message: [%s], error: [%s]", _getLocator(element), expectedStatus, message, err.message);
    return Q.reject(err);
  });
};

exports.static = function(scope) {
  scope.expectPromiseValueEqual = expectPromiseValueEqual;
  scope.expectPromiseValueDeepEqual = expectPromiseValueDeepEqual;
  scope.expectElementTextEqual = expectElementTextEqual;
  scope.expectElementTextMatch = expectElementTextMatch;
  scope.expectElementTextContains = expectElementTextContains;
  scope.expectPromiseArrayValueContains = expectPromiseArrayValueContains;
  scope.expectPromiseArrayValueLength = expectPromiseArrayValueLength;
  scope.expectElementIsEnabled = expectElementIsEnabled;
  scope.expectElementIsDisplayed = expectElementIsDisplayed;
};