import DS from 'ember-data';

export default DS.Model.extend({
<<<<<<< HEAD
    answer: DS.attr(),
    author: DS.attr(),
    question: DS.belongsTo('question', {async: true})
=======
  author: DS.attr(),
  answer: DS.attr(),
  question: DS.belongsTo('question', { async: true })

>>>>>>> 4a702e2769be34ed592228f994d01d89c9379ff8
});
