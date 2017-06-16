import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('question', params.question_id);
    },
    actions: {
        editQue2(que, params) {
            Object.keys(params).forEach(function (key) {
                if (params[key] !== undefined) {
                    que.set(key, params[key]);
                }
            });
            que.save();
            this.transtionTo('index');
        },
        destroy2(que) {
            que.destroyRecord();
            this.transitionTo('index');
        },
        // save new answer as a child of question
        newAns2(params) {
            var newAns = this.store.createRecord('answer', params);
            var question = params.question;
            question.get('answer').addObject(newAns);
            newAns.save().then(function() {
                return question.save();
            });
            this.transitionTo('question', question);
        },
        upVote2(ans){
            ans.save();
        }
    }
});
