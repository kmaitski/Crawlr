var Sequelize = require('sequelize');
var db = new Sequelize('Crawlr', 'root', '');

var User = db.define('User', {
  username: Sequelize.STRING
});

var Crawl = db.define('Crawl', {
  name: Sequelize.STRING,
  city: Sequelize.STRING
});

var Bar = db.define('Bar', {
  name: Sequelize.STRING
});

Crawl.belongsTo(User);
User.hasMany(Crawl);
Crawl.hasMany(Bar);
Bar.hasMany(Crawl);

User.sync();
Crawl.sync();
Bar.sync();

exports.User = User;
exports.Bar = Bar;
exports.Crawl = Crawl;