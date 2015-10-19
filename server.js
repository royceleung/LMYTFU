var express = require("express");
var app = express();
var port = 3000;
var ip = "127.0.0.1";

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
	res.redirect('/index.html');
})

app.post('/video', function(req, res) {
	res.send('you did it');
})


app.listen(port);

console.log('Server now listening on port ' + port);