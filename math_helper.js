var length_counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array.';
}
// let the counter function
// (or something)
// from this module
// available to other files
module.exports.length_counter = length_counter;
// test it
// console.log(counter(['shaun', 'crystal', 'ryu', 'timmy']));

// another way
module.exports.my_adder = function(a,b){
  return `The sum of the 2 numbers is ${ a + b }.`;
};
module.exports.my_subtractor = function(a,b){
  return `The difference of the 2 numbers is ${ a - b }.`;
};
module.exports.my_multiplier = function(a,b){
  return `The sum of the 2 numbers is ${ a * b }.`;
};
module.exports.my_divider = function(a,b){
  return `The product of the 2 numbers is ${ a / b }.`;
};
