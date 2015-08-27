'use strict';

var Entry = function() {
  this.name;
  this.number = 10;
  this.persons;
};

var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

var EntryBuilder = (function () {
  var entry = new Entry();
  return {
    withName: function(name) {
      entry.name = name;
      return this;
    },
    withPerson: function(person) {
      entry.persons = entry.persons || new Array();
      entry.persons.push(person);
      return this;
    },
    build: function() {
      if(!entry.persons) {
        throw new Error('Can\'t create entry without person');
      }
      return entry;
    }
  }
})();

var EntrySamplers = function () {

  this.byName = function(name) {
    switch(name) {
      case 'one':
        return EntryBuilder.withName('some name')
          .withPerson(new Person('John', 'Kowalski'))
          .withPerson(new Person('John', 'Doe'))
          .build();
        break;
      default:
        throw new Error('Entry Samplers named: ' + name + ' not implemented');
    }
  }

};


module.exports = new EntrySamplers();