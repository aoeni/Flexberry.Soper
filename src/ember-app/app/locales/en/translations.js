import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSoperКодБрониLForm from './forms/i-i-s-soper-код-брони-l';
import IISSoperМестоНаРейсLForm from './forms/i-i-s-soper-место-на-рейс-l';
import IISSoperОперторLForm from './forms/i-i-s-soper-опертор-l';
import IISSoperПассажирLForm from './forms/i-i-s-soper-пассажир-l';
import IISSoperПосадТалонLForm from './forms/i-i-s-soper-посад-талон-l';
import IISSoperПроверкаLForm from './forms/i-i-s-soper-проверка-l';
import IISSoperРейсLForm from './forms/i-i-s-soper-рейс-l';
import IISSoperТерминалLForm from './forms/i-i-s-soper-терминал-l';
import IISSoperКодБрониEForm from './forms/i-i-s-soper-код-брони-e';
import IISSoperМестоНаРейсEForm from './forms/i-i-s-soper-место-на-рейс-e';
import IISSoperОперторEForm from './forms/i-i-s-soper-опертор-e';
import IISSoperПассажирEForm from './forms/i-i-s-soper-пассажир-e';
import IISSoperПосадТалонEForm from './forms/i-i-s-soper-посад-талон-e';
import IISSoperПроверкаEForm from './forms/i-i-s-soper-проверка-e';
import IISSoperРейсEForm from './forms/i-i-s-soper-рейс-e';
import IISSoperТерминалEForm from './forms/i-i-s-soper-терминал-e';
import IISSoperИнфБроньModel from './models/i-i-s-soper-инф-бронь';
import IISSoperКодБрониModel from './models/i-i-s-soper-код-брони';
import IISSoperМестоНаРейсModel from './models/i-i-s-soper-место-на-рейс';
import IISSoperОперторModel from './models/i-i-s-soper-опертор';
import IISSoperПассажирModel from './models/i-i-s-soper-пассажир';
import IISSoperПосадТалонModel from './models/i-i-s-soper-посад-талон';
import IISSoperПроверкаModel from './models/i-i-s-soper-проверка';
import IISSoperРейсModel from './models/i-i-s-soper-рейс';
import IISSoperТерминалModel from './models/i-i-s-soper-терминал';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-soper-инф-бронь': IISSoperИнфБроньModel,
    'i-i-s-soper-код-брони': IISSoperКодБрониModel,
    'i-i-s-soper-место-на-рейс': IISSoperМестоНаРейсModel,
    'i-i-s-soper-опертор': IISSoperОперторModel,
    'i-i-s-soper-пассажир': IISSoperПассажирModel,
    'i-i-s-soper-посад-талон': IISSoperПосадТалонModel,
    'i-i-s-soper-проверка': IISSoperПроверкаModel,
    'i-i-s-soper-рейс': IISSoperРейсModel,
    'i-i-s-soper-терминал': IISSoperТерминалModel
  },

  'application-name': 'Soper',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Soper',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Soper',
          title: 'Soper'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        soper: {
          caption: 'Soper',
          title: 'Soper',
          'i-i-s-soper-код-брони-l': {
            caption: 'Код бронирования',
            title: ''
          },
          'i-i-s-soper-место-на-рейс-l': {
            caption: 'Место на рейс',
            title: ''
          },
          'i-i-s-soper-проверка-l': {
            caption: 'Проверка',
            title: ''
          },
          'i-i-s-soper-посад-талон-l': {
            caption: 'Посадочный талон',
            title: ''
          },
          'i-i-s-soper-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          },
          'i-i-s-soper-опертор-l': {
            caption: 'Опертор',
            title: ''
          },
          'i-i-s-soper-терминал-l': {
            caption: 'Терминал',
            title: ''
          },
          'i-i-s-soper-рейс-l': {
            caption: 'Рейс',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-soper-код-брони-l': IISSoperКодБрониLForm,
    'i-i-s-soper-место-на-рейс-l': IISSoperМестоНаРейсLForm,
    'i-i-s-soper-опертор-l': IISSoperОперторLForm,
    'i-i-s-soper-пассажир-l': IISSoperПассажирLForm,
    'i-i-s-soper-посад-талон-l': IISSoperПосадТалонLForm,
    'i-i-s-soper-проверка-l': IISSoperПроверкаLForm,
    'i-i-s-soper-рейс-l': IISSoperРейсLForm,
    'i-i-s-soper-терминал-l': IISSoperТерминалLForm,
    'i-i-s-soper-код-брони-e': IISSoperКодБрониEForm,
    'i-i-s-soper-место-на-рейс-e': IISSoperМестоНаРейсEForm,
    'i-i-s-soper-опертор-e': IISSoperОперторEForm,
    'i-i-s-soper-пассажир-e': IISSoperПассажирEForm,
    'i-i-s-soper-посад-талон-e': IISSoperПосадТалонEForm,
    'i-i-s-soper-проверка-e': IISSoperПроверкаEForm,
    'i-i-s-soper-рейс-e': IISSoperРейсEForm,
    'i-i-s-soper-терминал-e': IISSoperТерминалEForm
  },

});

export default translations;
