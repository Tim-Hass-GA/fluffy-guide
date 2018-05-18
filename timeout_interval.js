/// THESE ARE ALL FUNCTIONS ON THE GLOBAL OBJECT

/// SET TIMEOUT ///
const my_timeout = setTimeout(function(){
  console.log('3 seconds have passed');
},3000);

/// SET INTERVAL ///
// var set_time = 0;
// const cont_timer = setInterval(function(){
//   set_time += 2;
//   console.log(set_time, ' seconds have passed');
// },2000);

/// SET INTERVAL TWO ///
var time = 0;
const fivesec_timer = setInterval(function(){
  time += 2;
  console.log(time, ' seconds have passed');
  if (time > 7){
    clearInterval(fivesec_timer);
  }
},2000);

// tell us where we are in the directory
// const whereAmI = console.log(__dirname);

// tell us which file we are in the directory
// const fileLocal = console.log(__filename);

module.exports = {
  fivesec_timer: fivesec_timer
};

// object literal notation //

// module.exports = {
//   my_timeout: my_timeout,
//   cont_timer: cont_timer,
//   fivesec_timer: fivesec_timer,
//   whereAmI: whereAmI,
//   fileLocal: fileLocal
// };
