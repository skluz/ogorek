'use strict';

var Page = require('../pages').Page;

var Q = require('q');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var MainPage = function () {

  var first = element(by.model('first'));
  var second = element(by.model('second'));
  var goButton = $('#gobutton');
  var table = $('.table tbody');

  this.add = function(a, b) {
    first.sendKeys(a).then(function() {
      console.log("First field filled");
    });
    second.sendKeys(b).then(function() {
      console.log("Second field filled");
    });
    return goButton.click();
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