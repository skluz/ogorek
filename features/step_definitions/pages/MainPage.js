'use strict';

var Q = require('q');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function MainPage() {

    var first = element(by.model('first'));
    var second = element(by.model('second'));
    var goButton = $('#gobutton');
    var table = $('.table');

    this.add = function(a, b) {
        console.log("Hello");
        first.sendKeys(a).then(function() {
           console.log("First field filled");
        });
        second.sendKeys(b).then(function() {
            console.log("Second field filled");
        });
        goButton.click();
    };

    this.getArray = function(done) {
        table.all(by.tagName('th')).map(function(th) {
            return th.getText();
        }).then(function (result) {
            done(result);
        });
        //expect(result).to.eventually.be.fulfilled.and.notify(done);
        //Q.when(result, done);
    }

    this.open = function() {
        return browser.get('http://juliemr.github.io/protractor-demo/');
    }

}