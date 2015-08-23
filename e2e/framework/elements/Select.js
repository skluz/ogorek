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
  return click(this.rootElement, 'opening select list').then(function() {
    return click(this.rootElement.element(by.cssContainingText('option', option)), 'selecting specified option');
  }.bind(this));
};

module.exports = Select;