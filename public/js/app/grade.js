(function (_42, window, document, undefined) {
    var View = Backbone.View.extend({

        el: '#viewPort',

        template: 'grade',

        events: {

        },

        initialize: function () {

        },

        render: function () {
            this.$el.html();
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