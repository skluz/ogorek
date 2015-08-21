exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    all: 'e2e/feature-files/**/*.feature',
    import: 'e2e/feature-files/import/*.feature',
    work: 'e2e/feature-files/work/**/*.feature',
  },
  capabilities: {
    browserName: 'chrome'
  },
  framework: 'cucumber',
  directConnect: 'true',
  baseUrl: 'http://juliemr.github.io/',
  cucumberOpts: {
    require: 'e2e/step-definitions/**',
    tags: '~@skip'
  },
  onPrepare: function() {
    GLOBAL.logger = require('tracer').colorConsole({
      format : "{{timestamp}} <{{title}}> [{{file}}:{{line}}] {{message}}",
      dateformat : "HH:MM:ss.L"
    });
    GLOBAL.Q = require('q');

    require('./e2e/framework/utils/validators').static(global);
    require('./e2e/framework/utils/actions').static(global);

    var chai = require('chai');
    chai.use(require('chai-as-promised'));
    GLOBAL.expect = chai.expect;
  }
}