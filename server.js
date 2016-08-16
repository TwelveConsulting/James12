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

//Fonctions de Callback
boutonSlack = function(req, res, next) {
    //if (req.params.parametres === null) {
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
        res.end();
    //}
    console.log(req.params());
    next();
};

recupCode = function(req, res, next){
   var parametres = req.params;
        //res.send(code);
        console.log(parametres);
        console.log('cb1 : le code est récupéré');
    }
    console.log(req.params());*/
    next(); 
};

app.get('/', [boutonSlack,recupCode]);
app.listen(port, function () {
  console.log('Ready');
});


app.post('/conges', conges.execute);
