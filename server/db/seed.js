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


db.once('open', function() {
  db.db.dropDatabase();
})

// Step 2: Add data from `data.json`

var userSchema = mongoose.Schema({
  local: {
    username: String, //{type: String, index: {unique: true}},
    password: String
  },
  facebook: {
    id: String,
    token: String,
    name: String,
  }
})

var User = mongoose.model('User', userSchema);

User.collection.insert(userData, function(err, result) {
  if (err) {
    console.log('err at db seed', err);
  } else {
    console.log('success at db seed');
  }
});