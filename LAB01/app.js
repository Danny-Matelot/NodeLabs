const http = require('http');
http.createServer((req, res) => {
  res.wreiteHead(200, {'Content-Type':'text/plain'});
  res.end('Hello there\n');


}).listen(3000, '127.0.01');
