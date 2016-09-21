var express = require('express');

var app = express();

var server = app.listen('3000', function() {
  var port = server.address().port;
  console.log('Im here for you! on port =', port);
});
