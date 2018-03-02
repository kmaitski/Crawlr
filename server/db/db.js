const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crawlr');

var db = mongoose.connection;

//testing connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});

var userSchema = mongoose.Schema({
  local: {
    username: String, //{type: String, index: {unique: true}},
    password: String
  },
  facebook: {
    id: String,
    token: String,
    name: String
  }
})

var User = mongoose.model('User', userSchema);

// var displayCats = function(cb) {
//   Cat.find({}).exec(function (err, r) {
//     if (err) throw err;
//     cb(r)
//   })
// };

var saveUser = function(data) {
  var newUser = new User(data);
  newUser.save(function (err) {
    if (err) {console.log(err)} else {
    console.log('saved user!')
  }
  })
};

module.exports.saveUser = saveUser;
module.exports.db = db;
module.exports.User = User;
// module.exports.displayCats = displayCats;