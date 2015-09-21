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
    tags: '@wip',
    format: 'pretty'
  },
  onPrepare: function() {

    require('app-module-path').addPath('./e2e/framework');
    require('utils/validators').static(global);
    require('utils/actions').static(global);
    require('utils/resolving').static(global);

    GLOBAL.logger = require('tracer').console({
      transport : function(data) {
        console.log(data.output)
        if(!logger.buffer) {
          logger.buffer = new Array();
        }
        logger.buffer.push(data.output);
      },
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

    var chai = require('chai');
    chai.use(require('chai-as-promised'));
    chai.use(require('chai-subset'));
    GLOBAL.expect = chai.expect;

    GLOBAL.Q = require('q');
  }
}