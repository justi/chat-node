define([
  'jquery',
  'socket-io',
  'views/messages',
  'views/connection'
], function($, io, MessagesView, ConnectionView){
  var initialize = function(){
    var id = $('.message').data('id');
    var socket = io();

    socket.emit('login', id);

    socket.on('user-setup', function(err, response){
      if(err){ return false; }
      var user = response;
      new ConnectionView({el: "#messages", collection: user});

      // List events related with the user inside here to have the instance
    });

    socket.on('user-joined', function(user){
      new ConnectionView({el: "#messages", collection: user});
    });

    // Socket events

    // Whenever the server emits 'login', log the login message
    //socket.on('login', function (data) {
      //debugger
      //connected = true;
      //// Display the welcome message
      //var message = "Welcome to Socket.IO Chat – ";
      //log(message, {
        //prepend: true
      //});
      //addParticipantsMessage(data);
    //});

    //// Whenever the server emits 'new message', update the chat body
    //socket.on('new message', function (data) {
      //addChatMessage(data);
    //});

    //// Whenever the server emits 'user joined', log it in the chat body
    //socket.on('user joined', function (data) {
      //log(data.username + ' joined');
      //addParticipantsMessage(data);
    //});

    //// Whenever the server emits 'user left', log it in the chat body
    //socket.on('user left', function (data) {
      //log(data.username + ' left');
      //addParticipantsMessage(data);
      //removeChatTyping(data);
    //});

    //// Whenever the server emits 'typing', show the typing message
    //socket.on('typing', function (data) {
      //addChatTyping(data);
    //});

    //// Whenever the server emits 'stop typing', kill the typing message
    //socket.on('stop typing', function (data) {
      //removeChatTyping(data);
    //});
  };

  return {
    initialize: initialize
  };
});
