import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    postQuestion2(params) {
      this.sendAction('postQuestion3', params);
    }
  }
});
