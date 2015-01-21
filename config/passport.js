module.exports = function(passport, FacebookStrategy) {

  passport.use(new FacebookStrategy({
    clientID: "315422298654725",
    clientSecret: "5250c7c6221989703a596e2fb93a78f0",
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
