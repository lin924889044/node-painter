var express = require("express");
var apiVersion1 = require("./test1.js");
var app = express();
app.use("/v1", apiVersion1);
module.exports = app;