Textbook.ChapterController = Ember.ObjectController.extend({
  hidden: false,

  toggle: function() {
    this.toggleProperty('hidden');
  }
});
