'use strict';

var Element = function Element(by) {
  this.element = element(by);
};

Element.prototype.toString = function() {
  return '[class: ' + this.constructor.name + ', locator: ' + this.element.locator() + ']';
};

module.exports = Element;