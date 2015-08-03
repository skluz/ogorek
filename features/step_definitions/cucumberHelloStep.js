'use strict';

var pages = require('./pages');
var Q = require('q');
var SugarStep = require('sugar-step');

var mainPage = new pages.MainPage();

module.exports = function() {

   // var Given, When, Then;

    this.Given = SugarStep(this.defineStep);

    this.Given(/^I am on the Cucumber\.js GitHub repository$/, function (callback) {

        mainPage.open2(callback);
        mainPage.add(1, 2);
        mainPage.add(2, 3);

        //expect(mainPage.getArray()).to.eventually.eql(['Time', 'Expression', 'Result']);
        mainPage.getArray().then(function(result) {
            expect(result.length).to.equal(2);
            expect(result[0].length).to.equal(3);
            expect(result[1].length).to.equal(3);
        });

        callback();

    });

    this.When(/^I go to the README file$/, function () {
        //callback.pending();
    });

    this.Then(/^I should see "([^"]*)" as the page title$/, function (arg1) {
        //callback.pending();
    });

}
