import DS from 'ember-data';

var type =  DS.Model.extend({
  value: DS.attr('string'),
  class: DS.attr('string'),
  person: DS.hasMany('person'),
});

type.reopenClass({
    FIXTURES: [
    { id: 1, value: 'Küche', class: 'kueche', person:[1,2] },
    { id: 2, value: 'Theke', class: 'theke' , person:[3,4]}
    ]
});

export default type;
