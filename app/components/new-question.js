import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        newQue(){
            var params = {
                question: this.get('question'),
                author: this.get('author'),
                date: this.get('date'), 
            };
            this.sendAction('newQue1', params);
            this.set('question', '');
            this.set('author', '');
            this.set('date', '');
        }
    }
});
