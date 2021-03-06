'use strict';

var Table = function Table(rootElement, definition) {

  this.rootElement = rootElement;
  this.definition = definition;

  this.headerTextValues = function() {
    return this.rootElement.element(by.tagName('thead')).all(by.tagName('th')).map(function(th) {
      return th.getText();
    });
  };

  this.headerCellTextValue = function(column) {
    return this.headerTextValues().then(function(a) {
      return a[column];
    });
  };

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
    return this.rootElement.element(by.tagName('tbody')).all(by.tagName('tr')).map(function(tr) {
      var cells = tr.all(by.tagName('td')).map(function(td) {
        return td.getText();
      })
      return cells;
    });
  };

  this.cellElement = function(row, column) {
    return this.rootElement.element(by.tagName('tbody')).all(by.tagName('tr')).get(row).all(by.tagName('td')).get(column);
  };

  this.beans = function() {
    return this.rootElement.element(by.tagName('tbody')).all(by.tagName('tr')).map(function(tr, index) {
      var result = {data : {}};
      for(var i = 0; i < this.definition.columns.length; i++) {
        var td = tr.all(by.tagName('td')).get(i);
        var value = this._beanValue(this.definition.columns[i].type, td);
        result.data[this.definition.columns[i].name] = value;
        result.index = index;
      }
      return result;
    }.bind(this));
  };

  this._beanValue = function(type, td) {
    switch(type) {
      case 'text':
        return td.getText().then(function(text) {
          return text;
        });
        break;
      case 'checkbox':
        return td.element($('input[type=checkbox]')).isSelected(function(isSelected) {
          return isSelected;
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

module.exports = Table;