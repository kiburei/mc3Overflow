import Ember from 'ember';

export default Ember.Component.extend({
<<<<<<< HEAD
    actions: {
        newQue(){
            var params = {
                subject: this.get('subject'),
                question: this.get('question'),
                author: this.get('author'),
                date: this.get('date'), 
            };
            this.sendAction('newQue1', params);
            this.set('subject', '');
            this.set('question', '');
            this.set('author', '');
            this.set('dateg', '');
        }
    }
=======
  actions: {
    postQuestion(){
      var params = {
        author: this.get('author'),
        subject: this.get('subject'),
        question: this.get('question')
      }
      this.sendAction('postQuestion1', params);
      this.set('author', '');
      this.set('subject', '');
      this.set('question', '');
    }
  }
>>>>>>> 4a702e2769be34ed592228f994d01d89c9379ff8
});
