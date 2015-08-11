'use strict';

require('../utils/actions').static(global);
require('../utils/validators').static(global);

var Q = require('q');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var Page = require('../pages').Page;
var Select = require('../elements').Select;
var Table = require('../elements').Table;


var CalculatorPage = function CalculatorPage () {

  var _this = this;

  this.firstField = element(by.model('first'));
  this.secondField = element(by.model('second'));
  this.goButton = $('#gobutton');

  this.resultTable = new Table(by.css('.table'));
  this.operatorSelect = new Select(by.model('operator'));

  this.multiply = function(x, y) {
    return this.performCalculation(x, y, '*');
  };

  this.performCalculation = function (x, y, operator) {
    sendKeys(this.firstField, x);
    this.operatorSelect.select(operator);
    sendKeys(this.secondField, y);
    return click(this.goButton);
  };

  this.open = function() {
    return Page.prototype.open.call(this, '/protractor-demo/');
  };

};

CalculatorPage.prototype = new Page();

module.exports = CalculatorPage;