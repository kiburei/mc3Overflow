import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        newQue(){
            var params = {
                question: this.get('question'),
                author: this.get('author'),
                date: this.get('date'), 
            };
            alert(params.question);
        }
    }
});
