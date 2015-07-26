'use strict';

var pages = require('../features/step_definitions/pages');
var mainPage = new pages.MainPage()

var Q = require('q');
var EC = protractor.ExpectedConditions;

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        mainPage.open();
        mainPage.add(1, 2);
        var array = mainPage.getArray(function(result) {
            console.log("Array (inside): " + result);
            return result;
        });
        console.log("Array (outside): " + array);
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
        browser.waitForAngular();
        console.log("Finish");
    });
});