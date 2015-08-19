'use strict';

require('../../framework/utils/actions').static(global);
require('../../framework/utils/validators').static(global);

var CalculatorRestManager = require('../../framework/rest').CalculatorRestManager;
var EntrySamplers = require('../../framework/rest').EntrySamplers;
var calculatorPage = require('../../framework/pages').CalculatorPage;

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var CalculatorSteps = function() {

  this.Given(/^Step 1$/, function () {
    return calculatorPage.open();
  });

  this.When(/^Step 2$/, function () {
    CalculatorRestManager.getAll();
    CalculatorRestManager.getAll();
    return calculatorPage.multiply(2, 3);
  });

  this.Given(/^Step 3$/, function() {
    return;
  });

  this.Then(/^Step 4$/, function () {
    // assertions chain example:

    return Promise.resolve().then(function() {
      return expectPromiseValueEquals(calculatorPage.resultTable.cellElement(0, 2).getText(), '6', "Checking multiplication result")
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

  this.Then(/^Some rest step should work$/, function() {
    return CalculatorRestManager.getAll().then(function(response) {
      console.log(response.name);
    });
  });

};

module.exports = CalculatorSteps;