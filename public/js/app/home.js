define(['app/page', 'app/utils', 'app/dispatcher'], function (Page, utils, dispatcher) {
  return Page.extend({
    id: 'home',

    events: _.extend(Page.prototype.events, {
      'click  a.create': 'create_handler',
      'click  a.photo': 'grade_handler'
    }),

    create_handler: function (event) {
      event.preventDefault();
      dispatcher.trigger('app:navigate', 'create');
    },

    grade_handler: function (event) {
      event.preventDefault();
      dispatcher.trigger('app:navigate', 'create');
    }
  });
});