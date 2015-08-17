'use strict';

var pages = require('./index');
var mainPage = new pages.MainPage()

describe("A suite", function() {
  it("one", function() {
    mainPage.open();
  });
  it("two", function() {
    mainPage.add(1, 2);
  });
  it("three", function() {
    mainPage.validateTitle(/^Super Calculator$/);
  });
});