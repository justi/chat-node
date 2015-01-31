define(['backbone', 'text!templates/message.html' ],function(Backbone, messageTemplate){

  var MessagesView = Backbone.View.extend({
    template:  _.template(messageTemplate),

    initialize: function(options){
      this.data = options.data;
      this.render();
    },

    render: function(){
      this.$el.append(this.template(this.data));
    }
  });

  return MessagesView;

});
