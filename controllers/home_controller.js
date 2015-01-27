module.exports = {

  index: function(req, res){
    return res.render('home/index');
  },

  chat: function(req, res){
    return res.render('home/chat', {user: req.user} );
  }

};
