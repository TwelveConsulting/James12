var express = require('express'),
    bodyParser = require('body-parser'),
    //moment = require('moment'),
    http = require("http"),
    url = require("url");//,
    //Botkit = require('botkit'),
    //Store = require("jfs"),
    //fs = require("fs"),
    //path = require("path"),
    //mime = require("mime");

//moment.locale('fr');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "html"});
    res.write('<a href="https://slack.com/oauth/authorize?'
    +'scope=bot,incoming-webhook,commands,identify,channels:history,channels:read,channels:write,chat:write:bot,chat:write:user,file:read,'
    +'file:write:user,groups:history,groups:read,groups:write,identity:basic,im:history,im:read,im:write,mpim:history,mpim:read,mpim:write,'
    +'search:read,team:read,usergroups:write,usergroups:read,user:profile:read,user:profile:write,user:read,user:write&client_id=48833382512.61501878338">'
    +'img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" '
    +'srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>');
    res.end();
});
server.listen(8080);