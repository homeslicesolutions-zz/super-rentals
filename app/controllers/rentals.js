import Ember from 'ember';
import { get } from '@ember/object';

export default Ember.Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return get(this, 'store').query('rental', { city: param });
      } else {
        return get(this, 'store').findAll('rental');
      }
    }
  }
});
