'use strict';

var winston = require('winston');

var label = function(callingModule) {
  if(typeof callingModule !== 'undefined') {
    var parts = callingModule.id.split(/[\\/]/);
    return parts[parts.length - 2] + '/' + parts.pop();
  } else {
    return '';
  }
};

module.exports = function(callingModule) {
  var customLogger = new (winston.Logger)({
      transports: [
        new winston.transports.Console({
          timestamp: true,
          label: label(callingModule),
          colorize: true
        })
      ]
    }
  );
  return customLogger;
};