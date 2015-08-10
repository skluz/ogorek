'use strict';

require('../utils/validators').static(global);

var Element = require('./').Element;
var Q = require('q');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;



var Select = function Select (locator) {

  //Element.apply(this, arguments);

  this.element = element(locator);

  this.getOptions = function () {
    return this.element.all(by.tagName('option')).map(function(option) {
      return option.getText();
    });
  };

  this.getSelectedOption = function () {
    var root = this.element;
    var selectedOptionLocator = by.css('option[selected="selected"]');
    return root.all(selectedOptionLocator).count().then(function (count) {
      if(count == 1)
        return root.all(selectedOptionLocator).first().getText();
      else
        return Q.reject(new Error('There should be just one element selected'));
    });
  };

  this.select = function (option) {
    return validateArrayContains(this.getOptions(), option).then(function() {

    }, function (err) {
      return Q.reject('Array doesnt contains option: ' + option, err);
    })
  };

};

Select.prototype = new Element();
Select.prototype.constructor = Select;

module.exports = Select;