'use strict';

var pages = require('./pages');
var mainPage = new pages.MainPage();

var chai = require('chai');
var expect = chai.expect;

var HelloSteps = function() {

  this.Given(/^I am on the Cucumber\.js GitHub repository$/, function () {
    return mainPage.open();
  });

  this.When(/^I go to the README file$/, function () {
    return mainPage.add(1, 2);
  });

  this.Then(/^I should see "([^"]*)" as the page title$/, function () {
    return mainPage.validateTitle(/^Super Calculator$/);
  });

};

module.exports = HelloSteps;