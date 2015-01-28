define(['backbone'],function(Backbone){
  var User = Backbone.Model.extend({
    idAttribute: "_id"
  });

  var UserCollection = Backbone.Collection.extend({
    model: User,
    url: "chat/users"
  });

  return UserCollection;
});
