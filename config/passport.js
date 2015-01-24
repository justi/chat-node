var User = require('../models/user');

module.exports = function(passport, FacebookStrategy, config) {

  passport.use(new FacebookStrategy({
    clientID: config.get('facebook.clientID'),
    clientSecret: config.get('facebook.clientSecret'),
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos']
  },

  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      User.findOrCreate({
        name: profile.displayName,
        facebook_id: profile.id,
        profile_picture: profile.photos[0].value
      },
      function(err, user){
        debugger
        return done(null, user);
      });
    });
  }

  ));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

};
