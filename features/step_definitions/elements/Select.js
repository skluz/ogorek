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
  this.root = element(locator);

  this.getOptions = function () {
    return this.root.all(by.tagName('option')).map(function(option) {
      return option.getText();
    });
  };

  this.getSelectedOption = function () {
    var selectedOptionLocator = by.css('option[selected="selected"]');
    return _this.root.all(selectedOptionLocator).count().then(function (count) {
      if(count == 1)
        return _this.root.all(selectedOptionLocator).first().getText().then(function(text) {
          logger.info('getSelectedOption - element: [%s], selected option: [%s]', _this.root.locator(), text);
        })
      else
        return Q.reject(new Error('There should be just one element selected'));
    });
  };

  this.select = function (option) {
    return expectArrayContains(this.getOptions(), option).then(function() {
      logger.info('select option - element: [%s], option: [%s]', _this.root.locator(), option);
      return _this.root.element(by.cssContainingText('option', option)).click();
    }, function (err) {
      logger.error('Can\'t select chosen option: [' + option + ']');
      return Q.reject(err);
    })
  };

};

Select.prototype = new Element();
Select.prototype.constructor = Select;

module.exports = Select;