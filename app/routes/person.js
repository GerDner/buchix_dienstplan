import Ember from 'ember';

export default Ember.Route.extend({

    setupController: function(controller) {
        var people = this.get('store').createRecord('person', {
            name: ""
        });
        controller.set('model', people);
    }

});
