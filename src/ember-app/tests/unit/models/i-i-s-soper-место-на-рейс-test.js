import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-soper-место-на-рейс', 'Unit | Model | i-i-s-soper-место-на-рейс', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-soper-инф-бронь',
    'model:i-i-s-soper-код-брони',
    'model:i-i-s-soper-место-на-рейс',
    'model:i-i-s-soper-опертор',
    'model:i-i-s-soper-пассажир',
    'model:i-i-s-soper-посад-талон',
    'model:i-i-s-soper-проверка',
    'model:i-i-s-soper-рейс',
    'model:i-i-s-soper-терминал',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
