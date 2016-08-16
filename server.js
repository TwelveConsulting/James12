//appels aux librairies
var express = require('express'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    http = require("http"),
    https = require("https"),
    url = require("url");//,
    Botkit = require('botkit'),
    conges = require('./modules/conges');
    //Store = require("jfs"),
    //fs = require("fs"),
    //path = require("path"),
    //mime = require("mime");

var code;

moment.locale('fr');

var app = express();

var port = process.env.PORT || 5000;

/*var options1 = {
      hostname: 'slack.com',
      port: 443,
      path: '/oauth/authorize?scope=bot,'
                                +'incoming-webhook,'
                                +'commands,'
                                +'identify,'
                                +'channels:history,'
                                +'channels:read,'
                                +'channels:write,'
                                +'chat:write:bot,'
                                +'chat:write:user,'
                                +'files:read,'
                                +'files:write:user,'
                                +'groups:history,'
                                +'groups:read,'
                                +'groups:write,'
                                +'im:history,'
                                +'im:read,'
                                +'im:write,'
                                +'mpim:history,'
                                +'mpim:read,'
                                +'mpim:write,'
                                +'search:read,'
                                +'team:read,'
                                +'usergroups:write,'
                                +'usergroups:read,'
                                +'users.profile:read,'
                                +'users.profile:write,'
                                +'users:read,'
                                +'users:write'
                                +'&client_id='+process.env.CLIENT_ID,
      method: 'GET'
    };

var req1 = https.request(options1, (res) => {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
req1.end();

req1.on('error', (e) => {
  console.error(e);
});
console.log('ok');*/

app.get('/', function(req, res) {
    res.send('<a href="https://slack.com/oauth/authorize?scope=bot,'
                                                                +'incoming-webhook,'
                                                                +'commands,'
                                                                +'identify,'
                                                                +'channels:history,'
                                                                +'channels:read,'
                                                                +'channels:write,'
                                                                +'chat:write:bot,'
                                                                +'chat:write:user,'
                                                                +'files:read,'
                                                                +'files:write:user,'
                                                                +'groups:history,'
                                                                +'groups:read,'
                                                                +'groups:write,'
                                                                +'im:history,'
                                                                +'im:read,'
                                                                +'im:write,'
                                                                +'mpim:history,'
                                                                +'mpim:read,'
                                                                +'mpim:write,'
                                                                +'search:read,'
                                                                +'team:read,'
                                                                +'usergroups:write,'
                                                                +'usergroups:read,'
                                                                +'users.profile:read,'
                                                                +'users.profile:write,'
                                                                +'users:read,'
                                                                +'users:write'
                                                                +'&client_id='+process.env.CLIENT_ID+'>'
                        +'lien</a>');
}).listen(port, function () {
  console.log('Ready');
});


var options = {
  hostname: 'slack.com',
  port: 443,
  path: 'oauth/authorize?scope=bot,'
                            +'incoming-webhook,'
                            +'commands,'
                            +'identify,'
                            +'channels:history,'
                            +'channels:read,'
                            +'channels:write,'
                            +'chat:write:bot,'
                            +'chat:write:user,'
                            +'files:read,'
                            +'files:write:user,'
                            +'groups:history,'
                            +'groups:read,'
                            +'groups:write,'
                            +'im:history,'
                            +'im:read,'
                            +'im:write,'
                            +'mpim:history,'
                            +'mpim:read,'
                            +'mpim:write,'
                            +'search:read,'
                            +'team:read,'
                            +'usergroups:write,'
                            +'usergroups:read,'
                            +'users.profile:read,'
                            +'users.profile:write,'
                            +'users:read,'
                            +'users:write'
                            +'&client_id='+process.env.CLIENT_ID,
  method: 'GET'
};

var req = https.request(options, (res) => {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
req.end();

req.on('error', (e) => {
  console.error(e);
});






app.post('/conges', conges.execute);
