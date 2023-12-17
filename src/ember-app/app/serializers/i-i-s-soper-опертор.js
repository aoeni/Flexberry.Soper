import { Serializer as ОперторSerializer } from
  '../mixins/regenerated/serializers/i-i-s-soper-опертор';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОперторSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
