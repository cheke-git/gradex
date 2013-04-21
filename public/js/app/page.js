define(['backbone', 'app/utils', 'app/dispatcher'], function (Backbone, utils, dispatcher) {
  return Backbone.View.extend({
    id: '',

    className: 'page',

    template: null,

    events: {
      'click .back': 'back'
    },

    initialize: function () {
      _.bindAll(this);
      this.template = utils.loadTemplate(this.id + '.hb', true);
    },

    render: function (data) {
      var model;

      if (this.model) {
        model = this.model.toJSON();
      } else {
        model = {};
      }

      if (data) {
        _.extend(model, data);
      }

      this.$el.html(this.template(model));
      return this;
    },

    back: function(event) {
      event.preventDefault();
      dispatcher.trigger('app:pop_view');
    },
  });
});