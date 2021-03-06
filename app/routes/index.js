import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('question');
    },
    actions: {
        // Save new Question to Database
        newQue2 (params) {
            var newQuestion = this.store.createRecord('question', params);
            newQuestion.save();
            this.transitionTo('index');
        }
    }
});
