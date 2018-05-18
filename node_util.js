// built in node module that allows you to
// interact with event emmitters
var events = require('events');
// built in node module that allows you to
var util = require('util');

var Person = function(name){
  this.name = name;
};

// using util - accepts two parameters
// object and event to attach custom events to object
util.inherits(Person, events.EventEmitter)

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said ' + mssg)
  })
})

james.emit('speak', 'hey dudes')
ryu.emit('speak', 'hello')
mary.emit('speak', 'what are you guys talking about?')
