console.log('hello tim');

/////////////
// include the math_helper.js file
// require the module in this file
var math_helper = require('./math_helper');
// math_helper tests
console.log(math_helper.length_counter(['shaun', 'crystal', 'ryu', 'timmy']));

console.log(math_helper.my_adder(2,2));
console.log(math_helper.my_subtractor(5,4));
console.log(math_helper.my_multiplier(5,5));
console.log(math_helper.my_divider(400,4));

/////////////
// built in node module that allows you to
// interact with event emmitters
var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emitted.')

////////////
// var helper = require('./helper');
// helper tests
// helper.fivesec_timer;
