Textbook.SectionController = Ember.ObjectController.extend({
  hidden: true,

  toggle: function() {
    this.toggleProperty('hidden');
  }
});
