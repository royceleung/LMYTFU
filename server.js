var express = require("express");
var http = require("http");
var app = express();
var port = 3000;
var ip = "127.0.0.1";

var server = http.createServer(app);
console.log("Listening");
server.listen(port, ip);