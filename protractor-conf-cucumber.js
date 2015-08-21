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

    require('app-module-path').addPath('./e2e');
    require('framework/utils/validators').static(global);
    require('framework/utils/actions').static(global);

    GLOBAL.logger = require('tracer').console({
      level : 'info',
      methods : ['debug', 'info', 'warn', 'error', 'feature', 'scenario', 'step'],
      format : [
        "{{timestamp}} <{{title}}> [{{file}}:{{line}}] {{message}}",
        {
          feature: "{{timestamp}} <{{title}}> {{message}}",
          scenario: "{{timestamp}} <{{title}}> {{message}}",
          step: "{{timestamp}} <{{title}}> {{message}}"
        }],
      dateformat : "HH:MM:ss.l"
    });

    GLOBAL.Q = require('q');

    var chai = require('chai');
    chai.use(require('chai-as-promised'));
    GLOBAL.expect = chai.expect;
  }
}