(function (_42, window, document, undefined) {
  var Router = Backbone.Router.extend({
    routes: {
      'home': 'home',
      'create': 'create',
      'grade': 'grade',
      '*default': 'default_route'
    },

    $viewPort: null,

    currentView: null,

    initialize: function () {
      this.$viewPort = $("#viewPort");
    },

    loader: function (vn) {
      vn = vn || 'home';
      if (this.currentView) {
        this.currentView.remove();
        this.currentView = null;
      }

      if (_42[vn]) {
        this.currentView = _42[vn];
        this.currentView.render().$el.appendTo('#viewPort').trigger('create');

        this.$viewPort.page().show();
        // this.$viewPort.find('#' + this.currentView.model.get('_id')).first().show();
      } else {
        console.log(vn + ' is not defined yet!');
      }
    },

    home: function () {
      this.loader('home');
    },

    create: function () {
      // this.loader('create');
    },

    grade: function () {
      // this.loader('grade');
    },

    default_route: function () {
      this.navigate('home', {trigger: true});
      // $.mobile.navigate('#home');
    }
  });

  // $(document).on('deviceready', function () {
  $(document).on('ready', function () {
    _42.router = new Router();
    Backbone.history.start();
  });

}(window._42 = window._42 || {}, window, document));