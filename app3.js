console.log('hello tim');
// include the count.js file
// require the module in this file
// var math_helper = require('./math_helper');
// console.log(math_helper.length_counter(['shaun', 'crystal', 'ryu', 'timmy']));
// console.log(math_helper.my_adder(2,2));

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
