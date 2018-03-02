const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const axios = require('axios');
const $ = require('jquery');
const request = require('request');
const mongoose = require('mongoose');
const db = require('./db/db.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
require('../config/passport.js')(passport);

var server = express();
var port = process.env.PORT || 1337;

server.use(cookieParser());
server.use(session({
  secret: 'secrethere',
  saveUninitialized: true,
  resave: true
  }));
server.use(passport.initialize());
server.use(passport.session());
server.use(flash());

server.use(express.static(__dirname + '/../client/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.listen(port, function() {
  console.log('Listening on port ' + port);
});

server.get('/Crawl', function(req, res) {
  res.send('ayy');
});

server.get('/auth/facebook',
  passport.authenticate('facebook'));

server.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

server.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/',
  failureFlash: true }));
  // console.log(req.body);
  // db.saveUser(req.body);
  // res.end();

// server.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/',
//                                    failureFlash: true })
// );

server.post('/Search', (req, res) => {
  let location = req.body.location;
  location = location.replace(/\s/g, '+');

  let newUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+' + location + '&key=AIzaSyCKqcPwsHVZEmOPMQkCmIGNvNLfV0TVyZc';

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
    let otherUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&AIzaSyCKqcPwsHVZEmOPMQkCmIGNvNLfV0TVyZc';
    let otherOptions = {
      url: otherUrl,
      headers: {
        'User-Agent': 'request'
      }
    }
    request(otherOptions, (err, response, body) => {
      let coordinatesAndBars = {};
      let location = JSON.parse(body);
      if (location.results[0]) {
        let coordinates = location.results[0].geometry.location;
        coordinatesAndBars = {
          barList: bars,
          coor: coordinates
        };
      }
      console.log(coordinatesAndBars);
      res.send(coordinatesAndBars);
    // };
    })
  });
})

server.post('/Crawl', function(req, res) {

  res.send(data);
});