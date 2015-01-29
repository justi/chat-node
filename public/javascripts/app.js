define([
  'jquery',
  'underscore',
  'backbone',
  'models/user',
  'views/users',
], function($, _, Backbone, UserCollection, UserCollectionView){
  var initialize = function(){

    var users = new UserCollection();
    users.fetch({
      success: function(child, users){ 
        var view = new UserCollectionView({ el: "#contact-list", collection: users });
      }
    });
  };

  return {
    initialize: initialize
  };
});
