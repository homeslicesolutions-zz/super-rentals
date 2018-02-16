import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType(params/*, hash*/) {
  const [propertyType] = params;
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  }
  return 'Standalone';
}

export default helper(rentalPropertyType);
