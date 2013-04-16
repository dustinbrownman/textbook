Textbook.TocChapterController = Ember.ObjectController.extend({
  hidden: false,

  toggle: function(chapter) {
    this.toggleProperty('hidden');
  }
});
