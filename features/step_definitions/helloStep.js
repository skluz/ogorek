'use strict';

var pages = require('./pages');
var Q = require('q');
var SugarStep = require('sugar-step');

var mainPage = new pages.MainPage();

module.exports = function() {

    var Given, When, Then;

    Given = When = Then = SugarStep(this.defineStep);

    this.Given(/^I am on the Cucumber\.js GitHub repository$/, function () {

        return Q.fcall(mainPage.open())
            .then(mainPage.add(1, 2))
            .then(mainPage.add(2, 3));

        mainPage.getArray().then(function(result) {
            expect(result.length).to.equal(2);
            expect(result[0].length).to.equal(3);
            expect(result[1].length).to.equal(3);
        });

        //callback();

    });

    this.When(/^I go to the README file$/, function () {
        //callback.pending();
    });

    this.Then(/^I should see "([^"]*)" as the page title$/, function (arg1) {
        //callback.pending();
    });

}
