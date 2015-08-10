'use strict';

require('../utils/actions').static(global);
require('../utils/validators').static(global);

var Q = require('q');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var Page = require('../pages').Page;
var Select = require('../elements').Select;


var MainPage = function MainPage () {

  var _this = this;

  this.first = element(by.model('first'));
  this.second = element(by.model('second'));
  this.goButton = $('#gobutton');
  var table = $('.table tbody');

  this.operatorSelect = new Select(by.model('operator'));


  this.add = function(a, b) {
    var _this = this;
    return Promise.resolve()
      .then(function() {
        return sendKeys(_this.first, a);
      })
      .then(function() {
        return sendKeys(_this.second, b);
      })
      .then(function() {
        return click(_this.goButton);
      })
      .then(function() {
        return validateElementText(_this.first, /^1$/);
      })
  };


  this.getArray = function() {
    // 1
    //table.all(by.tagName('th')).map(function(th) {
    //    return th.getText();
    //}).then(function (result) {
    //    done(result);
    //});

    // 2
    //Q.when(result, done);

    //var result = table.all(by.tagName('th')).map(function(th) {
    //    return th.getText();
    //});
    //
    //expect(result).to.eventually.be.fulfilled.and.notify(done);

    return table.all(by.tagName('tr')).map(function(tr) {
      var cells = tr.all(by.tagName('td')).map(function(td) {
        return td.getText();
      })
      return cells;
    });

  }

  this.open = function() {
    return Page.prototype.open.call(this, '/protractor-demo/');
  }

};

MainPage.prototype = new Page();

module.exports = MainPage;