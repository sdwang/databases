var express = require('express');
var db = require('./db');
var controller = require('./controllers');
// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

app.route('/')
  .get(function(req, res) {
    controller.messages.get(req, res);
  })
  .post(function(req, res) {
    controller.messages.post(req, res);
  })
  .options(function(req, res) {
    controller.messages.options(req, res);
  });


// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"))
}


router.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});