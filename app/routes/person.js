import Ember from 'ember';

export default Ember.Route.extend({

    setupController: function(controller) {
        var person = this.get('store').createRecord('person', {
            name: ""
        });
        controller.set('model', person);
    }

});
