define(['backbone','socket-io','views/messages'],function(Backbone, io, MessagesView){

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
        id: $message.attr('data-id'),
        message: $message.val()
      };
      this.io.emit('chat message', data);
      $message.val('');
      return false;
    },

    chatMessage: function(data){
      new MessagesView({el: '#messages', data: data});
      $('#messages').scrollTop($('#messages')[0].scrollHeight)
    }

  });


  return ChatController;

});
