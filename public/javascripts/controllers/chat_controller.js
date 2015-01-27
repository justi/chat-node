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
      data = {
        name: $message.attr('data-name'),
        profile: $message.attr('data-profile'),
        message: $message.val()
      };
      this.io.emit('chat message', data);
      $message.val('');
      return false;
    },

    chatMessage: function(data){
      new MessagesView({el: '#messages', data: data});
    },

    userLogged: function(user){
    }

  });

  return ChatController;

});
