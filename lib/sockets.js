var User = require('../models/user');

module.exports = function(io){
  io.on('connection', function(socket){
    socket.on('login', function(user_id){
      User.findOne({ facebook_id: user_id }, function(err, user){
        if(err){ 
          socket.emit('user-setup', err.errors, null);
        }

        socket.emit('user-setup', null, user);
        socket.broadcast.emit('user-joined', user);

        socket.on('disconnect', function(){
          User.update({
            facebook_id: user["facebook_id"]
          }, {
            $set: { online: false }
          },
          function(err, doc){
            user["online"] = false;
            socket.broadcast.emit('user-disconnected', user);
          });
        });
      });
    });
  });
};
