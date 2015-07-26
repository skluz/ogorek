'use strict';

var pages = require('./pages');
var mainPage = new pages.MainPage()

module.exports = function() {

    this.Given(/^I am on the Cucumber\.js GitHub repository$/, function (callback) {
        mainPage.hello();
        browser.pause();
        callback.pending();
    });

    this.When(/^I go to the README file$/, function (callback) {
        callback.pending();
    });

    this.Then(/^I should see "([^"]*)" as the page title$/, function (arg1, callback) {
        callback.pending();
    });

}
