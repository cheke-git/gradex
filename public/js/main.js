require.config({
  paths: {
    'jquery': 'libs/jquery/jquery-1.9.1',
    'jqm': 'libs/jqm/jquery.mobile-1.3.1',
    'jqmNavigator': 'libs/jqm/jqmNavigator',
    'underscore': 'libs/underscore/underscore',
    'handlebars': 'libs/handlebars/handlebars',
    'backbone-raw': 'libs/backbone/backbone-raw',
    'backbone-super': 'libs/backbone/backbone-super',
    'backbone': 'libs/backbone/backbone',
    'text': 'libs/requirejs/text',
    'css': 'libs/requirejs/css',
    'normalize': 'libs/requirejs/normalize'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    'backbone-raw': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone-super': {
      deps: ['backbone-raw']
    },
    jqm: {
      deps: ['jquery', 'jqmNavigator']
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});

require([
  'backbone', 'app/dispatcher', 'app/home', 'app/create', 'app/create', 'jqm'
], function(Backbone, dispatcher, HomeView, CreateView, GradeView) {

  dispatcher.on('app:pop_view', function() {
    $.mobile.jqmNavigator.popView();
  });

  dispatcher.on('app:navigate', function(page) {
    switch(page) {
    case 'home':
      $.mobile.jqmNavigator.pushView(new HomeView());
      break;

    case 'create':
      $.mobile.jqmNavigator.pushView(new CreateView());
      break;

    case 'grade':
      $.mobile.jqmNavigator.pushView(new GradeView());
      break;

    default:
      alert('Module ' + page + ' is not ready yet!');
    }
  });

  dispatcher.trigger('app:navigate', 'home');
});