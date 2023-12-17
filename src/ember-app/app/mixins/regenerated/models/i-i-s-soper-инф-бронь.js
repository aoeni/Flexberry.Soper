import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  пассажир: DS.belongsTo('i-i-s-soper-пассажир', { inverse: null, async: false }),
  рейс: DS.belongsTo('i-i-s-soper-рейс', { inverse: 'инфБронь', async: false })
});

export let ValidationRules = {
  пассажир: {
    descriptionKey: 'models.i-i-s-soper-инф-бронь.validations.пассажир.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рейс: {
    descriptionKey: 'models.i-i-s-soper-инф-бронь.validations.рейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнфБроньE', 'i-i-s-soper-инф-бронь', {
    пассажир: belongsTo('i-i-s-soper-пассажир', 'Код бронрования', {
      кодБрони: belongsTo('i-i-s-soper-код-брони', '', {
        код: attr('Код бронрования', { index: 0 })
      }, { index: -1, hidden: true }),
      фИО: attr('ФИО', { index: 1 }),
      местоНаРейс: belongsTo('i-i-s-soper-место-на-рейс', '', {
        место: attr('Место', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
