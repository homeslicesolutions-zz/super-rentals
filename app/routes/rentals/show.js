import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model(params) {
    const {rental_id} = params;
    return get(this, 'store')
      .findRecord('rental', rental_id);
  }
});
