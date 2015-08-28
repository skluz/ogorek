'use strict';

var CalculatorPage = require('../../framework/pages').CalculatorPage;
var CalculatorRestManager = require('rest').CalculatorRestManager;
var EntrySamplers = require('rest').EntrySamplers;

module.exports = function() {

  this.Given('user on main calculator page', function () {
    return CalculatorPage.open();
  });

  this.When('user multiply $x by $y', function (x, y) {
    return CalculatorPage.multiply(x, y);
  });

  this.Then('result should be $result', function (result) {
    return expectElementTextEqual(CalculatorPage.resultLabel, result, 'checking result');
  });

  this.When('entry named $name already exists', function(name) {
    var entry = EntrySamplers.byName(name);
    CalculatorRestManager.getAll().then(function(result) {
      expect(result.name).to.be.equal('London');
    });
    return CalculatorPage.multiply(1, 2);
  });

  this.When('some action using section object can be performed', function() {
    return click(CalculatorPage.form.goButton, 'go button using Section');
  });

  this.Then('table assertions should pass, result: $result', function(result) {
    return Q.all([
      expectPromiseValueDeepEqual(CalculatorPage.resultTable.headerTextValues(), ['Time', 'Expression', 'Result'], 'Result table header'),
      expectPromiseArrayValueLength(CalculatorPage.resultTable.beans(), 1, 'There should be one row in result table'),
      expectPromiseValueEqual(CalculatorPage.resultTable.cellTextValue(0, 2), result, 'Result table cell'),
      expectPromiseValueEqual(CalculatorPage.resultTable.cellElement(0, 2).getText(), result, 'Result table cell'),
      CalculatorPage.resultTable.rowBean(0).then(function(bean) {
        logger.info(bean);
        expect(bean.data.result).to.be.equal(result);
      }),
      CalculatorPage.resultTable.rowBean(0).then(function(bean) {
        expect(bean.data).to.containSubset({result: result, expression: '2 * 4'});
      })
    ])
  });

};