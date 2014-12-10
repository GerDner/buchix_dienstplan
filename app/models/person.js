import DS from 'ember-data';
import Ember from 'ember';
var person = DS.Model.extend({
  name: DS.attr('string'),
  lastname: DS.attr('string'),
  phone: DS.attr('string'),
  handy: DS.attr('string'),
  mail: DS.attr('string'),
  weeks: DS.hasMany('week',{inverse: 'person',async:true}),
  type: DS.hasMany('type',{async:true}),

  currentWeek: function(){
      var self = this;
      return this.get('weeks').filter(function(week) {
          return week.get('kw') === self.get('kw') &&
          week.get('year') === self.get('year');
      });
  }.property('tempWeeks','kw', 'year'),
  kw: Ember.computed.alias('session.kw'),
  year: Ember.computed.alias('session.year'),
  fullname: function(){
      return this.get('name') + ', ' + this.get('lastname');
  }.property('name', 'lastname')
});

person.reopenClass({
    FIXTURES: [
    { id: 1,lastname: 'Bucher', name: 'Max', phone: '07243 65687' , weeks: [1,2]},
    { id: 2,lastname: 'Anders', name: 'Ralf', phone: '07243 65687', weeks: [3,4]},
    { id: 3,lastname: 'Affe', name: 'Lukas', phone: '07243 65687', weeks: [5,6]},
    { id: 4,lastname: 'Zimmermann', name: 'Jonas', phone: '07243 65687', weeks: [8]}
    ]
});



export default person;
