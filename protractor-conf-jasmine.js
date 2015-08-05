exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['jasmine/jasmineHelloSteps.js'],
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine2',
    directConnect: 'true',
    baseUrl: 'http://juliemr.github.io/'
}