Textbook.Router.map(function() {
  this.route('table_of_contents', {path: '/'})
  this.route('table_of_contents')
  this.resource('lesson', {path: '/lesson/:lesson_id'});
});

Textbook.TableOfContentsRoute = Ember.Route.extend({
  model: function() {
    return Textbook.Chapter.find();
  }
});
