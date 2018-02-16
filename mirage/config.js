export default function () {
  this.namespace = '/api';

  this.logging = true;

  this.get('/rental-olds', function (schema, request) {
    return {
      data: [
        {
          type:       'rental-olds',
          id:         'grand-old-mansion',
          attributes: {
            title:       'Grand Old Mansion',
            owner:       'Veruca Salt',
            city:        'San Francisco',
            category:    'Estate',
            bedrooms:    15,
            image:       'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
            description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
          }
        },
        {
          type:       'rental-olds',
          id:         'urban-living',
          attributes: {
            title:       'Urban Living',
            owner:       'Mike TV',
            city:        'Seattle',
            category:    'Condo',
            bedrooms:    1,
            image:       'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
            description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'

          }
        },
        {
          type:       'rentals',
          id:         'downtown-charm-two',
          attributes: {
            title:       'Downtown Charm Two',
            owner:       'Violet Beauregarde Two',
            city:        'Portland',
            category:    'Apartment',
            bedrooms:    3,
            image:       'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
            description: 'Two Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
          }
        }
      ]
    }
  });

  this.get('/rentals', function(schema, request) {
    const {rentals} = schema;
    const rentalsCollection = rentals.all();
    const cityQuery = request.queryParams.city;
    if (cityQuery) {
      return rentalsCollection.filter((postModel) => {
        return postModel.city.toLowerCase().indexOf(cityQuery.toLowerCase()) >= 0;
      });
    } else {
      return rentalsCollection;
    }
  })
}
