import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DummyENV.locationType
});

Router.map(function() {
  this.route('facebook');
  this.route('twitter');
  this.route('linkedin');
});

export default Router;
