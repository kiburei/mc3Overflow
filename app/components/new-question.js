import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    postQuestion(){
      var params = {
        author: this.get('author'),
        subject: this.get('subject'),
        question: this.get('question')
      }
      this.sendAction('postQuestion1', params);
    }
  }
});
