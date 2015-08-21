'use strict';

var Element = require('framework/elements').Element;

var Table = function Table(locator, definition) {

  var _this = this;
  this.root = element(locator);
  this.definition = definition;

  this.headerTextValues = function() {
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
  this.rowTextValues = function(row) {
    return this._arrayTextValues().then(function(a) {
      return a[row];
    });
  };

  this.columnTextValues = function(column) {
    return this._arrayTextValues().then(function (a) {
      var result = new Array();
      for(var i = 0; i < a.length; i++)
        result.push(a[i][column])
      return result;
    });
  };

  this.cellTextValue = function(row, column) {
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

  this.cellElement = function(row, column) {
    return this.root.element(by.tagName('tbody')).all(by.tagName('tr')).get(row).all(by.tagName('td')).get(column);
  };

  this.beans = function() {
    return this.root.element(by.tagName('tbody')).all(by.tagName('tr')).map(function(tr) {
      var result = new Object;
      for(var i = 0; i < _this.definition.columns.length; i++) {
        var td = tr.all(by.tagName('td')).get(i);
        var value = _this._beanValue(_this.definition.columns[i].type, td);
        result[_this.definition.columns[i].name] = value;
      }
      return result;
    });
  };

  this._beanValue = function(type, td) {
    switch(type) {
      case 'text':
        return td.getText().then(function(text) {
          return text;
        });
        break;
      default:
        throw new Error('Bean type: ' + type + ' not implemented');
    }
  };

  this.rowBean = function(row) {
    return this.beans().then(function(beans) {
      return beans[row];
    });
  };

};

Table.prototype = new Element();
Table.prototype.constructor = Table;

module.exports = Table;