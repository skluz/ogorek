'use strict';

var Page = require('./Page');
var Select = require('../elements').Select;
var Table = require('../elements').Table;

var Container = require('../elements').Container;

var CalculatorPage = function () {

  this.firstField = element(by.model('first'));
  this.secondField = element(by.model('second'));
  this.goButton = $('#gobutton');

  this.resultTable = new Table(by.css('.table'), {
    columns: [
      {name: 'time', type: 'text'},
      {name: 'expression', type: 'text'},
      {name: 'result', type: 'text'}
    ]
  });

  this.head = new Container(by.css('.table thead'), {
    header: by.tagName('tr')
  });

  this.body = new Container(by.css('.table tbody'), {
    header: by.tagName('tr')
  });

  this.operatorSelect = new Select(by.model('operator'));

};

CalculatorPage.prototype = new Page();

CalculatorPage.prototype.test = function() {
  return this.head.header.getText().then(function(text) {
    console.log(text);
  })
};

CalculatorPage.prototype.multiply = function(x, y) {
  return this.performCalculation(x, y, '*');
};

CalculatorPage.prototype.add = function(x, y) {
  return this.performCalculation(x, y, '+');
};

CalculatorPage.prototype.performCalculation = function (x, y, operator) {
  sendKeys(this.firstField, x);
  this.operatorSelect.select(operator);
  sendKeys(this.secondField, y);
  return click(this.goButton, 'submiting calculation');
};

CalculatorPage.prototype.open = function() {
  return Page.prototype.open.call(this, '/protractor-demo/');
};

module.exports = new CalculatorPage();