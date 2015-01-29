define(['backbone', 'text!templates/connection.html' ],function(Backbone, connectionTemplate){

  var ConnectionView = Backbone.View.extend({
    template:  _.template(connectionTemplate),

    initialize: function(){
      this.render();
    },

    render: function(){
      var id = $('.message').data('id');
      var user = this.collection;

      user["name"] = user["facebook_id"] === id ? "You" : user["name"];
      this.$el.html(this.template(user));
    }
  });

  return ConnectionView;

});
