'use strict';

module.exports = function() {

   this.BeforeScenario(function (event, callback) {
    logger.info('Cleaning database');
    callback();
  });

};