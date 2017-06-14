import Ember from 'ember';

export default Ember.Component.extend({
    editForm: false,
    actions: {
        editForm() {
            this.set('editForm', true);
        },
        editQue(question) {
         var params = {
             question: this.get('question'),
         };
         this.set('question', '');
         this.set('editForm', false);
         this.sendAction('editQue1', question,  params);
        },
        destroy(question) {
            if(confirm('Delete this question?')){
                this.sendAction('destroy1', question);
            }
        }
    }
});
