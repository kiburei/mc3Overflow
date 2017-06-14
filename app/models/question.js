import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  subject: DS.attr(),
  question: DS.attr(),
  answer: DS.hasMany('answer', {async: true})

});
