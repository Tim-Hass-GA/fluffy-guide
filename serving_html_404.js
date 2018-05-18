console.log('hello tim');
// SENDING JSON
var http = require('http');
var fs = require('fs');

// created a server....
// take req and res
var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url)
  // create response headers
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('feed me popcorn');
  if (req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/api/ninjas'){
    var ninjas = [{ name: 'ryu', age: 29},{ name: 'sally', age: 39}]
    res.writeHead(200, {'Content-Type': 'application/json'});
    // fs.createReadStream(__dirname + '/contact.html').pipe(res);
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

const PORT = 3000;

// listen to the port for a request
server.listen(PORT, '127.0.0.1');
console.log('now listening on port 3000');
