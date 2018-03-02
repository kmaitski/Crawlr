const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crawlr')

var db = mongoose.connection;

var userData = [{"username": "kevin", "password": "testpw"}]


db.once('open', function() {
  db.db.dropDatabase();
})

// Step 2: Add data from `data.json`

var userSchema = mongoose.Schema({
  username: String,//{type: String, index: {unique: true}},
  password: String
})

var User = mongoose.model('User', userSchema);

User.collection.insert(userData, function(err, result) {
  if (err) {
    console.log('err at db seed', err);
  } else {
    console.log('success at db seed');
  }
});