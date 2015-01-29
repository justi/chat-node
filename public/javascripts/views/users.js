define(['backbone', 'text!templates/user.html' ],function(Backbone, usersTemplate){
  var UserView = Backbone.View.extend({
    template:  _.template(usersTemplate),
    render: function() {
      this.$el.html(this.template(this.model));
      return this;
    }
  });

  var UserCollectionView = Backbone.View.extend({
    initialize: function(){
      this.render();
    },

    render: function(){
      var $el = this.$el;

      _.each(this.collection, function(user) {
        var userView = new UserView({ model: user });
        this.$el.append(userView.render().el);
      }, this);
    }
  });

  return UserCollectionView;

});
