var express = require('express');
var gmsController = require('./controllers');
var index = express();

//set up tamplate engine
index.set('view engine', 'ejs');

//fire controllers
gmsController(index);

//connect to server
var http = require('http');
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('You have connected to the server');
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
