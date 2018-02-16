import Ember from 'ember';
import {get, set} from '@ember/object';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

  init(...args) {
    this._super(...args);

    const initAction = get(this, 'filter');

    initAction('').then(results => set(this, 'results', results))
  },

  actions: {
    handleFilterEntry() {
      const filterInputValue = get(this, 'value');
      const filterAction =     get(this, 'filter');

      filterAction(filterInputValue).then(filterResults => set(this, 'results', filterResults));
    }
  }
});
