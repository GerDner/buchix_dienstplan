export function initialize(/* container, application */) {
    // application.inject('route', 'foo', 'service:foo');
}

export default {
    name: 'model',
    after: "model",
    initialize: function(container, application) {
        var session = container.lookup('store:session');
        application.inject('model', 'session', 'controller:session');
    }
};
