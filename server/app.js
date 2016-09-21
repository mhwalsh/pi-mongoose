var express = require('express');
var mongoose = require('mongoose');

var app = express();

//model
var User = require('../models/user');

//connection string with the database
mongoose.connect('mongodb://localhost:27017/piUserDb');

var server = app.listen('3000', function() {
  var port = server.address().port;
  console.log('Im here for you! on port =', port);
});
