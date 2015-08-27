'use strict';

function _getLocator(value) {
  return value.locator().toString();
};

function sendKeys(element, keys, message) {
  return element.sendKeys(keys).then(function() {
    logger.info('sendKeys - [%s], element: [%s], value: [%s]', message, _getLocator(element), keys);
  }, function(err) {
    logger.error('sendKeys - [%s], element: [%s], value: [%s], error: [%s]', message, _getLocator(element), keys, err.message);
    return Q.reject(err);
  });
};

function click(element, message) {
  return element.click().then(function() {
    logger.info('click - [%s], element: [%s]', message, _getLocator(element));
  }, function(err) {
    logger.error('click - [%s], element: [%s], error: [%s]', message, _getLocator(element), err.message);
    return Q.reject(err);
  });
};

exports.static = function(scope) {
  scope.sendKeys = sendKeys;
  scope.click = click;
}
