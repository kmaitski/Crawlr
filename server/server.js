const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const $ = require('jquery');
const request = require('request');

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

server.post('/Search', (req, res) => {
  let location = req.body.location;
  location = location.replace(/\s/g, '+');
  let newUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+' + location + '&key=AIzaSyDhuU0KKMkhLvfiVxwLkcaUfKsweSB3LtU';
  let options = {
    url: newUrl,
    headers: {
      'User-Agent': 'request'
    }
  }
  request(options, function(err, response, body) {
    let bars = JSON.parse(body);
    bars = bars.results;
    console.log(bars);
    let otherUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&AIzaSyDhuU0KKMkhLvfiVxwLkcaUfKsweSB3LtU';
    let otherOptions = {
      url: otherUrl,
      headers: {
        'User-Agent': 'request'
      }
    }
    request(otherOptions, (err, response, body) => {
      let location = JSON.parse(body);
      let coordinates = location.results[0].geometry.location;
      let coordinatesAndBars = {
        barList: bars,
        coor: coordinates
      };
      console.log(coordinatesAndBars);
      res.send(coordinatesAndBars);
    })
  });
})

server.post('/Crawl', function(req, res) {

  res.send(data);
});