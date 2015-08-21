'use strict';

var Container = function Container(rootElement, locators) {

  this.rootElement = rootElement;

  for (var property in locators) {
    if (locators.hasOwnProperty(property)) {
      Object.defineProperty(this, property, {
        value: this.rootElement.element(locators[property])
      })
    }
  }

};

Container.prototype.toString = function() {
  return '[class: ' + this.constructor.name + ', locator: ' + this.element.locator() + ']';
};

module.exports = Container;