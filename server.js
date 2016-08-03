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

moment.locale('fr');
var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('Bien le bonjour');
    res.end();
});
server.listen(8080);

var app = express();
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.urlencoded({extended: true}));

