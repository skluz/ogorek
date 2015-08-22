'use strict';

var Page = function () {
  this.validityIndicator = null;
};

Page.prototype.open = function(url) {
  logger.info('Opening page: %s', url);
  return browser.get(url).then(function() {
    logger.info('Page opened: %s', url);
  }, function(err) {
    logger.error('Cannot open page: %s, error: [%s]', url, err.message);
    return Q.reject(err);
  })
};

Page.prototype.validate = function() {
  if(this.validityIndicator === undefined || this.validityIndicator === null) {
    throw new Error('validityIndicator element property should be defined to validate page');
  } else {
    logger.info('Validating page against displayed element: %s', this.validityIndicator.locator().toString());
    return expectElementIsDisplayed(this.validityIndicator, 'Page should be valid when element is displayed');
  }
};

module.exports = Page;