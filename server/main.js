

define('main', ['api'], function (api) {



    var express = require('express');
    var http = require('http');
    var app = express();


    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    app.use(require('express-promise')());
    app.use(require('body-parser')());
    app.use(require('method-override')());
    app.use(require('errorhandler')({ dumpExceptions: true, showStack: true }));

    app.get('/questions', function (req, res) {
        res.json(api.getQuestions());
    });
    app.post('/askQuestion', function (req, res) {
        res.json(api.askQuestion(req.body));
    });

    app.set('port', 2000);

    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });




});
