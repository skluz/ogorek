'use strict';

var Element = require('elements').Element;

var Select = function Select () {
  Element.call(this);
  Element.apply(this, arguments);
};

Select.prototype = new Element();
Select.prototype.constructor = Select;

Select.prototype.getOptions = function () {
  return this.rootElement.all(by.tagName('option')).map(function(option) {
    return option.getText();
  });
};

Select.prototype.getSelectedOption = function () {
  return this.rootElement.$('option:checked').getText();
};

Select.prototype.select = function (option) {
  logger.info('selecting - option: [%s], list: [%s]', option, this.toString());
  click(this.rootElement, 'opening select list');
  return click(this.rootElement.element(by.cssContainingText('option', option)), 'selecting specified option');
};

Select.prototype.selectPromise = function (option) {
  return Promise.resolve()
    .then(function() { logger.info('selecting - option: [%s], list: [%s]', option, this.toString());}.bind(this))
    .then(function() { return click(this.rootElement, 'opening select list');}.bind(this))
    .then(function() { return click(this.rootElement.element(by.cssContainingText('option', option)), 'selecting specified option');}.bind(this))
    .catch(function(err) {
      logger.error('selecting failed - option: [%s], list: [%s], error: [%s]', option, this.toString(), err.message);
      return Promise.reject(err);
  }.bind(this));
};

module.exports = Select;