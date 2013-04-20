(function (_42, window, document, undefined) {
    var View = Backbone.View.extend({

        el: '#viewPort',

        template: 'create',

        events: {

        },

        initialize: function () {

        },

        render: function () {
            this.$el.html(
                '<div  data-role="page" data-theme="a" id="'+this.template+'">'+
                '<div data-role="content" data-theme="a">'+
                '<div data-role="fieldcontain">'+
                '<label for="name">Text Input:</label>'+
                '<input type="text" name="name" id="name" value="" />'+
                '</div>  '+
                '</div>'
            );
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