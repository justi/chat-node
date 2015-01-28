var homeController      = require('../controllers/home_controller');
var chatController      = require('../controllers/chat_controller');

module.exports = function(app, passport) {
  app.get('/', homeController.index);
  app.get('/chat', chatController.index);
  app.get('/chat/users', chatController.users);

  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/chat',
    failureRedirect: '/auth/fail'
  }));

  app.get('/logout',function(req, res){
    req.logout();
    res.redirect('/');
  });

};
