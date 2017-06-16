import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        newAns() {
            var params = {
                answer: this.get('answer'),
                author: this.get('author'),
                vote: 0,
                question: this.get('question'),
            };
            this.set('answer', '');
            this.set('author', '');
            this.sendAction('newAns1', params);
        },
        upVote(ans) {
            var vote = Number(ans.get('vote'));
            vote + 1;
            ans.set('vote', vote);
            this.sendAction('upVote1', ans);            
        },
        downVote(ans) {
            var vote = Number(ans.get('vote'));
            vote - 1;
            ans.set('vote', vote);
            this.sendAction('downVote1', ans);
        }
    }
});
