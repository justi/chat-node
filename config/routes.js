var HomeController      = require('../controllers/home_controller');

module.exports = function(app, passport) {

  app.get('/', HomeController.index);

  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/auth/fail'
  }));

  app.get('/logout',function(req, res){
    res.redirect('/');
  });

};
