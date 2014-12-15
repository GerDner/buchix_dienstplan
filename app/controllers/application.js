import Ember from 'ember';

export default Ember.ArrayController.extend({
    typeahead: {data:['test']},
    saved: '',
    isLoading:false,
    /**
     * [loginName description]
     * @type {String}
     */
    loginName:'',
    /**
     * [loginPassword description]
     * @type {String}
     */
    loginPassword: '',
    /**
     * Sort property
     *
     * @type {Array}
     */
    sortProperties: ['lastname'],

    /**
     * sort descending
     *
     * @type {Boolean}
     */
    sortAscending: true,

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

    mo: function() {
        return moment(this.get('kw')+'-'+this.get('year'), "W-GGGG").day(1).format('DD.MM');
    }.property('kw', 'year'),

    fullMo: function() {
        return moment(this.get('kw')+'-'+this.get('year'), "W-GGGG").day(1).format('DD.MM.YYYY');
    }.property('kw', 'year'),

    di: function() {
        return moment(this.get('kw')+'-'+this.get('year'), "W-GGGG").day(2).format('DD.MM');
    }.property('kw', 'year'),

    mi: function() {
        return moment(this.get('kw')+'-'+this.get('year'), "W-GGGG").day(3).format('DD.MM');
    }.property('kw', 'year'),

    do: function() {
        return moment(this.get('kw')+'-'+this.get('year'), "W-GGGG").day(4).format('DD.MM');
    }.property('kw', 'year'),

    fr: function() {
        return moment(this.get('kw')+'-'+this.get('year'), "W-GGGG").day(5).format('DD.MM');
    }.property('kw', 'year'),

    sa: function() {
        return moment(this.get('kw')+'-'+this.get('year'), "W-GGGG").day(6).format('DD.MM');
    }.property('kw', 'year'),

    so: function() {
        return moment(this.get('kw')+'-'+this.get('year'), "W-GGGG").day(7).format('DD.MM');
    }.property('kw', 'year'),

    fullSo: function() {
        return moment(this.get('kw')+'-'+this.get('year'), "W-GGGG").day(7).format('DD.MM.YYYY');
    }.property('kw', 'year'),

    top: function(){
        return this.filter(function(item){
            var accept = false;
            item.get('type').forEach(function(type){
                accept = (type.get('value') === 'Top');
            });
            return accept;
        });
    }.property('model.@each.weeks', 'kw' ,'year'),

    service: function(){
        return this.filter(function(item){
            var accept = false;
            item.get('type').forEach(function(type){
                accept = (type.get('value') === 'Service');
            });
            return accept;
        });
    }.property('model.@each.weeks', 'kw' ,'year'),

    theke: function(){
        return this.filter(function(item){
            var accept = false;
            item.get('type').forEach(function(type){
                accept = (type.get('value') === 'Theke');
            });
            return accept;
        });
    }.property('model.@each.weeks', 'kw' ,'year'),

    cold: function(){
        return this.filter(function(item){
            var accept = false;
            item.get('type').forEach(function(type){
                accept = (type.get('value') === 'Küche Aushilfe');
            });
            return accept;
        });
    }.property('model.@each.weeks', 'kw' ,'year'),

    warm: function(){
        return this.filter(function(item){
            var accept = false;
            item.get('type').forEach(function(type){
                accept = (type.get('value') === 'Küche Fest');
            });
            return accept;
        });
    }.property('model.@each.weeks', 'kw' ,'year'),

    brauerei: function(){
        return this.filter(function(item){
            var accept = false;
            item.get('type').forEach(function(type){
                accept = (type.get('value') === 'Brauerei');
            });
            return accept;
        });
    }.property('model.@each.weeks', 'kw' ,'year'),
    /**
     * next kw computed property
     */
    nextKw: function(){
        if (this.get('kw') === 52) {
            this.set('nextYear', this.get('year')+1);
            return 1
        } else {
            return this.get('kw') + 1;
        }
    }.property('kw'),

    /**
    * prev kw computed property
    */
    prevKw: function(){
        if (this.get('kw') === 1) {
            this.set('prevYear', this.get('year')-1);
            return 52;
        } else {
            return this.get('kw') - 1;
        }
    }.property('kw'),

    /**
    * next kw computed property
    */
    nextYear: function(){
        return this.get('year');
    }.property('year'),

    /**
    * prev kw computed property
    */
    prevYear: function(){
        return this.get('year');
    }.property('year'),

    actions: {
        login:function(){
            this.get('session').authenticate('authenticator:main', {name:this.get('loginName'),password:this.get('loginPassword')});
        },
        delete:function(person){
            person.destroyRecord();
        },
        autoSave:function(info){
            var weeks = this.get('store').all('week');
            console.log(weeks);
            weeks.forEach(function(item){
                console.log(item.get('isDirty'));
                if(item.get('isDirty')) {
                    item.save();
                }
            })
            this.set('saved','gespeichert am ' + moment().format("DD.MM.YYYY") + ' um ' + moment().format("h:mm") )
        },
        save:function(week){
            week.save();
        },
        editPerson: function(person) {
            console.log(person)
            this.transitionToRoute('edit', person);
        }
    }
});
