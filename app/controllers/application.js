import Ember from 'ember';

export default Ember.ArrayController.extend({
    itemController: 'item',
    currentKw: function () {
        return parseInt(moment().format('W'))
    }.property(),
    currentYear:  function(){
        return parseInt(moment().format('GGGG'))
    }.property(),
    actions: {
        login:function(){
            this.get('session').authenticate('authenticator:main', {name:this.get('loginName'),password:this.get('loginPassword')});
        }
    }
});
