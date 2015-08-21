'use strict';

var CalculatorRestManager = require('framework/rest').CalculatorRestManager;
var CalculatorPage = require('framework/pages').CalculatorPage;

var CalculatorSteps = function() {

  this.Given(/^I'm on the calculator page$/, function () {
    return CalculatorPage.open();
  });

  this.When(/^I multiply '(.*)' by '(.*)'$/, function (x, y) {
    CalculatorPage.add(x, y);
    return CalculatorPage.multiply(x, y);
  });

  this.Given(/^I'm testing$/, function() {
    return expectElementDeepEquals(CalculatorPage.resultTable.columnValues(1), ['a'], 'checking result table!');
  });

  this.Then(/^Result should be '(.*)'$/, function (result) {

    // assertions chain example:

    return Promise.resolve().then(function() {
        return expectElementEquals(CalculatorPage.tablePanel.resultTable.cellValue(0, 2), result)
      }).then(function() {
        return expectElementDeepEquals(CalculatorPage.tablePanel.resultTable.headerValues(), ['Time', 'Expression', 'Result']);
      }).then(function() {
        return expectElementEquals(CalculatorPage.tablePanel.resultTable.headerCell(0), 'Time')
      }).then(function() {
        return expectElementIsEnabled(CalculatorPage.goButton);
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