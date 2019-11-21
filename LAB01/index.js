const http = require('http');
http.createServer(function(req,res) {
  res.wreiteHead(200, {'Content-Type':'text/plain'});
  res.end('Hello there\n');


}).listen(5555, '127.0.01');
