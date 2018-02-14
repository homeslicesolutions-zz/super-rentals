import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

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
