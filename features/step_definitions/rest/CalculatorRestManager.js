'use strict';

var RestManager = require('./RestManager');

var CalculatorRestManager = function() {};

CalculatorRestManager.prototype = new RestManager();

CalculatorRestManager.prototype.get = function() {
  return this._get('/data/2.5/weather?q=London,uk');
};

module.exports = CalculatorRestManager;