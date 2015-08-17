'use strict';

require('../utils/validators').static(global);
var Q = require('q');


var Element = require('./Element');

var Table = function Table (locator, definition) {

  this.root = element(locator);
  this.definition = definition;

  this.headerTextValues = function () {
    return this.root.element(by.tagName('thead')).all(by.tagName('th')).map(function(th) {
      return th.getText();
    });
  };

  this.headerCellTextValue = function(column) {
    return this.headerTextValues().then(function(a) {
      return a[column];
    })
  };

  /**
   * Array of strings containing values from chosen row
   * @param row number of row
   * @returns {*|webdriver.promise.Promise} A promise that will be resolved
   * with table row visible text.
   */
  this.rowTextValues = function (row) {
    return this._arrayTextValues().then(function(a) {
      return a[row];
    });
  };

  this.columnTextValues = function (column) {
    return this._arrayTextValues().then(function (a) {
      var result = new Array();
      for(var i = 0; i < a.length; i++)
        result.push(a[i][column])
      return result;
    });
  };

  this.cellTextValue = function (row, column) {
    return this._arrayTextValues().then(function(a) {
      return a[row][column];
    });
  };

  this._arrayTextValues = function() {
    return this.root.element(by.tagName('tbody')).all(by.tagName('tr')).map(function(tr) {
      var cells = tr.all(by.tagName('td')).map(function(td) {
        return td.getText();
      })
      return cells;
    });
  };

  this.cellElement = function (row, column) {
    return this._arrayElements().then(function(a) {
      return a[row][column];
    });
  };

  this._arrayElements = function() {
    return this.root.element(by.tagName('tbody')).all(by.tagName('tr')).map(function(tr) {
      var cells = tr.all(by.tagName('td')).map(function(td) {
        return Q(td);
      })
      return cells;
    });
  };

};

Table.prototype = new Element();
Table.prototype.constructor = Table;

module.exports = Table;