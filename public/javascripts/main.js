require.config({
  paths: {
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    jquery: '/javascripts/jquery',
    'bootstrap': '/javascripts/bootstrap.min',
    slider: '/javascripts/jquery-slider',
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
