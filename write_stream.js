console.log('hello tim');
// STREAMS AND BUFFERS
// BUFFER TEMP STORAGE FOR DATA MOVING FROM ONE PLACE TO ANOTHER
// STREAM OF DATA THAT FLOWS FROM ONE PLACE TO ANOTHER

// Writable - allows node to write data to a STREAM
// Readable - allows node to read data from a STREAM
// Duplex - allows node to both read and write data to a STREAM
var http = require('http');
var fs = require('fs');

// create storage location
// no encoding will just return the buffer...
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt', 'utf8');

// find the first piece of data
// createReadStream has a event that listens for an event
myReadStream.on('data', function(chunck){
  console.log('new chunck recieved');
  // console.log(chunck);
  myWriteStream.write(chunck);
});
