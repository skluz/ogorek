'use strict';

var pages = require('../features/step_definitions/pages/index');
var mainPage = new pages.MainPage()

var Q = require('q');
var EC = protractor.ExpectedConditions;

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var should = chai.should;

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        mainPage.open();
        mainPage.add(1, 2);
        mainPage.add(2, 3);

        //expect(mainPage.getArray()).to.eventually.eql(['Time', 'Expression', 'Result']);
        mainPage.getArray().then(function(result) {
            expect(result.length).to.equal(2);
            expect(result[0].length).to.equal(3);
            expect(result[1].length).to.equal(3);
        });



        //mainPage.getArray().should.eventually.equal("foo");

        //var array = mainPage.getArray(function(result) {
        //    console.log("Array (inside): " + result);
        //    return result;
        //});
        //console.log("Array (outside): " + array);
        //Q.when(mainPage.open());
        //mainPage.open()
        //    .then(function() {
        //    console.log("Open - success");
        //}, function() {
        //        console.log("Open - failed")
        //    });

        //browser.get('http://juliemr.github.io/protractor-demo/');
        //console.log("Before click");
        //$('#gobutton').click().then(function() {
        //    console.log("Clicked!");
        //})
        //console.log("After click");
        //browser.waitForAngular();
        console.log("Finish");
    });
});