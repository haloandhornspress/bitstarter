var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var filename = "index.html";
  var str_input = fs.readFileSync(filename, 'utf-8');
  response.send(str_input);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
