exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features/calculator.feature'],
  capabilities: {
    browserName: 'chrome'
  },
  framework: 'cucumber',
  directConnect: 'true',
  baseUrl: 'http://juliemr.github.io/',
  cucumberOpts: {
    noSnippets: true
  }
}