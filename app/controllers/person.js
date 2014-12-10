import Ember from 'ember';

export default Ember.ObjectController.extend({

    /**
    * Dependency injection
    *
    * @type {Array}
    */
    needs: ['session'],

    types: function(){
        return this.get('store').filter('Type', { clicked: false }, function(value) {
            return !value.get('clicked');
        });
    }.property('typeChanged'),

    clickedTypes: function(){
        return this.get('store').filter('Type', { clicked: true }, function(value) {
            return value.get('clicked');
        });
    }.property('typeChanged'),

    typeChanged: 'l',

    actions: {
        setType: function(type) {
            this.get('model').get('type').pushObject(type);
            type.set('clicked', true);
            this.set('typeChanged',this.get('typeChanged'+'l'));
        },
        unsetType: function(type) {
            this.get('model').get('type').removeRecord(type);
            type.set('clicked', false);
            this.set('typeChanged',this.get('typeChanged'+'l'));
        },
        savePerson:function(person){
            person.save();
        }
    }

});
