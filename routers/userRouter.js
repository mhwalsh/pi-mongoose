var express = require('express');
var router = express.Router(); // instead of var app = express();

var mongoose = require('mongoose');

//model
var User = require('../models/user');

router.get('/', function(req, res) {

  User.find({}, function(err, userResults) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.send(userResults);
    }
  });
});

router.post('/', function(req, res) {
  console.log('hit the post');
  console.log('request body', req.body);

  var sentData = req.body;

  var newUser = new User({
    name: sentData.firstName, //Millie
    username: sentData.userName, //millie
    admin: sentData.admin
  });

  newUser.save(function(err) {
    if(err){
      //failed
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      console.log('New user saved successfully!');
      res.sendStatus(201);
    }
  });
});

module.exports = router;
