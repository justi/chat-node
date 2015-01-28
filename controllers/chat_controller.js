var User = require('../models/user');

module.exports = {
  index: function(req, res){
    return res.render('home/chat');
  },

  users: function(req, res){
    var users = User.find({ online: true }, function(err, users){
      if(err){ 
        return res.status(500).json({ error: err.errors });
      }

      return res.json(users);
    });

  }
};
