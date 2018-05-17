// NORMAL FUNCTION JS //
// function sayHi(){
//   console.log("say hi.");
// };
//
// sayHi();

//
function callFunction(fun){
  fun()
}

// FUNCITON EXPRESSION //
var sayBye = function(){
  console.log("say bye...yo")
};

// sayBye();
callFunction(sayBye);
