'use strict';

require('./utils/actions').static(global);
require('./utils/validators').static(global);

var Q = require('q');

var pages = require('./pages');
var calculatorPage = new pages.CalculatorPage();

var CalculatorSteps = function() {

  this.Given(/^I'm on the calculator page$/, function () {
    return calculatorPage.open();
  });

  this.When(/^I multiply '(.*)' by '(.*)'$/, function (x, y) {
    return calculatorPage.multiply(x, y);
  });

  this.Then(/^Result should be '(.*)'$/, function (result) {
    return calculatorPage.operatorSelect.select('o');
  });

};

module.exports = CalculatorSteps;