define([
  'jquery',
  'underscore',
  'backbone',
  'models/user',
  'views/users',
  'controllers/chat_controller'
], function($, _, Backbone, UserCollection, UserCollectionView, ChatController){
  var initialize = function(){

    var users = new UserCollection();
    users.fetch({
      success: function(child, users){ 
        var view = new UserCollectionView({ el: "#contact-list", collection: users });
      }
    });
    new ChatController();
  };

  return {
    initialize: initialize
  };
});
