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
        var persons = this.store.all('person');
        var applicationController = this.controllerFor('application')
        var self = this;

                persons.filter(function(item, index, enumerable){
                    if ( item.get('currentWeek') === undefined && applicationController.get('kw') !== 0 && applicationController.get('year') !== 0) {
                        var newWeek = self.store.createRecord('week', {
                            kw: applicationController.get('kw'),
                            year: applicationController.get('year')
                        })
                        newWeek.set('person', item);
                        item.get('weeks').pushObject(newWeek);
                        newWeek.save().then(function(){
                            item.save();
                        });
                    }
                })

        return this.store.all('person');


    },
    setupController: function(controller, model){
        controller.set('year', parseInt(moment().format('GGGG')));
        controller.set('kw', parseInt(moment().format('W')));
        controller.set('model', model);
        this.controllerFor('application').set('isLoading', false);
        this._super(controller, model);
    },
    actions: {
        loading: function(transition, originRoute) {
            this.controllerFor('application').set('isLoading', true);
            return true;
        }
    }
});
