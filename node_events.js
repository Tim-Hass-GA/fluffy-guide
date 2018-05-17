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
