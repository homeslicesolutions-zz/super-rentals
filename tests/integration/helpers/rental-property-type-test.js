
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rental-property-type', 'helper:rental-property-type', {
  integration: true
});

test('should return default value if doesnt match', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{rental-property-type inputValue}}`);

  assert.equal(this.$().text().trim(), 'Standalone');
});

test('should return a community related value if matches', function(assert) {
  this.set('inputValue', 'Condo');

  this.render(hbs`{{rental-property-type inputValue}}`);

  assert.equal(this.$().text().trim(), 'Community');
});
