Textbook.Router.map(function() {
  this.route('lessons', {path: '/'})
  this.resource('lessons');
  this.resource('lesson', {path: '/lesson/:lesson_id'});
});

Textbook.LessonsRoute = Ember.Route.extend({
  model: function() {
    return Textbook.Lesson.find();
  }
});
