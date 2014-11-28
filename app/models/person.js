import DS from 'ember-data';
import Ember from 'ember';
var person = DS.Model.extend({
  name: DS.attr('string'),
  lastname: DS.attr('string'),
  phone: DS.attr('string'),
  handy: DS.attr('string'),
  mail: DS.attr('string'),
  weeks: DS.hasMany('week'),
  type: DS.hasMany('type'),
  tempWeeks: function(){
      return this.get('weeks').filterBy('kw', this.get('kw'));
  }.property('weeks','kw', 'year'),
  currentWeek: function(){
      return this.get('tempWeeks').filterBy('year', this.get('year'));
  }.property('tempWeeks','kw', 'year'),
  kw: Ember.computed.alias('session.kw'),
  year: Ember.computed.alias('session.year'),
  fullname: function(){
      return this.get('name') + ', ' + this.get('lastname');
  }.property('name', 'lastname')
});

person.reopenClass({
    FIXTURES: [
    { id: 1,lastname: 'Mustermann', name: 'Max', phone: '07243 65687' , weeks: [1,2]},
    { id: 2,lastname: 'Mustermann', name: 'Ralf', phone: '07243 65687', weeks: [3,4]},
    { id: 3,lastname: 'Mustermann', name: 'Lukas', phone: '07243 65687', weeks: [5,6]},
    { id: 4,lastname: 'Mustermann', name: 'Jonas', phone: '07243 65687', weeks: [8]}
    ]
});



export default person;
