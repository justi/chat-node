var User = require('../models/user');

module.exports = function(io){
  io.on('connection', function(socket){
    socket.on('login', function(user_id){
      User.findOne({ facebook_id: user_id }, function(err, user){
        if(err){ 
          socket.emit('user-setup', err.errors, null);
        }

        console.log(user);
        socket.emit('user-setup', null, user);
      });
    });
  });
};
