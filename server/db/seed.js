const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crawlr')

var db = mongoose.connection;

var userData = [
{
  local: {
    "username": "kevin",
    "password": "testpw"
  },
  facebook: {
    "id": "fakeid",
    "token": "faketoken",
    "name": "fakename"
  }
}];

var crawlData = [
{
  "name": "fun in austin",
  "city": "austin",
  "description": "we gon' have fun",
  "Date": "feb 22",
  "bars": [{"name": "austinbar1", "rating": "4.3"}, {"name":"austinbar2", "rating": "0.2"}],
  "rating": 5,
  "creator": "kevinD",
  "attendies": ["ryan", "sam", "kevinS"],
  "directions": "https://www.google.com/maps/embed/v1/directions?key=AIzaSyCKqcPwsHVZEmOPMQkCmIGNvNLfV0TVyZc&origin=503+Colorado+St+Austin+TX+78701+USA&waypoints=313+E+6th+St+Austin+TX+78701+USA&destination=61+Rainey+St+Austin+TX+78701+USA&mode=walking"
}];


db.once('open', function() {
  db.db.dropDatabase();
})

var userSchema = mongoose.Schema({
  local: {
    username: String,
    password: String
  },
  facebook: {
    id: String,
    token: String,
    name: String,
  }
})

var User = mongoose.model('User', userSchema);

var crawlSchema = mongoose.Schema({
  name: String,
  city: String,
  description: String,
  Date: String,
  bars: Array,
  rating: Number,
  creator: String,
  attendies: Array,
  directions: String
})

var Crawl = mongoose.model('Crawl', crawlSchema);


User.collection.insert(userData, function(err, result) {
  if (err) {
    console.log('err at db seed', err);
  } else {
    console.log('success at db seed');
  }
});

Crawl.collection.insert(crawlData, function(err, result) {
  if (err) {
    console.log('err at db seed', err);
  } else {
    console.log('success at db seed');
  }
});