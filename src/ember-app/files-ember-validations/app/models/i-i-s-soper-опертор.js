import {
  defineNamespace,
  defineProjections,
  Model as ОперторMixin
} from '../mixins/regenerated/models/i-i-s-soper-опертор';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОперторMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
