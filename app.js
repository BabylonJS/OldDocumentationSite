var express  = require('express');
var app      = express();
var compress = require('compression');
var favicon  = require('serve-favicon');




// The listened port
var port = process.env.PORT || 3000;

app.use(compress());

app.use(favicon(__dirname + '/public/html/img/favicon.ico'));

// Serve static files (css, js, images)
app.use(express.static('public/html'));

//let's encrypt
app.use('/.well-known', express.static('.well-known'));
// Set the template engine to pug
app.set('view engine', 'pug');

//app.set('view cache', false);
// Set the views folder to ./views
app.set('views', './views');

//Load th search index into the app
app.locals.indexes = require('./scripts/loadIndexes')('data/search');

//require all routes, index.js is called by default
require('./scripts/router')(app);

module.exports = app;
