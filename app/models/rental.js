import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({
  title:         DS.attr(),
  owner:         DS.attr(),
  city:          DS.attr(),
  category:      DS.attr(),
  image:         DS.attr(),
  completeTitle: computed('title', 'owner', function () {
    return `${this.get('title')} ${this.get('owner')}`
  })
});
