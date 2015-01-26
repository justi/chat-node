define([
  'jquery',
  'underscore',
  'backbone',
  'views/users',
  'views/messages'
], function($, _, Backbone, UserView, MessagesView){
  var initialize = function(){

    new UserView({el: "#contact-list"});
    new MessagesView({el: "#messages"});

  };

  return {
    initialize: initialize
  };
});
