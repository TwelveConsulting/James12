//appels aux librairies
var express = require('express'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    http = require("http"),
    url = require("url");//,
    Botkit = require('botkit'),
    conges = require('./modules/conges'),
    //Store = require("jfs"),
    //fs = require("fs"),
    //path = require("path"),
    //mime = require("mime");

moment.locale('fr');

var app = express();

app.set('port', (process.env.PORT || 5000));

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
                                                                +'&client_id=48833382512.61501878338">'
                    +'<img alt="Add to Slack" height="40" width="139"' 
                        +'src="https://platform.slack-edge.com/img/add_to_slack.png" '
                        +'srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, '
                        +'https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />'
                +'</a>'
    response.send(result);
}).listen(app.get('port'), function() {});

app.param('param',function (req, res, next, value) {
    console.log('CALLED ONLY ONCE with', value);
  next();
});


app.post('/conges', conges.execute);
