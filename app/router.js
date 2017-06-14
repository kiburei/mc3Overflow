import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< HEAD
  this.route('question', {path: '/question/:question_id'});
=======
  this.route('question', function() {
    this.route('show', {path: '/show/:question_id'});
  });
>>>>>>> 4a702e2769be34ed592228f994d01d89c9379ff8
});

export default Router;
