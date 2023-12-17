import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  кодБрони: DS.belongsTo('i-i-s-soper-код-брони', { inverse: null, async: false }),
  местоНаРейс: DS.belongsTo('i-i-s-soper-место-на-рейс', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-soper-пассажир.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодБрони: {
    descriptionKey: 'models.i-i-s-soper-пассажир.validations.кодБрони.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  местоНаРейс: {
    descriptionKey: 'models.i-i-s-soper-пассажир.validations.местоНаРейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПассажирE', 'i-i-s-soper-пассажир', {
    фИО: attr('ФИО', { index: 0 }),
    кодБрони: belongsTo('i-i-s-soper-код-брони', 'Код бронирования', {
      код: attr('Код бронирования', { index: 1 })
    }, { index: -1, hidden: true }),
    местоНаРейс: belongsTo('i-i-s-soper-место-на-рейс', 'Класс', {
      класс: attr('Класс', { index: 2 }),
      место: attr('Место', { index: 3 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ПассажирL', 'i-i-s-soper-пассажир', {
    фИО: attr('ФИО', { index: 0 }),
    кодБрони: belongsTo('i-i-s-soper-код-брони', 'Код бронирования', {
      код: attr('Код бронирования', { index: 1 })
    }, { index: -1, hidden: true }),
    местоНаРейс: belongsTo('i-i-s-soper-место-на-рейс', 'Класс', {
      класс: attr('Класс', { index: 2 }),
      место: attr('Место', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
