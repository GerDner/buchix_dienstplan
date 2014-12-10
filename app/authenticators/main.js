import Ember from 'ember';

import Base from 'simple-auth/authenticators/base';

export default Base.extend({
    restore: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            resolve(data);
        });
    },
    authenticate: function(options) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            resolve(options);
        });
    },
    invalidate: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            resolve(data);
        });
    }
});
