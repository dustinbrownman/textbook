Textbook.Chapter = DS.Model.extend({
  name: DS.attr('string'),
  number: DS.attr('string'),
  public: DS.attr('boolean'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  deleted_at: DS.attr('date'),
  sections: DS.hasMany('Textbook.Section')
});
