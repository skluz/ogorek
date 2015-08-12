'use strict';

require('../utils/actions').static(global);
require('../utils/validators').static(global);

var Page = require('../pages').Page;
var Select = require('../elements').Select;
var Table = require('../elements').Table;

var CalculatorPage = function CalculatorPage () {

  this.firstField = element(by.model('first'));
  this.secondField = element(by.model('second'));
  this.goButton = $('#gobutton');

  this.tablePanel = {
    resultTable : new Table(by.css('.table'))
  };

  this.operatorSelect = new Select(by.model('operator'));

};

CalculatorPage.prototype = new Page();

CalculatorPage.prototype.multiply = function(x, y) {
  return this.performCalculation(x, y, '*');
};

CalculatorPage.prototype.performCalculation = function (x, y, operator) {
  sendKeys(this.firstField, x);
  this.operatorSelect.select(operator);
  sendKeys(this.secondField, y);
  return click(this.goButton);
};

CalculatorPage.prototype.open = function() {
  return Page.prototype.open.call(this, '/protractor-demo/');
};

module.exports = CalculatorPage;