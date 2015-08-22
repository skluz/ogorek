'use strict';

var Element = function Element(rootElement) {
  this.rootElement = rootElement;
};

Element.prototype.toString = function() {
  return '[class: ' + this.constructor.name + ', locator: ' + this.rootElement.locator() + ']';
};

module.exports = Element;