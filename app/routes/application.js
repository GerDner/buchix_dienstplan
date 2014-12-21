import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin,{
    beforeModel: function() {
        this.transitionTo('index',
        {queryParams:
            {kw: parseInt(moment().format('W')) ,
            year:parseInt(moment().format('GGGG')) }
         }
         );
    }
});
