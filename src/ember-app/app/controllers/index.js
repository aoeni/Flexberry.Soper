import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.soper.caption'),
          title: i18n.t('forms.application.sitemap.soper.title'),
          children: [{
            link: 'i-i-s-soper-код-брони-l',
            caption: i18n.t('forms.application.sitemap.soper.i-i-s-soper-код-брони-l.caption'),
            title: i18n.t('forms.application.sitemap.soper.i-i-s-soper-код-брони-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-soper-место-на-рейс-l',
            caption: i18n.t('forms.application.sitemap.soper.i-i-s-soper-место-на-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.soper.i-i-s-soper-место-на-рейс-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-soper-проверка-l',
            caption: i18n.t('forms.application.sitemap.soper.i-i-s-soper-проверка-l.caption'),
            title: i18n.t('forms.application.sitemap.soper.i-i-s-soper-проверка-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-soper-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.soper.i-i-s-soper-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.soper.i-i-s-soper-посад-талон-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-soper-пассажир-l',
            caption: i18n.t('forms.application.sitemap.soper.i-i-s-soper-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.soper.i-i-s-soper-пассажир-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-soper-опертор-l',
            caption: i18n.t('forms.application.sitemap.soper.i-i-s-soper-опертор-l.caption'),
            title: i18n.t('forms.application.sitemap.soper.i-i-s-soper-опертор-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-soper-терминал-l',
            caption: i18n.t('forms.application.sitemap.soper.i-i-s-soper-терминал-l.caption'),
            title: i18n.t('forms.application.sitemap.soper.i-i-s-soper-терминал-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-soper-рейс-l',
            caption: i18n.t('forms.application.sitemap.soper.i-i-s-soper-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.soper.i-i-s-soper-рейс-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})