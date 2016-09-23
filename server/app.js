var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

//routers
var userRouter = require('../routers/userRouter');

// use routers
app.use('/user', userRouter);

//demonstrate query strings and url params
app.get('/test/:id?', function(req, res) {
  console.log('in test route');

  console.log('req.body = ', req.body);
  console.log('req.query = ', req.query); // localhost:3000/test?q=
  console.log('req.params = ', req.params); //localhost:3000/test/id

  res.send('OK');
});

//connection string with the database
mongoose.connect('mongodb://localhost:27017/piUserDb');

var server = app.listen('3000', function() {
  var port = server.address().port;
  console.log('Im here for you! on port =', port);
});
