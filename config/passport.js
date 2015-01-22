module.exports = function(passport, FacebookStrategy, config) {

  passport.use(new FacebookStrategy({
    clientID: config.get('facebook.clientID'),
    clientSecret: config.get('facebook.clientSecret'),
    callbackURL: "http://localhost:3000/auth/facebook/callback",
  },

  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
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
