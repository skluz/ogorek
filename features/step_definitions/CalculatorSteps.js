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
    // chain example:

    return Promise.resolve().then(function() {
        return expectElementEquals(calculatorPage.resultTable.cellValue(0, 2), result)
      }).then(function() {
        return expectElementDeepEquals(calculatorPage.resultTable.headerValues(), ['Time', 'Expression', 'Result']);
      }).then(function() {
        return expectElementEquals(calculatorPage.resultTable.headerCell(0), 'Time')
      }).then(function() {
        return expectArrayLength(calculatorPage.resultTable.headerValues(), 4);
      });

    // or

    //return expectElementEquals(calculatorPage.resultTable.cellValue(0, 2), result).then(function() {
    //  return expectElementDeepEquals(calculatorPage.resultTable.headerValues(), ['Time', 'Expression', 'Result']).then(function() {
    //    return expectElementEquals(calculatorPage.resultTable.headerCell(0), 'Time').then(function() {
    //      return expectArrayLength(calculatorPage.resultTable.headerValues(), 4);
    //    })
    //  })
    //})

  });

};

module.exports = CalculatorSteps;