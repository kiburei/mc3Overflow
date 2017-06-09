import Ember from 'ember';

export default Ember.Component.extend({
   showEdit: false,
  actions: {
    showEdit() {
      this.set('showEdit', true);
    },
    editQuestion(question) {
      var params = {
        question: this.get('editquestion'),
      };
      alert(params.question);
      this.set('showEdit', false);
      this.sendAction('editQuestion1', question, params)
    }

  }
});
