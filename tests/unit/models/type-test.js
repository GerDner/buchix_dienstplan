import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('type', 'Type', {
  // Specify the other units that are required for this test.
  needs: ['model:person', 'model:week']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
