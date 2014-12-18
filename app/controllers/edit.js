import Ember from 'ember';

export default Ember.ObjectController.extend({

    /**
    * Dependency injection
    *
    * @type {Array}
    */
    needs: ['application'],

    actions: {
        savePerson:function(person){
            person.save();
        }
    }

});
