import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    const store = get(this, 'store');
    store.findAll('rental-old'); // fetches and puts it in the store;
    return store.findAll('rental'); // seems you can use rentalOld
  }
});
