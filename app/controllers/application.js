import Ember from 'ember';

export default Ember.ArrayController.extend({
    itemController: 'item',
    actions: {
        login:function(){
            this.get('session').authenticate('authenticator:main', {name:this.get('loginName'),password:this.get('loginPassword')});
        }
    }
});
