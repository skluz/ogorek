'use strict';

var Page = require('pages').Page;
var Select = require('elements').Select;
var Table = require('elements').Table;
var Container = require('elements').Container;

var CalculatorPage = function () {

  Page.apply(this, arguments);

  this.validityIndicator = element(by.model('first'));

  this.firstField = element(by.model('first'));
  this.secondField = element(by.model('second'));
  this.operatorSelect = new Select(element(by.model('operator')));
  this.goButton = $('#gobutton');

  this.resultTable = new Table($('.table'), {
    columns: [
      {name: 'time', type: 'text'},
      {name: 'expression', type: 'text'},
      {name: 'result', type: 'text'}
    ]
  });

};

CalculatorPage.prototype = new Page();
CalculatorPage.prototype.constructor = CalculatorPage;

CalculatorPage.prototype.multiply = function(x, y) {
  return this.performCalculation(x, y, '*');
};

CalculatorPage.prototype.performCalculation = function (x, y, operator) {
  return Promise.resolve()
    .then(function() { logger.info('performing calculation - x: [%s], y: [%s], operator: [%s]', x, y, operator); })
    .then(function() { return sendKeys(this.firstField, x, 'filling first field');}.bind(this))
    .then(function() { return this.operatorSelect.select(operator);}.bind(this))
    .then(function() { return sendKeys(this.secondField, y, 'filling second field');}.bind(this))
    .then(function() { return click(this.goButton, 'submitting calculation');}.bind(this))
    .catch(function(err) {
      logger.error('performing calculation failed - message: [%s]', err.message);
      return Q.reject(err);
    })
};

CalculatorPage.prototype.x = function() {
  var result = {};
  return Promise.resolve()
    .then(function() {
      return this.goButton.getText().then(function(text) {
        result.buttonText = text;
      })
    }.bind(this))
    .then(function() {
      return result;
    })
};

CalculatorPage.prototype.open = function() {
  return Page.prototype.open.call(this, '/protractor-demo/');
};

module.exports = new CalculatorPage();