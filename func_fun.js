// NORMAL FUNCTION JS //
// function sayHi(){
//   console.log("say hi.");
// };
//
// sayHi();

//
function callFunction(fun){
  // execute the function passed to me...
  fun();
}

// FUNCITON EXPRESSION //
var sayBye = function(){
  console.log("say bye...yo");
};

// sayBye();
// send the function instead of a value
// to the other function...
callFunction(sayBye);
