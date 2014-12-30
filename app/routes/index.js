import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin,{
    queryParams: {
        kw: {
            refreshModel: true,
            replace: true
        },
        year: {
            refreshModel: true,
            replace: true
        }
    },
    model: function() {
        var self = this;
        var types =  this.store.all('type')
        return Ember.RSVP.all(types.getEach('person')).then(function(person){
            return Ember.RSVP.all(person.getEach('week')).then(function(){
                return types;
            });
        });



    },
    setupController: function(controller, model){

        controller.set('model', model);


        this._super(controller, model);
    },
    actions: {
        loading: function(transition, originRoute) {
            this.controllerFor('application').set('isLoading', true);
            return true;
        }
    }
});
