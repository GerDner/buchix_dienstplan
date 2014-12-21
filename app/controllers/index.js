import Ember from 'ember';

export default Ember.ArrayController.extend({

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

    /**
    * next kw computed property
    */
    nextKw: function(){
        if (parseInt(this.get('kw')) === 52) {
            //this.set('nextYear', parseInt(this.get('year'))+1);
            return 1
        } else {
            return parseInt(this.get('kw')) + 1;
        }
    }.property('kw'),

    /**
    * prev kw computed property
    */
    prevKw: function(){
        if (parseInt(this.get('kw')) === 1) {
            //this.set('prevYear', parseInt(this.get('year'))-1);
            return 52;
        } else {
            return parseInt(this.get('kw')) - 1;
        }
    }.property('kw'),

    /**
    * next kw computed property
    */
    nextYear: function(){
        console.log((parseInt(this.get('kw')) === 52))
        console.log(parseInt(this.get('kw'))+'/'+52)
        if (parseInt(this.get('kw')) === 52) {
            return parseInt(this.get('year')) + 1;

        } else {
            return this.get('year');
        }
    }.property('year','kw'),

    /**
    * prev kw computed property
    */
    prevYear: function(){
        if (parseInt(this.get('kw')) === 1) {
            return parseInt(this.get('year')) - 1;

        } else {
            return this.get('year');
        }
    }.property('year','kw'),

    actions: {
        login:function(){
            this.get('session').authenticate('authenticator:main', {name:this.get('loginName'),password:this.get('loginPassword')});
        },
        delete:function(person){
            person.destroyRecord();
        },
        autoSave:function(info){
            var weeks = this.get('store').all('week');

            weeks.forEach(function(item){

                if(item.get('isDirty')) {
                    item.save();
                }
            })
            var notification;
            //this.set('saved',)
            // Let's check if the user is okay to get some notification
            if (Notification.permission === "granted") {
                // If it's okay let's create a notification
                var notification = new Notification("gespeichert");
                Ember.run.later( function() {
                    notification.close()
                }, 2000);
            }

            // Otherwise, we need to ask the user for permission
            // Note, Chrome does not implement the permission static property
            // So we have to check for NOT 'denied' instead of 'default'
            else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {
                    // If the user is okay, let's create a notification
                    if (permission === "granted") {
                        var notification = new Notification("gespeichert");
                        Ember.run.later( function() {
                            notification.close()
                        }, 2000);
                    }
                });
            }


        },
        save:function(week){
            week.save();
        },
        editPerson: function(person) {

            this.transitionToRoute('edit', person);
        }
    }
});
