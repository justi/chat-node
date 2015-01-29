define([
  'jquery',
  'socket-io',
  'views/messages',
  'views/connection'
], function($, io, MessagesView, ConnectionView){
  var initialize = function(){
    var id = $('.message').data('id');
    var socket = io();

    socket.emit('login', id);

    socket.on('user-setup', function(err, response){
      if(err){ return false; }
      var user = response;
      new ConnectionView({el: "#messages", collection: user});

      // List events related with the user inside here to have the instance
    });

    // Socket events
    socket.on('user-joined', function(user){
      new ConnectionView({el: "#messages", collection: user});
    });
  };

  return {
    initialize: initialize
  };
});
