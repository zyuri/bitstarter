var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
//var buf = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = new Buffer(fs.readFileSync(htmlfile));
  response.send(buf.toString());
  /* response.send('Hello World 2!');*/
});

var port = process.env.PORT || 8181;
app.listen(port, function() {
  console.log("Listening on " + port);
});
