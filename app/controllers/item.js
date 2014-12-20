import Ember from 'ember';

export default Ember.ObjectController.extend({

    /**
    * Dependency injection
    *
    * @type {Array}
    */
    needs: ['index'],

    kw: Ember.computed.alias('controllers.index.kw'),
    year: Ember.computed.alias('controllers.index.year'),

    currentWeek: function() {
        var self = this;
        var filteredWeeks;
        var weeks = this.get('weeks');
        this.set('cWeek',null)

        weeks.then(function(loadedWeeks){
            var filter = Ember.ArrayProxy.createWithMixins({
                content: loadedWeeks
            });
            console.log(filter.toString())
            var foundone = false;
            filter.forEach(function(week) {
                //console.log('filter auf: '+week.get('kw')+'/'+self.get('kw')+' '+ week.get('year') +'/'+ self.get('year')+ 'ist')
                //console.log(week.get('kw') == self.get('kw') && week.get('year') == self.get('year'))
                if (week.get('kw') == self.get('kw') && week.get('year') == self.get('year')) {
                    self.set('cWeek',week);
                    foundone = true;
                    return true;
                }
            });
            if (foundone === false) {
                console.log('kickstarting new week')
                var newWeek = self.store.createRecord('week', {
                    kw: self.get('kw'),
                    year: self.get('controllers.index.year')
                });
                newWeek.set('person', self.get('model'));
                self.get('model').get('weeks').pushObject(newWeek);
                newWeek.save().then(function(){
                    self.get('model').save();
                })
                self.set('cWeek',newWeek)
            } else {
                console.log('no kickstarting')
            }

        })
    }.property('kw'),

    cWeek: null


});
