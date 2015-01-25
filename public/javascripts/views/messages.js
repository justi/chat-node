define(['backbone', 'text!templates/message.html' ],function(Backbone, messageTemplate){

  var MessagesView = Backbone.View.extend({
    template:  _.template(messageTemplate),

    initialize: function(){
      this.render();
    },

    render: function(){
      var users = { user: 'Ivan velasquez', message: 'Hey body, how are you'};

      this.$el.html(this.template(users));
    }
  });

  return MessagesView;

});
