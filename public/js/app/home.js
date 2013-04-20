(function (_42, window, document, undefined) {
    var View = Backbone.View.extend({

        template: 'home',

        events: {

        },

        initialize: function () {

        },

        render: function () {
            this.$el.html(
                '<div data-role="header" data-position="inline">'+
                '<h1>Home</h1></div><div data-role="content" data-theme="a">'+
                '<a data-role="button" href="#">Create</a>'+
                '<a data-role="button" href="#">Grade</a></div>');
            return this;
        }
    });
    var Model = Backbone.Model.extend({});

    _42.home = {
        initialize: function () {
            var model = new Model({});
            this.view = new View({
                model: model
            });
            return this;
        },

        remove: function() {
           this.view.remove();
        }
    };
}(window._42 = window._42 || {}, window, document));