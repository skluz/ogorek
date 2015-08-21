'use strict';

var AbstractRestManager = require('framework/rest').AbstractRestManager;

var CalculatorRestManager = function() {};

CalculatorRestManager.prototype = new AbstractRestManager();

CalculatorRestManager.prototype.getAll = function() {
  return this._get('/data/2.5/weather?q=London,uk');
};

module.exports = new CalculatorRestManager();