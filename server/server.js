const express = require('express');
const bodyParser = require('body-parser');

var server = express();
var port = process.env.PORT || 1337;

server.use(express.static(__dirname + '/../client/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.listen(port, function() {
  console.log('Listening on port ' + port);
});

server.get('/Crawl', function(req, res) {
  res.send('ayy');
});

server.post('/Crawl', function(req, res) {

  res.send(data);
});