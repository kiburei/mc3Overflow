import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        newAns() {
            var params = {
                answer: this.get('answer'),
                author: this.get('author'),
                question: this.get('question'),
            };
            this.set('answer', '');
            this.set('author', '');
            this.sendAction('newAns1', params);
        }
    }
});
