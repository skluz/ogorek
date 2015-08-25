'use strict';

var Page = require('pages').Page;
var Select = require('elements').Select;
var Table = require('elements').Table;

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
  return this.performCalculationPromise(x, y, '*');
};

CalculatorPage.prototype.performCalculationFlow = function (x, y, operator) {
  logger.info('performing calculation - x: [%s], y: [%s], operator: [%s]', x, y, operator);
  sendKeys(this.firstField, x, 'filling first field');
  this.operatorSelect.select(operator);
  sendKeys(this.secondField, y, 'filling second field');
  return click(this.goButton, 'submitting calculation');
  logger.error("Error when performing calculation: [%s]", err.message);
};

CalculatorPage.prototype.performCalculationQAll = function (x, y, operator) {
  return [
    function() {logger.info('performing calculation - x: [%s], y: [%s], operator: [%s]', x, y, operator)},
    function() {sendKeys(this.firstField, x, 'filling first field')}.bind(this),
    function() {this.operatorSelect.select(operator)}.bind(this),
    function() {sendKeys(this.secondField, y, 'filling second field')}.bind(this),
    function() {click(this.goButton, 'submitting calculation')}.bind(this)
  ].reduce(Q.when, Q());
};

CalculatorPage.prototype.performCalculationPromise = function (x, y, operator) {
  return Promise.resolve()
    .then(function() { logger.info('performing calculation - x: [%s], y: [%s], operator: [%s]', x, y, operator);})
    .then(function() { return sendKeys(this.firstField, x, 'filling first field');}.bind(this))
    .then(function() { return this.operatorSelect.select(operator);}.bind(this))
    .then(function() { return sendKeys(this.secondField, y, 'filling second field');}.bind(this))
    .then(function() { return click(this.goButton, 'submitting calculation');}.bind(this))
    .catch(function(err) {
      logger.error("Error when performing calculation: [%s]", err.message);
      return Promise.reject(err);
    })
};

CalculatorPage.prototype.model = function() {
  return Q.all([this.goButton.getText(), this.operatorSelect.getSelectedOption()])
    .then(function(a){
      return {
        buttonText : a[0],
        selectedOption : a[1]
      }
    });

/*
  return Promise.resolve()
    .then(this.goButton.bind(this.goButton))
    .then(function(text) {
      result.buttonText = text;
    })
    .then(this.firstField.getText.bind(this.firstField))
    .then()
*/
};

CalculatorPage.prototype.open = function() {
  return Page.prototype.open.call(this, '/protractor-demo/');
};

module.exports = new CalculatorPage();