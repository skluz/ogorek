'use strict';

require('../utils/validators').static(global);

var Element = require('./').Element;

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

  this.rowValues = function (row) {
    return this._arrayValues().then(function(a) {
      return a[row];
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