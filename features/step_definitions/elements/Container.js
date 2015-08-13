'use strict';

var Container = function Container(by, locators) {

  this.element = element(by);

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