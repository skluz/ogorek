'use strict';


module.exports = function() {

  this.BeforeScenario(function (event, callback) {
    GLOBAL.ctx = {
      vars: new Object()
    }
    callback();
  });

};