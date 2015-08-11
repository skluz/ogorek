'use strict';

require('../utils/validators').static(global);
var logger = require('../utils/logger')(module);


var Element = require('./').Element;
var Q = require('q');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var Select = function Select (locator) {

  var _this = this;

  //Element.apply(this, arguments);

  this.element = element(locator);

  this.getOptions = function () {
    return this.element.all(by.tagName('option')).map(function(option) {
      return option.getText();
    });
  };

  this.getSelectedOption = function () {
    var selectedOptionLocator = by.css('option[selected="selected"]');
    return _this.element.all(selectedOptionLocator).count().then(function (count) {
      if(count == 1)
        return _this.element.all(selectedOptionLocator).first().getText();
      else
        return Q.reject(new Error('There should be just one element selected'));
    });
  };

  this.select = function (option) {
    return validateArrayContains(this.getOptions(), option).then(function() {
      logger.info('select: [%s]', option);
      return _this.element.element(by.cssContainingText('option', option)).click();
    }, function (err) {
      logger.error('Can\'t select chosen option: [' + option + ']');
      return Q.reject(err);
    })
  };

};

Select.prototype = new Element();
Select.prototype.constructor = Select;

module.exports = Select;