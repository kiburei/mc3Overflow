import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('question', params.question_id);
    },
    actions: {
        editQue2(question, params) {
            Object.keys(params).forEach(function(key) {
    if(params[key]!==undefined) {
      question.set(key,params[key]);
    }
  });
            question.save();
            this.transtionTo('index');
        },
        destroy2(question) {
            question.destroyRecord();
            this.transtionTo('index');
        },
        // save new answer as a child of question
        newAns2() {
            alert("tmefika");
        }
    }
});
