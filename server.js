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

app.set('port', (process.env.PORT || 5000));
app.set('port2', (process.env.PORT2 || 8080));

app.get('/', function(request, response) {
    var result = '<a href="https://slack.com/oauth/authorize?scope=bot,'
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
                    +'<img alt="Add to Slack" height="40" width="139"' 
                        +'src="https://platform.slack-edge.com/img/add_to_slack.png" '
                        +'srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, '
                        +'https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />'
                +'</a>'
    response.send(result);
    code =request.param('code');
    console.log(code);
    var options = {
      hostname: 'slack.com',
      port: 443,
      path: '/api/oauth.access?client_id='+process.env.CLIENT_ID+
                                                         '&client_secret='+process.env.CLIENT_SECRET+
                                                         '&code='+code+
                                                         '&redirect_uri=https://james12.herokuapp.com/',
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
}).listen(app.get('port'), function() { 
});






app.post('/conges', conges.execute);
