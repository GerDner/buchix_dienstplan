import Ember from 'ember';

export default Ember.ObjectController.extend({

    /**
    * Dependency injection
    *
    * @type {Array}
    */
    needs: ['application'],

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
            type.set('clicked', true);
            this.set('typeChanged',this.get('typeChanged'+'l'));
        },
        unsetType: function(type) {
            type.set('clicked', false);
            this.set('typeChanged',this.get('typeChanged'+'l'));
        },
        savePerson:function(person){
            var self = this;
            this.get('clickedTypes').then(function(types){
                types.forEach(function(type){
                    person.get('type').pushObject(type);
                })
                person.save().then(function(){
                    person.get('type').then(function(types){
                        types.save();
                        self.transitionTo('index')
                    })
                });
            })
        }
    }

});
