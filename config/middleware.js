var User = require('../models/user');

module.exports = function(app){
  app.use('/chat', function(req, res, next){
    if(!req.user){ return res.redirect('/'); }

    User.update({
      facebook_id: req.user.facebook_id
    }, {
      $set: { online: true }
    }, function(err, user){
      next();
    });
  }); 
};
