import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-soper-место-на-рейс', 'Unit | Serializer | i-i-s-soper-место-на-рейс', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-soper-место-на-рейс',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-soper-класс-билета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
