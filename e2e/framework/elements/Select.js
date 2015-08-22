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
  return this.rootElement.element(by.css('option[selected="selected"]'));
  /*
   var selectedOptionLocator = by.css('option[selected="selected"]');
   return _this.rootElement.all(selectedOptionLocator).count().then(function (count) {
   if(count == 1)
   return _this.rootElement.all(selectedOptionLocator).first().getText().then(function(text) {
   logger.info('getSelectedOption - element: [%s], selected option: [%s]', _this.rootElement.locator(), text);
   })
   else
   return Q.reject(new Error('There should be just one element selected'));
   */
};

Select.prototype.select = function (option) {
  return click(this.rootElement, 'select visible field').then(function() {
    return click(this.rootElement.element(by.cssContainingText('option', option)), 'select specific option');
  }.bind(this));
};

module.exports = Select;