(function (_42, window, document, undefined) {
    var View = Backbone.View.extend({

        el: '#viewPort',

        template: 'home',

        events: {
            'click  a' : 'clickHandler'
        },

        initialize: function () {

        },

        render: function () {
            this.$el.html(Handlebars.templates[this.model.get('_id') + '.hb'](this.model.toJSON()));
            return this;
        },
        remove : function(){
            this.$el.html('');
            this.stopListening();
        },
        clickHandler : function(e){
            e.preventDefault();
            var section = $(e.currentTarget).attr('href');
            _42.router.navigate(section, {trigger : true});
        },

    });
    var Model = Backbone.Model.extend({
    });

    _42.home = {
        initialize: function () {
            var model = new Model({_id : 'home'});
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