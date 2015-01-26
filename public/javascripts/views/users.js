define(['backbone', 'text!templates/user.html' ],function(Backbone, usersTemplate){

  var UsersView = Backbone.View.extend({
    template:  _.template(usersTemplate),

    initialize: function(){
      this.render();
    },

    render: function(){
      var users = { name: 'Ivan velasquez' };
      this.$el.html(this.template(users));
    }
  });

  return UsersView;

});
