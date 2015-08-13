'use strict';

var restify = require('restify');
var logger = require('../utils/logger')(module);

var AbstractRestManager = function() {
  this.client = restify.createJSONClient({
    url: 'http://api.openweathermap.org'
  });
};

AbstractRestManager.prototype._get = function(path) {
  var flow = protractor.promise.controlFlow();
  var client = this.client;
  return flow.execute(function() {
    var deferred = protractor.promise.defer();
    logger.info('GET request - host: [%s], path: [%s]', client.url.href, path);
    client.get({path: path}, function(err, req, res, obj) {
      logger.info('GET response - statusCode: [%s], length: [%s]', res.statusCode, res.headers['content-length']);
      logger.info('GET response - body: ' + JSON.stringify(obj));
      if(err) {
        deferred.reject();
      } else {
        deferred.fulfill(obj);
      }
    });
    return deferred.promise;
  });
};

module.exports = AbstractRestManager;