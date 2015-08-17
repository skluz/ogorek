'use strict';

var Container = function Container(locator, locators) {

  this.element = element(locator);

  for (var property in locators) {
    if (locators.hasOwnProperty(property)) {
      Object.defineProperty(this, property, {
        value: this.element.element(locators[property])
      })
    }
  }

};

Container.prototype.toString = function() {
  return '[class: ' + this.constructor.name + ', locator: ' + this.element.locator() + ']';
};

module.exports = Container;