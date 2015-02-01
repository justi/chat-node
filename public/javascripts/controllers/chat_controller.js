define(['backbone','socket-io','views/messages'],function(Backbone, io, MessagesView){

 var ChatController = Backbone.View.extend({

    el: '#chat',

    initialize: function(){
      this.io = io();
      this.io.on('chat message', this.chatMessage);
    },

    events: {
      'submit #form-chat': 'sendMessage'
    },

    sendMessage: function(){
      var $message = $('#input-message');

      isNotEmpty = $.trim($message.val()).length > 0;

      if(isNotEmpty){
        this.io.emit('chat message', $message.val());
      }

      $message.val('');
      return false;
    },

    chatMessage: function(data){
      var id = String($('#input-message').data('id'));
      var fb_id = String(data.user["facebook_id"]);

      data.user["name"] = fb_id === id ? "You" : data.user["name"];
      new MessagesView({el: '#messages', data: data});

      $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }

  });


  return ChatController;

});
