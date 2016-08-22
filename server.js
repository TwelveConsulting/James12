//appels aux librairies
var express = require('express'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    http = require("http"),
    https = require("https"),
    url = require("url");//,
    Botkit = require('botkit'),
    Store = require("jfs"),
    fs = require("fs"),
    path = require("path"),
    mime = require("mime"),
    conges = require('./modules/conges');
    bot = require('./modules/bot')

moment.locale('fr');

var app = express();
app.use(bodyParser());

var port = process.env.PORT || 5000;


//Fonctions de Callback
boutonSlack = function(req, res,next) {
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
                                                        +'&client_id='+process.env.CLIENT_ID+'">' 
                +'<img alt="Add to Slack" height="40" width="139"'
                +'src="https://platform.slack-edge.com/img/add_to_slack.png" '
                +'srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, '
                +'https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>');
    console.log('cb0:le bouton slack s\'affiche');
    next();
    app.get('/redirect/',recupCode);
};

recupCode = function(req, res, next){
    console.log(req.query.code);
    process.env.CODE = req.query.code;
    console.log('cb1 : le code est récupéré');
    res.send('cb1 : le code est récupéré');
    https.get('https://slack.com/api/oauth.access?client_id='+process.env.CLIENT_ID+'&client_secret='+process.env.CLIENT_SECRET+'&code='+process.env.CODE, (res) => {
        res.on('data', (chunk) => {
            var result = JSON.parse(chunk);
            console.log(JSON.stringify(result));
            process.env.SLACKTOKEN = result.access_token;
            process.env.SLACK_BOT_TOKEN = result.bot.bot_access_token;
        });
    });
    console.log(process.env.SLACKTOKEN);
    console.log(process.env.SLACK_BOT_TOKEN);
    console.log('cb2 : le token est récupéré')
    next();
    app.get('/',ouvertureWebsocket);
};

ouvertureWebsocket = function (req, res, next) {
    console.log('cb3 : ouverture du web socket');
    res.send('cb3 : ouverture du websocket');
    https.get('https://slack.com/api/rtm.start?token='+process.env.SLACK_BOT_TOKEN, (res) => {
        res.on('data', (chunk) => {
            var result = JSON.parse(chunk);
            console.log(JSON.stringify(result));
        });
    });
    next();
    app.post('/running/',[bot.botFunction,conges.execute]);
    res.end(); 
}

app.get('/',boutonSlack);
app.listen(port, function () {
  console.log('Ready, listenning port '+port);
});

