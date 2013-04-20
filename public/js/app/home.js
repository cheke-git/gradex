(function (_42, window, document, undefined) {
    var View = Backbone.View.extend({
        template: 'home',

        events: {
            'click  a.photo' : 'takePhoto',
            'click  a.'

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
        takePhoto : function(){
            /*
            navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
                destinationType: Camera.DestinationType.FILE_URI }); 

            function onSuccess(imageURI) {
                /*
                var image = document.getElementById('myImage');
                image.src = imageURI;
                *
                plugins.fileUploader.uploadByUri({
                    server : '',
                    file : imageURI,
                    fileKey : '',
                    params : '',
                    fileName : 'test.png',
                    mimeType : 'image/jpg',
                    callback : function(){
                        //success
                    },
                    fail : function(){
                        //Fail
                    }

                });
            }

            function onFail(message) {
                alert('Failed because: ' + message);
            }
            */
           var options = { limit: 1 };

            navigator.device.capture.captureImage(function(){}, function(){}, options);

        }

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