import DS from 'ember-data';

var type =  DS.Model.extend({
    __v: DS.attr('string'),
  value: DS.attr('string'),
  class: DS.attr('string'),
  person: DS.hasMany('person'),
  clicked: DS.attr('boolean', {defaultValue:false})
});

type.reopenClass({
    FIXTURES: [
    { id: 1, value: 'Kalte Küche', class: 'kueche', person:[1,2] },
    { id: 2, value: 'Theke', class: 'theke' , person:[3,4]}
    ]
});

export default type;
