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

                    if (Ember.empty(week)) {
                        var newWeek = self.get('store').createRecord('week', {
                            kw: self.controllerFor("session").get('kw'),
                            year: self.controllerFor("session").get('year'),
                            person: item
                        });
                        item.get("weeks").pushObject(newWeek);
                        item.save();
                        newWeek.save();
                    }
                });
            });
            return persons;
        });

    },
    setupController: function(controller, model){
        controller.set('model', model);
        this._super(controller, model);
    }
});
