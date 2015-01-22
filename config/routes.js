var homeController      = require('../controllers/home_controller');

module.exports = function(app, passport) {
  app.use('/chat', function(req, res, next){
    if(!req.user){ return res.redirect('/'); }

    next();
  }); 

  app.get('/', homeController.index);
  app.get('/chat', homeController.chat);

  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/auth/fail'
  }));

  app.get('/logout',function(req, res){
    req.logout();
    res.redirect('/');
  });

};
