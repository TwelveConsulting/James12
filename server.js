//appels aux librairies
var express = require('express'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    http = require("http"),
    url = require("url"),
    Botkit = require('botkit'),
    Store = require("jfs"),
    fs = require("fs"),
    path = require("path"),
    mime = require("mime");

//création d'un server
http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
 }).listen(8000);

// Console will print the message
console.log('Server running at http://127.0.0.1:8000/');
console.log('It\'s working');

//Utilisation de express
var app = express();
app.listen(3000);
app.get('/', function(request, response) {
  response.send('ca marche');
});