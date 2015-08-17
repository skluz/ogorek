'use strict';

require('../../framework/utils/actions').static(global);
require('../../framework/utils/validators').static(global);

var calculatorRestManager = require('../../framework/rest').CalculatorRestManager;
var calculatorPage = require('../../framework/pages').CalculatorPage;

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var CalculatorSteps = function() {

  this.Given(/^I'm on the calculator page$/, function () {
    return calculatorPage.open();
  });

  this.When(/^I multiply '(.*)' by '(.*)'$/, function (x, y) {
    calculatorPage.add(x, y);
    return calculatorPage.multiply(x, y);
  });

  this.Given(/^I'm testing$/, function() {
    var cell = calculatorPage.resultTable.cellElement(0, 0);
    return cell.then(function(value) {
      console.log("Value: " + value);
    })
  });

  this.Then(/^Result should be '(.*)'$/, function (result) {

    // assertions chain example:

    return Promise.resolve().then(function() {
        return expectElementEquals(calculatorPage.resultTable.cellTextValue(0, 2), result)
      }).then(function() {
        return expectElementDeepEquals(calculatorPage.resultTable.headerTextValues(), ['Time', 'Expression', 'Result']);
      }).then(function() {
        return expectElementEquals(calculatorPage.resultTable.headerCell(0), 'Time')
      }).then(function() {
        return expectElementIsEnabled(calculatorPage.goButton);
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
    return calculatorRestManager.getAll().then(function(response) {
      console.log(response.name);
    });
  });

};

module.exports = CalculatorSteps;