import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import {run} from '@ember/runloop';

const rental = EmberObject.create({
  image:    'fake.png',
  title:    'test-title',
  owner:    'test-owner',
  category: 'test-type',
  city:     'test-city',
  bedrooms: 3
});

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

test('should display rental details', function (assert) {

  // ARRANGE
  this.set('rentalObj', rental);

  // ACT
  this.render(hbs`{{rental-listing rental=rentalObj}}`);

  // ASSERT
  assert.equal(this.$('.listing h3').text(), 'test-title', 'Title: test-title');
});

test('should toggle wide class on click', function (assert) {

  // ARRANGE
  this.set('rentalObj', rental);

  // ACT
  this.render(hbs`{{rental-listing rental=rentalObj}}`);

  // ACT & ASSERT
  assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');

  run(() => document.querySelector('.image').click());
  assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');

  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
});
