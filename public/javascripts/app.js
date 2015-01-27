define([
  'jquery',
  'underscore',
  'backbone',
  'views/users',
  'views/messages',
  'controllers/chat_controller'
], function($, _, Backbone, UserView, MessagesView, ChatController){
  var initialize = function(){
    new ChatController();
  };

  return {
    initialize: initialize
  };
});
