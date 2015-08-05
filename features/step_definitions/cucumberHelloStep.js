'use strict';

var pages = require('./pages');
var mainPage = new pages.MainPage();

var logger = require('./utils').logger;

var chai = require('chai');
var expect = chai.expect;

module.exports = function() {

  this.Given(/^I am on the Cucumber\.js GitHub repository$/, function () {
    return mainPage.open();
  });

  this.When(/^I go to the README file$/, function () {
    return mainPage.validateTitle(/^Super Calculator$/);
  });

  this.Then(/^I should see "([^"]*)" as the page title$/, function () {
    return mainPage.add(1, 2);
  });

}
