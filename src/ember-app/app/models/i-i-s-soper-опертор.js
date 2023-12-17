import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОперторMixin
} from '../mixins/regenerated/models/i-i-s-soper-опертор';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОперторMixin, Validations, {
});

defineProjections(Model);

export default Model;
