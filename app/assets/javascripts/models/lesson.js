Textbook.Lesson = DS.Model.extend({
  'name': DS.attr('string'),
  'body': DS.attr('string'),
  'number': DS.attr('number'),
  'public': DS.attr('boolean'),
  'section_id': DS.attr('number'),
  'created_at': DS.attr('date'),
  'updated_at': DS.attr('date'),
  'deleted_at': DS.attr('date'),
});
