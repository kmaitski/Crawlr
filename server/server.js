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
  // console.log(req.body);
  // req.on('data', chunk => {
  //   console.log(chunk.toString());
  // })
  let location = req.body.location;
  // location.split(' ').join('');
  // console.log(location);
  location = location.replace(/\s/g, '+');
  let newUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+' + location + '&key=AIzaSyAqfX2cTT6QXJco_jQ0OjVbJ6j6bTPfze0';
  let options = {
    url: newUrl,
    headers: {
      'User-Agent': 'request'
    }
  }
  request(options, function(err, response, body) {
    // console.log(res.send);
    res.send(JSON.parse(body));
  });
  // res.end('');
  // server.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+austin,tx&key=AIzaSyAqfX2cTT6QXJco_jQ0OjVbJ6j6bTPfze0', data => {
  //     res.send(data);
  //   });
    // axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+austin,tx&key=AIzaSyAqfX2cTT6QXJco_jQ0OjVbJ6j6bTPfze0').then(response => {
    //   res.send(response);
    // })
  //   $.ajax({
  //     url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+austin,tx&key=AIzaSyAqfX2cTT6QXJco_jQ0OjVbJ6j6bTPfze0`,
  //     dataType: 'JSONP',
  //     // jsonpCallback: 'callback',
  //     type: 'GET',
  //     success: function (data) {
  //         res.send(data);
  //     }
  // });

  // req.on('data', chunk => {
  //   let location = chunk.toString();
  // });

})

server.post('/Crawl', function(req, res) {

  res.send(data);
});