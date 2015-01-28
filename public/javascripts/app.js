define([
  'jquery',
  'underscore',
  'backbone',
  'models/user',
  'views/users',
  'views/messages'
], function($, _, Backbone, UserCollection, UserCollectionView, MessagesView){
  var initialize = function(){

    var users = new UserCollection();
    users.fetch({
      success: function(child, users){ 
        var view = new UserCollectionView({ el: "#contact-list", collection: users });
      }
    });

    new MessagesView({el: "#messages"});
  };

  return {
    initialize: initialize
  };
});
