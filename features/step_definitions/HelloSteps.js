'use strict';

var pages = require('./pages');
var mainPage = new pages.MainPage();

require('./utils/actions').static(global);

var chai = require('chai');
var expect = chai.expect;

var HelloSteps = function() {

  this.Given(/^I am on the Cucumber\.js GitHub repository$/, function () {
    return mainPage.open();
  });

  this.When(/^I go to the README file$/, function () {
    return mainPage.add('raz dwa trzy cztery pięć szcześć', 2);
  });

  this.Then(/^I should see "([^"]*)" as the page title$/, function () {
    return mainPage.validateTitle(/^Super Calculator$/);
  });

};

module.exports = HelloSteps;