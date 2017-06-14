import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    ansQuestion() {
      alert('helloe')
      // var params = {
      //   author: this.get('author'),
      //   answer: this.get('answer')
      // }
      // this.sendAction('ansQuestion1', params);
    }
  }
});
