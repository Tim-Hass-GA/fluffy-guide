console.log('hello tim');
// SENDING JSON
var http = require('http');
var fs = require('fs');

// created a server....
// take req and res
var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url)
  // create response headers
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Ryu',
    job: 'ninja',
    age: 29
  }
  // expects a string or a buffer
  // must serialize the object
  res.end(JSON.stringify(myObj));

});

const PORT = 3000;

// listen to the port for a request
server.listen(PORT, '127.0.0.1');
console.log('now listening on port 3000');
