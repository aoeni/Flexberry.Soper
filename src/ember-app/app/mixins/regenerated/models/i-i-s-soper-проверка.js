import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  лентаПечати: DS.attr('boolean'),
  опертор: DS.belongsTo('i-i-s-soper-опертор', { inverse: null, async: false }),
  терминал: DS.belongsTo('i-i-s-soper-терминал', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-soper-проверка.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-soper-проверка.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  лентаПечати: {
    descriptionKey: 'models.i-i-s-soper-проверка.validations.лентаПечати.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  опертор: {
    descriptionKey: 'models.i-i-s-soper-проверка.validations.опертор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  терминал: {
    descriptionKey: 'models.i-i-s-soper-проверка.validations.терминал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроверкаE', 'i-i-s-soper-проверка', {
    опертор: belongsTo('i-i-s-soper-опертор', 'Опертор', {
      iD: attr('ID оператора', { index: 1 }),
      кодДоступа: attr('Код доступа', { index: 2 }),
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' }),
    терминал: belongsTo('i-i-s-soper-терминал', 'Терминал', {
      номер: attr('Номер', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номер' }),
    дата: attr('Дата', { index: 6 }),
    время: attr('Время', { index: 7 }),
    лентаПечати: attr('Лента печати', { index: 8 })
  });

  modelClass.defineProjection('ПроверкаL', 'i-i-s-soper-проверка', {
    терминал: belongsTo('i-i-s-soper-терминал', 'Номер', {
      номер: attr('Номер', { index: 0 })
    }, { index: -1, hidden: true }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    лентаПечати: attr('Лента печати', { index: 3 }),
    опертор: belongsTo('i-i-s-soper-опертор', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
