import Service from '@ember/service';
import { camelize } from '@ember/string';
import EmberObject, {get, set} from '@ember/object';

import MapUtil from '../utils/google-maps';

export default Service.extend({

  init() {
    if (!get(this, 'cachedMaps')) set(this, 'cachedMaps', EmberObject.create());
    if (!get(this, 'mapUtil')) set(this, 'mapUtil', MapUtil.create());
  },

  getMapElement(location) {
    const camelizedLocation = camelize(location);
    let element = get(this, `cachedMaps.${camelizedLocation}`);
    if (!element) {
      element = this.createMapElement();
      get(this, 'mapUtil').createMap(element, location);
      set(this, `cachedMaps.${camelizedLocation}`, element);
    }
    return element;
  },

  createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  }

});
