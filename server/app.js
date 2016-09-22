var express = require('express');
var mongoose = require('mongoose');

var app = express();

//model
var User = require('../models/user');

//connection string with the database
mongoose.connect('mongodb://localhost:27017/piUserDb');

//not RESTful, but useful
app.get('/testUser', function(req, res) {

  var justin = new User({
    name: 'Justin',
    username: 'testJustin',
    admin: true
  });

  justin.save(function(err) {
    if(err){
      //failed
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      console.log('Justin saved successfully!');
      res.sendStatus(201);
    }
  });
});

app.get('/all', function(req, res) {

  User.find({}, function(err, userResults) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.send(userResults);
    }
  });
});

var server = app.listen('3000', function() {
  var port = server.address().port;
  console.log('Im here for you! on port =', port);
});
