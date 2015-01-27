require.config({
  paths: {
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    jquery: '/javascripts/lib/jquery',
    'bootstrap': '/javascripts/lib/bootstrap.min',
    slider: '/javascripts/lib/jquery-slider',
    'socket-io': 'https://cdn.socket.io/socket.io-1.3.2'
  },
  shim: {
    'Backbone': {
        deps: ['Underscore']
      }
  }
});

require(['app'], function (app) {
  app.initialize();
});
