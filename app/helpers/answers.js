import Ember from 'ember';

export function answers(params) {
  var question = params[0];
  var answerTotal = question.get('answer').get('length');
  return Ember.String.htmlSafe(answerTotal);
}

export default Ember.Helper.helper(answers);
