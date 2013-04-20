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
                this.navigate(vn, {trigger : false});
                this.currentView = _42[vn].initialize().view;
                this.currentView.render();
                this.$viewPort.append(this.currentView.el);
                this.currentView.$el.find('#' + this.currentView.template).page();
                //$.mobile.changePage(  this.currentView.$el.find('#' + this.currentView.template), {transition : 'pop'});
                this.currentView.$el.find('#' + this.currentView.template).fadeIn('slow');
            } else {
                console.log(vn + ' is not defined yet!');
            }
        },

        home: function () {
            // load home
            this.loader('home');
        },

        create: function () {
            // load create
            this.loader('create');
        },

        grade: function () {
            // load grade
            this.loader('grade');
        },

        default_route: function () {
            this.navigate('home', {
                trigger: true
            });
        }
    });

    $(function () {
        _42.router = new Router();
        Backbone.history.start();
    });
}(window._42 = window._42 || {}, window, document));