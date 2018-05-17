

// NODE MODULE HTTP
var http = require('http');
// created a server....
// take req and res
var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url)
  // create response headers
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hey you guys here is the text/plain")
});

const PORT = 3000;

// listen to the port for a request
server.listen(PORT, '127.0.0.1');
console.log('now listening on port 3000');
