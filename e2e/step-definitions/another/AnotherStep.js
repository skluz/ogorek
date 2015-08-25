'use strict';

var CalculatorPage = require('pages').CalculatorPage;

module.exports = function() {

  this.Given('user on main calculator page', function () {
    return CalculatorPage.open();
  });

};
