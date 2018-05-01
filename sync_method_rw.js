// reading and writing files
var fs = require('fs');

// SYNC METHOD //
// until the file is read
// add directory
fs.mkdirSync('newDirectory');
// remove directory
fs.rmdirSync('newDirectory');
// blocks the code

// file to read and the encoding needed
var readme = fs.readFileSync('readme.txt', 'utf8');
console.log(readme);

// write to the file
// the location/file and the content to write
fs.writeFileSync('writeme.txt', readme)

// delete a file
// fs.unlink('writeme.txt');
