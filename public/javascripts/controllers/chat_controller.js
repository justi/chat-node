define(['backbone',
       'jquery',
       'io',
       'views/messages'
], function(Backbone,$,io, MessagesView){

  var ChatController = Backbone.View.extend({

    el: '#chat',

    initialize: function(){
      this.io = io();
      this.io.on('chat message', this.chatMessage);
      this.io.on('user logged', this.userLogged);
    },

    events: {
      'submit #form-chat': 'sendMessage'
    },

    sendMessage: function(){
      $message = $('#input-message');
      this.io.emit('chat message', $message.val());
      $message.val('');
      return false;
    },

    chatMessage: function(msg){
      $message = $('#input-message');
      $.ajax({
        url: 'api/users/' + $message.attr('user'),
        success: function(user){
          new MessagesView({
            el: "#messages",
            message:{
              profile_picture: user.profile_picture,
              name: user.name,
              message: msg
            }
          });
        }
      });
    },

    userLogged: function(user){
    }

  });

  return ChatController;

});
