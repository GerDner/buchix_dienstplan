import Ember from 'ember';

export default Ember.ArrayController.extend({
    /**
     * Url query params
     *
     * @type {Array}
     */
    queryParams: ['kw', 'year'],

    /**
     * Dependency injection
     *
     * @type {Array}
     */
    needs: ['session'],

    /**
     * inject session kw
     *
     * @type {String}
     */
    kw: Ember.computed.alias('controllers.session.kw'),

    /**
    * inject session year
    *
    * @type {String}
    */
    year: Ember.computed.alias('controllers.session.year'),

    /**
     * next kw computed property
     */
    nextKw: function(){
        return this.get('kw') + 1;
    }.property('kw'),

    /**
    * prev kw computed property
    */
    prevKw: function(){
        return this.get('kw') - 1;
    }.property('kw')

});
