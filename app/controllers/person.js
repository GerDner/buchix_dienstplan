import Ember from 'ember';

export default Ember.ObjectController.extend({

    /**
    * Dependency injection
    *
    * @type {Array}
    */
    needs: ['session'],

    types: function(){
        return this.get('store').filter('type', {clicked:false}, function() {
            return true;
        });
    }.property('controllers.session'),

    clickedTypes: function(){
        return this.get('store').filter('type', {clicked:true}, function() {
            return true;
        });
    }.property('controllers.session'),



    actions: {
        setType: function(type) {
            this.get('model').get('type').pushObject(type);
        },
        unsetType: function(type) {
            this.get('model').get('type').removeRecord(type);
        }
    }

});
