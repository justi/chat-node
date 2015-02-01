define([
  'jquery',
  'socket-io',
  'views/users',
  'views/messages',
  'views/connection'
], function($, io, UserCollectionView, MessagesView, ConnectionView){
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
      if(!$('#' + user._id).parent('div').length){
        new UserCollectionView({ el: "#contact-list", collection: [user] });
      }
      new ConnectionView({el: "#messages", collection: user});
    });

    socket.on('user-disconnected', function(guest){
      $('#' + guest._id).parent('div').remove();
      new ConnectionView({el: "#messages", collection: guest});
    });
  };

  return {
    initialize: initialize
  };
});
