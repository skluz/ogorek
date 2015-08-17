'use strict';

require('../utils/validators').static(global);

var Element = require('./Element');

var Table = function Table (locator) {

  this.root = element(locator);

  this.headerValues = function () {
    return this.root.element(by.tagName('thead')).all(by.tagName('th')).map(function(th) {
      return th.getText();
    });
  };

  this.headerCell = function(column) {
    return this.headerValues().then(function(a) {
      return a[column];
    })
  };

  /**
   * Array of strings containing values from chosen row
   * @param row number of row
   * @returns {*|webdriver.promise.Promise} A promise that will be resolved
   * with table row visible text.
   */
  this.rowValues = function (row) {
    return this._arrayValues().then(function(a) {
      return a[row];
    });
  };

  this.columnValues = function (column) {
    return this._arrayValues().then(function (a) {
      var result = new Array();
      for(var i = 0; i < a.length; i++)
        result.push(a[i][column])
      return result;
    });
  };

  this.cellValue = function (row, column) {
    return this._arrayValues().then(function(a) {
      return a[row][column];
    });
  };

  this._arrayValues = function() {
    return this.root.element(by.tagName('tbody')).all(by.tagName('tr')).map(function(tr) {
      var cells = tr.all(by.tagName('td')).map(function(td) {
        return td.getText();
      })
      return cells;
    });
  };

};

Table.prototype = new Element();
Table.prototype.constructor = Table;

module.exports = Table;