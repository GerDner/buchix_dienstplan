import Ember from 'ember';

export default Ember.Route.extend({

    setupController: function(controller) {
        var person = this.get('store').createRecord('person');
        controller.set('model', person);
    }

});
