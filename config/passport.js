var LocalStrategy = require('passport-local').Strategy;

var User = require('../server/db/db.js').User;
var saveUser = require('../server/db/db.js').saveUser;

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  passport.use('local-signup', new LocalStrategy({
    username: 'username',
    password: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done) {
    process.nextTick(function() {
      User.findOne({'username': username}, function(err, user) {
        if(err) {
          return done(err)
        }
        if (user){
          return done(null, false, console.log('signupMessage', 'That username already exists'));
        } else {
          var newUser = new User();
          newUser.username = username;
          newUser.password = password;
          newUser.save(function(err) {
            if(err) {
              throw err;
            }
            console.log('newuser here -> ', newUser);
            return done(null, newUser);
          })
        }
      })
    })
  }
  ))
}