var resolveVariable = function (originalValue) {
  var resultValue = originalValue;
  var reg = new RegExp(/\{([\w:]+?)\}/g);
  var result;
  while ((result = reg.exec(originalValue)) !== null) {
    var type = result[1].split(':')[0];
    var resolved = '{' + result[1] + '}';
    switch (type) {
      case 'int': resolved = 4; break;
      default : throw new Error('Placeholder: ' + type + ' not implemented');
    }
    resultValue = resultValue.replace(new RegExp('{' + result[1] + '}'), resolved);
  }
  return resultValue
};

var str = "asd{}dsds {{} dasas {int} xxx {string:5}";
var resolved = resolveVariable(str);
console.log(resolved);