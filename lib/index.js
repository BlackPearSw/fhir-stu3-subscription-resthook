var express = require('express');
var bodyParser = require('body-parser');
var apikey = require('./middleware/apikey');
var event = require('./handlers/event');
var metadata = require('./handlers/metadata');
var resource = require('./handlers/resource');
var error = require('./handlers/error');

var write = require('./utils/write');

module.exports.start = function (config) {

    var app = express();

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json({type:['application/json', 'application/fhir+json']}));
    app.use(apikey(config.auth.apikey));

    app.post('/event/456', event(404));
    app.post('/event/789', event(500));
    app.post('/event/:id', event());

    app.get('/fhir/metadata', metadata());

    app.put('/fhir/DocumentReference/err-id', resource(500));
    app.put('/fhir/:type/:id', resource());

    app.use(error());

    app.listen(config.service.port);
    write(config.service.name, 'listening for requests at', 'http://127.0.0.1:' + config.service.port);
    return app;
};