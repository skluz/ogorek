'use strict';

var chance = require('chance').Chance();

var getInt = function(text) {
  var params = text.split(':');
  var length = params.length;
  var result;
  if(length === 1) { // {int} - generate 6-digits number
    result = chance.integer({min: 100000, max: 999999});
  } else if(length === 2) { // {int:4} - generate n-digits number
    result = chance.integer({min: Math.pow(10, params[1]-1), max: Math.pow(10, params[1]) - 1});
  } else if(length === 3) { // {int:10:20} - generate number between 10 and 20
    result = chance.integer({min: parseInt(params[1]), max: parseInt(params[2])});
  }
  return result;
};

var getString = function(text) {
  var params = text.split(':');
  var length = params.length;
  var result;
  if(length === 1) { // {string} - generate 12 characters string
    result = chance.string({length: 12, pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"});
  } else if(length === 2) { // {string:4} - generate n-chars string
    result = chance.string({length: parseInt(params[1]), pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"});
  }
  return result;
};


var resolveVariable = function (originalValue) {
  var resultValue = originalValue;
  var reg = new RegExp(/\{([\w:\.]+?)\}/g);
  var result;
  while ((result = reg.exec(originalValue)) !== null) {
    var typeAndVar = result[1].split(':')[0];
    var resolved = '{' + result[1] + '}';
    if(typeAndVar in GLOBAL.ctx.vars) {
      resolved = GLOBAL.ctx.vars[typeAndVar];
    } else {
      var type = typeAndVar.split('.')[0];
      switch (type) {
        case 'int': resolved = getInt(result[1]); break;
        case 'str': resolved = getString(result[1]); break;
        default :
          resolved = getInt(result[1]);
          GLOBAL.ctx.vars[typeAndVar] = resolved;
          break;
      }
      if(typeAndVar.indexOf('.') > 0)
        GLOBAL.ctx.vars[typeAndVar] = resolved;
    }
    resultValue = resultValue.replace(new RegExp('{' + result[1] + '}'), resolved);
  }
  return resultValue;
};

var resolveArgs = function (originalHandler) {
  return function () {
    for(var i = 0; i < arguments.length - 1; i++) {
      arguments[i] = resolveVariable(arguments[i]);
    }
    originalHandler.apply(this, arguments);
  };
};

exports.static = function(scope) {
  scope.resolveVariable = resolveVariable;
  scope.resolveArgs = resolveArgs;
};