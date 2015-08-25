'use strict';

var CalculatorPage = require('pages').CalculatorPage;

module.exports = function() {

  this.Given('user on main calculator page', function () {
    return CalculatorPage.open();
  });

  this.When('user multiply $x by $y', function (x, y) {
    return CalculatorPage.multiply(x, y);
  });

  this.Then('result should be $result', function (result) {
    return CalculatorPage.values().then(function(page) {
      expect(page.buttonText).to.be.equal('Go!');
      expect(page.selectedOption).to.be.equal('c');
    })
  });

};