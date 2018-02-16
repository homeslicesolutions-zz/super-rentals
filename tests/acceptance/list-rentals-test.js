import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';
import Service from '@ember/service';

let StubMapsService = Service.extend({
  getMapElement() {
    return document.createElement('div');
  }
});

moduleForAcceptance('Acceptance | list rentals', {
  beforeEach() {
    this.application.register('service:stubMaps', StubMapsService);
    this.application.inject('component:location-map', 'maps', 'service:stubMaps');
  }
});

test('should show rentals on the home page', function(assert) {
  // ARRANGE and ACT
  visit('/');
  andThen(function() {

    // ASSERT
    assert.equal(currentURL(), '/rentals');
  })
});

test('should link to information about the company', function(assert) {
  // ARRANGE
  visit('/');

  // ACT
  click('a:contains("About")');
  andThen(function() {

    // ASSERT
    assert.equal(currentURL(), '/about', 'should navigate to about');

  });
});

test('should link to contact information', function(assert) {
  // ARRANGE
  visit('/');

  // ACT
  click('a:contains("Contact")')
  andThen(function() {

    // ASSERT
    assert.equal(currentURL(), '/contact', 'should navigate to contact');

  });
});

test('should list the available rentals', function(assert) {
  // ARRANGE and ACT
  visit('/rentals');

  andThen(function() {

    // ASSERT
    assert.equal(find('.listing').length, 3, 'should see 3 listings');

  });
});

test('should filter the list of rentals by city', function(assert) {
  // ARRANGE
  visit('/');

  // ACT
  fillIn('.list-filter input', 'Seattle');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function() {
    assert.equal(find('.listing').length, 1, 'should show 1 listing');
    assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should contain 1 listing with location Seattle');
  })
});

test('should show more details for a selected rental', function(assert) {
});

/*
test('visiting /list-rentals', function(assert) {
  visit('/list-rentals');

  andThen(function() {
    assert.equal(currentURL(), '/list-rentals');
  });
});
*/
