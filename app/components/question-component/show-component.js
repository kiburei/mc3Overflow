import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    ansQuestion2(params) {
      alert("dsgdf" + params)
      this.sendAction('ansQuestion3', params);
    }
  }
});
