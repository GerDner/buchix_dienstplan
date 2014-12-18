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
        var applicationController = this.controllerFor('application')
        var self = this;
        var kw = parseInt(moment().format('W'));
        var year = parseInt(moment().format('GGGG'));
        var persons = this.store.find('person');
        persons.then(function(persons){
            persons.forEach(function(person){
                console.log(person.get('currentWeek'))
                if (person.get('currentWeek') === undefined) {
                    console.log('kickstarting new week')
                    var newWeek = self.store.createRecord('week', {
                        kw: kw,
                        year:year
                    });
                    newWeek.set('person', person);
                    person.get('weeks').pushObject(newWeek);
                    newWeek.save().then(function(){
                        person.save();
                    })
                } else {
                    console.log('no kickstart')
                }
            })
        })


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
