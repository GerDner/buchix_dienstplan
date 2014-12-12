import DS from 'ember-data';

var week = DS.Model.extend({
    __v: DS.attr('string'),
  kw: DS.attr('number'),
  year: DS.attr('number'),
  mo: DS.attr('string',{defaultValue:"-"}),
  di: DS.attr('string',{defaultValue:"-"}),
  mi: DS.attr('string',{defaultValue:"-"}),
  do: DS.attr('string',{defaultValue:"-"}),
  fr: DS.attr('string',{defaultValue:"-"}),
  sa: DS.attr('string',{defaultValue:"-"}),
  so: DS.attr('string',{defaultValue:"-"}),
  person:  DS.belongsTo('person', {async:true})
});


week.reopenClass({
    FIXTURES: [
    { id: 1, kw: 48, year: 2014},
    { id: 2, kw: 49, year: 2014},
    { id: 3, kw: 48, year: 2014},
    { id: 4, kw: 49, year: 2014},
    { id: 5, kw: 48, year: 2014},
    { id: 6, kw: 49, year: 2014},
    { id: 8, kw: 49, year: 2014}
    ]
});

export default week;
