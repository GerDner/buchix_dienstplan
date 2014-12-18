export function initialize( container, application ) {
    // application.inject('route', 'foo', 'service:foo');
}

export default {
    name: 'model',
    before: 'model',
    initialize: function(container, application) {
        application.inject('model', 'application', 'controller:application');
    }
};
