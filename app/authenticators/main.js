import Ember from 'ember';

import Base from 'simple-auth/authenticators/base';

export default Base.extend({
    restore: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            resolve(data);
        });
    },
    authenticate: function(options) {
        if (options.name ==='ralf' && options.password === 'sebastian') {
            return new Ember.RSVP.Promise(function(resolve, reject) {
                resolve(options);
            });
        } else if (options.name ==='bozic' && options.password === 'riesling'){
            return new Ember.RSVP.Promise(function(resolve, reject) {
                resolve(options);
            });
        } else {
            return new Ember.RSVP.Promise(function(resolve, reject) {
                reject(options);
            });
        }

    },
    invalidate: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            resolve(data);
        });
    }
});
