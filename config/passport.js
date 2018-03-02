var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var User = require('../server/db/db.js').User;
var configAuth = require('./auth');

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
      User.findOne({'local.username': username}, function(err, user) {
        if(err) {
          return done(err)
        }
        if (user){
          return done(null, false, console.log('signupMessage', 'That username already exists'));
        } else {
          var newUser = new User();
          newUser.local.username = username;
          newUser.local.password = password;
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
  }))

  passport.use('local-login', new LocalStrategy({
    username: 'username',
    password: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done) {
    process.nextTick(function() {
      User.findOne({'local.username': username}, function(err, user) {
        if(err) {
          return done(err);
        }
        if(!user) {
          return done(null, false, console.log('loginMessage', 'no user found'))
        }
        if(user.password != password) {
          return done(null, false, console.log('loginMessage', 'pw does not match'))
        }
        return done(null, user);
      })
    })
  }))

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientId,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackUrl
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      User.findOne({'facebook.id': profile.id}, function(err, user){
        if(err) {
          return done(err);
        }
        if(user) {
          return done(null, user);
        }
        else {
          var newUser = new User();
          newUser.facebook.id = profile.id;
          newUser.facebook.token = accessToken;
          newUser.facebook.name = profile.displayName;

          newUser.save(function(err) {
            if (err) {
              throw err;
            } return done(null, newUser);
          })
        }
      })
    })
  }
));
}