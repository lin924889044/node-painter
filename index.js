var express = require('express');
var router = require("./app/router");
var app = express();
app.use(router);
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("start", host, port)
})