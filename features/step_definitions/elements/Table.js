'use strict';

require('../utils/validators').static(global);
var logger = require('../utils/logger')(module);


var Element = require('./').Element;
var Q = require('q');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var Table = function Table (locator) {

  var _this = this;
  this.root = element(locator);

  this.row = function (i) {
    return this._array().then(function(a) {
      return a[i];
    });
  };

  this.cell = function (i, j) {
    return this._array().then(function(a) {
      return a[i][j];
    });
  };

  this._array = function() {
    return this.root.all(by.tagName('tr')).map(function(tr) {
      var cells = tr.all(by.tagName('td')).map(function(td) {
        return td.getText();
      })
      return cells;
    });
  }

};

Table.prototype = new Element();
Table.prototype.constructor = Table;

module.exports = Table;