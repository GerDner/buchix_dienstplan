import DS from 'ember-data';
import Ember from 'ember';
var person = DS.Model.extend({
  name: DS.attr('string'),
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
  year: Ember.computed.alias('session.year')
});

person.reopenClass({
    FIXTURES: [
    { id: 1, name: 'Max Mustermann', phone: '07243 65687' , weeks: [1,2]},
    { id: 2, name: 'Ralf Stoerzbach', phone: '07243 65687', weeks: [3,4]},
    { id: 3, name: 'Lukas Steppe', phone: '07243 65687', weeks: [5,6]},
    { id: 4, name: 'Jonas WhatSoever', phone: '07243 65687', weeks: [8]}
    ]
});



export default person;
