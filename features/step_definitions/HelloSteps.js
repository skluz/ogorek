'use strict';

require('./utils/actions').static(global);
require('./utils/validators').static(global);

var Q = require('q');

var pages = require('./pages');
var mainPage = new pages.MainPage();

var HelloSteps = function() {

  this.Given(/^I'm on the Main Page$/, function () {
    return mainPage.open();
  });

  this.When(/^I go to the README file$/, function () {
    return validateDeepEquals(mainPage.operatorSelect.getOptions(), ['+', '/', '%', '*', '-']);
    //return validateDeepEquals(mainPage.operatorSelect.getOptions(), ['+', '/A', '%', '*', '-']);
    //return validateEquals(mainPage.operatorSelect.getSelectedOption(), '+');
  });


  this.Then(/^I should see "([^"]*)" as the page title$/, function () {
    return mainPage.operatorSelect.select('+');
  });

};

module.exports = HelloSteps;