import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin,{
    queryParams: {
        kw: {
            refreshModel: true
        },
        year: {
            refreshModel: true
        }
    },
    model: function() {
        var self = this;

        return this.store.all('type');
    },
    setupController: function(controller, model){
        controller.set('year', parseInt(moment().format('GGGG')));
        controller.set('kw', parseInt(moment().format('W')));
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
