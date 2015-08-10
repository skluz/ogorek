'use strict';

var Element = function Element(locator) {
  this.element = element(locator);
};

Element.prototype.toString = function() {
  return '[class: ' + this.constructor.name + ', locator: ' + this.element.locator() + ']';
};

module.exports = Element;