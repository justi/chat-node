var User = require('../../models/user');
module.exports = {

  find: function(req, res){
    User.findById(req.params.id, function(err, user){
      if(!err){
        res.json(user);
      }
    });
  }
};
