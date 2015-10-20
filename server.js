var express = require("express");
var cors = require('cors');
var app = express();

var port = 3000;
var ip = "127.0.0.1";

app.use(cors());
app.use(express.static(__dirname + "/client"));

app.get('/', function(req, res) {
	res.redirect('/index.html');
})


app.listen(port);

console.log('Server now listening on port ' + port);