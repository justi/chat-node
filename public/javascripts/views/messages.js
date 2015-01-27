define(['backbone', 'text!templates/message.html' ],function(Backbone, messageTemplate){

  var MessagesView = Backbone.View.extend({
    template:  _.template(messageTemplate),

    initialize: function(options){
      this.data = options.data;
      this.render();
    },

    render: function(){
      this.scrollDown();
      this.$el.parent().scrollTop(this.$el.parent()[0].scrollHeight);
    },

    scrollDown: function(){
      this.$el.append(this.template(this.data));
    }
  });

  return MessagesView;

});
