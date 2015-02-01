define(['backbone', 'text!templates/connection.html' ],function(Backbone, connectionTemplate){

  var ConnectionView = Backbone.View.extend({
    template:  _.template(connectionTemplate),

    initialize: function(){
      this.render();
    },

    render: function(){
      var id = String($('.message').data('id'));
      var user = this.collection;

      var fb_id = String(user["facebook_id"]);
      user["name"] = fb_id === id ? "You" : user["name"];
      user["message"] = user["online"] ? 'joined the conversation' : 'left the conversation';
      this.$el.append(this.template(user));
    }
  });

  return ConnectionView;

});
