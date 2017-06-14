import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  subject: DS.attr(),
  question: DS.attr(),
<<<<<<< HEAD
  answer: DS.hasMany('answer', {async: true})
=======
  answers: DS.hasMany('answer', { async: true })
>>>>>>> 4a702e2769be34ed592228f994d01d89c9379ff8

});
