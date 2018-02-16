import Ember from 'ember';
import {get, set} from '@ember/object';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

  init(...args) {
    this._super(...args);

    const initAction = get(this, 'filter');

    initAction('')
      .then(allResults => {
        set(this, 'results', allResults.results);
      })
  },

  actions: {
    handleFilterEntry() {
      const filterInputValue = get(this, 'value');
      const filterAction =     get(this, 'filter');

      filterAction(filterInputValue)
        .then((filterResults) => {
          if (filterResults.query === get(this, 'value')) { // <== just re-assurance
            set(this, 'results', filterResults.results);
          }
        });
    }
  }
});
