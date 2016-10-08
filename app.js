var express = require('express');

var app = express();

app.get('/', function(request, response){
	response.send('Hello World from Express');
})

var port = 8080;
app.listen(port);

console.log('Listening on port: ' + port);