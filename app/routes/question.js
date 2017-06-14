import Ember from 'ember';

export default Ember.Route.extend({
<<<<<<< HEAD
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
        newAns2(params) {
            var newAns = this.store.creatRecord('answer', params);
            // attach to parent object
            var question = params.question;
            question.get('answers').addObject(newAns);
            
        }
    }
=======
  model(){
    return this.store.findAll('question');
  },
  actions: {
    postQuestion4(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('question');
    },
    editQuestion4(question, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    }
  }
>>>>>>> 4a702e2769be34ed592228f994d01d89c9379ff8
});
