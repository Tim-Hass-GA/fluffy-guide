console.log('hello tim');
// PIPES -- STREAMS AND BUFFERS
// PIPES help with the process by not requiring a listener...
// BUFFER TEMP STORAGE FOR DATA MOVING FROM ONE PLACE TO ANOTHER
// STREAM OF DATA THAT FLOWS FROM ONE PLACE TO ANOTHER

// Writable - allows node to write data to a STREAM
// Readable - allows node to read data from a STREAM
// Duplex - allows node to both read and write data to a STREAM
var http = require('http');
var fs = require('fs');

// created a server....
// take req and res
var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url)
  // create response headers
  res.writeHead(200, {'Content-Type': 'text/html'});
  // create storage location
  // no encoding will just return the buffer...
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  // var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

  // can only pipe from a readable stream
  myReadStream.pipe(res);
  // res.end("Hey you guys here is the text/plain")
});

const PORT = 3000;

// listen to the port for a request
server.listen(PORT, '127.0.0.1');
console.log('now listening on port 3000');
