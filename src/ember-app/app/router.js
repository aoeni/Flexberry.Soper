import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-soper-код-брони-l');
  this.route('i-i-s-soper-код-брони-e',
  { path: 'i-i-s-soper-код-брони-e/:id' });
  this.route('i-i-s-soper-код-брони-e.new',
  { path: 'i-i-s-soper-код-брони-e/new' });
  this.route('i-i-s-soper-место-на-рейс-l');
  this.route('i-i-s-soper-место-на-рейс-e',
  { path: 'i-i-s-soper-место-на-рейс-e/:id' });
  this.route('i-i-s-soper-место-на-рейс-e.new',
  { path: 'i-i-s-soper-место-на-рейс-e/new' });
  this.route('i-i-s-soper-опертор-l');
  this.route('i-i-s-soper-опертор-e',
  { path: 'i-i-s-soper-опертор-e/:id' });
  this.route('i-i-s-soper-опертор-e.new',
  { path: 'i-i-s-soper-опертор-e/new' });
  this.route('i-i-s-soper-пассажир-l');
  this.route('i-i-s-soper-пассажир-e',
  { path: 'i-i-s-soper-пассажир-e/:id' });
  this.route('i-i-s-soper-пассажир-e.new',
  { path: 'i-i-s-soper-пассажир-e/new' });
  this.route('i-i-s-soper-посад-талон-l');
  this.route('i-i-s-soper-посад-талон-e',
  { path: 'i-i-s-soper-посад-талон-e/:id' });
  this.route('i-i-s-soper-посад-талон-e.new',
  { path: 'i-i-s-soper-посад-талон-e/new' });
  this.route('i-i-s-soper-проверка-l');
  this.route('i-i-s-soper-проверка-e',
  { path: 'i-i-s-soper-проверка-e/:id' });
  this.route('i-i-s-soper-проверка-e.new',
  { path: 'i-i-s-soper-проверка-e/new' });
  this.route('i-i-s-soper-рейс-l');
  this.route('i-i-s-soper-рейс-e',
  { path: 'i-i-s-soper-рейс-e/:id' });
  this.route('i-i-s-soper-рейс-e.new',
  { path: 'i-i-s-soper-рейс-e/new' });
  this.route('i-i-s-soper-терминал-l');
  this.route('i-i-s-soper-терминал-e',
  { path: 'i-i-s-soper-терминал-e/:id' });
  this.route('i-i-s-soper-терминал-e.new',
  { path: 'i-i-s-soper-терминал-e/new' });
});

export default Router;
