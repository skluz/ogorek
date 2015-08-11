'use strict';

require('./utils/actions').static(global);
require('./utils/validators').static(global);

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


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
    return expect(calculatorPage.resultTable.cell(0, 2).getText()).to.eventually.be.equal(result);
  });

};

module.exports = CalculatorSteps;