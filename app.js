var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

// app.get('/', function(request, response){
// 	response.send('Hello World from Express (organized by Git)');
// })

var port = 8080;
app.listen(port);

console.log('Listening on port: ' + port);