// reading and writing files
var fs = require('fs');

// ASYNC METHOD //
// non blocking code - good for multiple requests

// simple example
// fs.readFile('readme.txt', 'utf8', function(error, data){
//   console.log(data);
//   // write to the file
//   // the location/file and the content to write
//   fs.writeFile('writeme.txt', data);
//   // (node:16856) [DEP0013] DeprecationWarning: Calling an
//   // asynchronous function without callback is deprecated.
// });

// add directory
// read files and
// add files to directory
fs.mkdir('newDirectory', function(){
 fs.readFile('readme.txt', 'utf8', function(error, data){
   fs.writeFile('./newDirectory/writeMe.txt', data)
 })
});

// remove directory
// remove files content first
fs.unlink('./newDirectory/writeme.txt', function(){
  fs.rmdir('newDirectory');
});

console.log('test');
