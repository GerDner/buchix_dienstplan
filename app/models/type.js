import DS from 'ember-data';

var type =  DS.Model.extend({
    __v: DS.attr('string',{serialize: false}),
  value: DS.attr('string'),
  class: DS.attr('string',{serialize: false}),
  person: DS.hasMany('person' ,{
      async: true
  }),
  clicked: DS.attr('boolean', {defaultValue:false,serialize: false})
});

type.reopenClass({
    FIXTURES: [
    { id: 1, value: 'Kalte Küche', class: 'kueche', person:[1,2] },
    { id: 2, value: 'Theke', class: 'theke' , person:[3,4]}
    ]
});

export default type;
