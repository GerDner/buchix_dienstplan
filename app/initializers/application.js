export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'application',
  after: "store",
  initialize: function(container, application) {
      var store = container.lookup('store:main');

      store.find('week');
      store.find('person')
      store.find('type')
  }
};
