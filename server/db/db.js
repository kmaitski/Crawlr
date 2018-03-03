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

// var displayCrawls = function(cb) {
//   Crawl.find({}).exec(function (err, r) {
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

var saveCrawl = function(data) {
  // console.log('data in saveCrawl', data)
  // console.log(data);
  var newCrawl = {
    name: data.name,
    description: data.description,
    city: data.city,
    bars: []
  }
  for (var i = 0; i<data.bars.length; i++) {
    console.log(data.bars[0].photos[0].photo_reference);
    newCrawl.bars.push({name: data.bars[i].name, rating: data.bars[i].rating, photo: data.bars[0].photos[0].photo_reference});
  }

  newCrawl = new Crawl(newCrawl);
  newCrawl.save(function (err) {
    if (err) {console.log(err)} else {
      // console.log(1);
      // Crawl.find({}, (err, data) => {
      //   console.log(data);
      // });
    console.log('saved crawl!');
    }
  });
};

exports.getCrawlsInCity = (location, cb) => {
  console.log(location);
  Crawl.find({city: location}, (err, crawls) => {
    if (err) return console.log(err);
    // console.log(crawls);
    cb(crawls);
  });
}

module.exports.saveUser = saveUser;
module.exports.saveCrawl = saveCrawl;
module.exports.db = db;
module.exports.User = User;
module.exports.Crawl = Crawl;