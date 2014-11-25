export function initialize(/* container, application */) {
    // application.inject('route', 'foo', 'service:foo');
}

export default {
    name: 'model',
    after: "model",
    initialize: function(container, application) {
        application.inject('model', 'session', 'controller:session');
    }
};
