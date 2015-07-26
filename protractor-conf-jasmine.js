exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['jasmine/debug.js'],
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine2',
    directConnect: 'true'
}