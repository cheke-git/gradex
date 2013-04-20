var _42 = (function(window, document, undefined){
    var currentView, $viewPort;
    function loader(_self, vn){
        vn = vn || 'home';
        if(currentView){
            currentView.remove();
        }
        currentView = _self[vn].initialize().view;
        currentView.render();
        $viewPort.html(currentView.el);
    }
    return {
        initialize : function(){
            $viewPort = $("#viewPort");
            this.load();
        },
        load : function(viewName){
            viewName = viewName || 'home';
            loader(this, viewName);
        },
    };
})(window, document);

_42.home = (function(window, document, undefined){
    var View = Backbone.View.extend({

        template : 'home',

        events : {

        },

        initialize : function(){

        }, 

        render : function(){
            this.$el.html('hola');
            return this;
        }
    });
    var Model = Backbone.Model.extend({});

    return {
        initialize : function(){
            var model = new Model({});
            this.view = new View({model : model});
            return this;
        }
    }
})(window, document)