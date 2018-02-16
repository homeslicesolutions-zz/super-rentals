import Ember from 'ember';
import {get,set} from '@ember/object';
import { inject as service } from '@ember/service';

export default Ember.Component.extend({
  maps: service(),

  didInsertElement(...args) {
    this._super(...args);
    const location = get(this, 'location');
    const mapElement = get(this, 'maps').getMapElement(location);
    this.$('.map-container').append(mapElement);
  }

});
