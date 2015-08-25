'use strict';

var CalculatorPage = require('pages').CalculatorPage;

module.exports = function() {

  this.When('user multiply $x by $y', function (x, y) {
    return CalculatorPage.multiply(x, y);
  });

  this.Then('result should be $result', function (result) {
    return CalculatorPage.resultTable.rowBean(0).then(function(row) {
      logger.info(JSON.stringify(row.data));
      expect(row.data).to.containSubset({expression: "2 * 3", result: '6'});
    })
  });

};