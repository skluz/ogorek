'use strict';

function valueString(value) {
  return value.locator().toString();
};

function sendKeys(element, keys) {
  return element.sendKeys(keys).then(function() {
    logger.info('sendKeys - element: [%s], value: [%s]', valueString(element), keys);
  }, function(err) {
    logger.error('sendKeys - element: [%s], value: [%s], message: [%s], error: [%s]', valueString(element), keys, message, err.message);
    return Q.reject(err);
  });
};

function click(element, message) {
  return element.click().then(function() {
    logger.info('click - element: [%s], message: [%s]', valueString(element), message);
  }, function(err) {
    logger.error('click - element: [%s], message: [%s], error: [%s]', valueString(element), message, err.message);
    return Q.reject(err);
  });
};

exports.static = function(scope) {
  scope.sendKeys = sendKeys;
  scope.click = click;
}
