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
        var persons = this.store.find('person');
        var self = this;
        return Ember.run(function(){
            persons.then(function(persons){
                persons.filter(function(item){
                    var week = item.get('currentWeek');
                    console.log('kickstarting attempt week with' + self.controllerFor("application").get('kw') + self.controllerFor("application").get('year'))
                    if (Ember.empty(week) && self.controllerFor("application").get('kw') !== 0) {
                        console.log('kickstarting empty week with' + self.controllerFor("application").get('kw') + self.controllerFor("application").get('year'))
                        var newWeek = self.get('store').createRecord('week', {
                            kw: self.controllerFor("application").get('kw'),
                            year: self.controllerFor("application").get('year'),
                            person: [self.store.find('548583584b94ab8332000001')]
                        });
                        newWeek.save();
                        //newWeek.get('person').pushObject(item);
                        item.get("weeks").pushObject(newWeek);

                        item.save();

                    }
                });
            });
            return persons;
        });

    },
    setupController: function(controller, model){
        controller.set('year', parseInt(moment().format('GGGG')));
        controller.set('kw', parseInt(moment().format('W')));
        controller.set('model', model);
        this._super(controller, model);
    }
});
