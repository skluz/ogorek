'use strict';

var chance = require('chance').Chance();
module.exports = function() {

  this.BeforeScenario(function (event, callback) {
    GLOBAL.ctx = {
      chance: chance
    }
    callback();
  });

};