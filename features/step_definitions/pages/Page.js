'use strict';

var logger = require('../utils').logger;

var chai = require('chai');
var expect = chai.expect;

var Page = function () {
  this.x = 'dupa';
};

Page.prototype.open = function(url) {
  logger.info('Opening page: %s', url);
  return browser.get(url).then(function() {
    logger.info("Page opened");
  }, function(err) {
    return Q.reject(err);
  })
};

Page.prototype.validateTitle = function(regexp) {
  logger.info("Validating page title against: %s", regexp)
  return expect(browser.getTitle()).to.eventually.match(regexp);
};

module.exports = Page;