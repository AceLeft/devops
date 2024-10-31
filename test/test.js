var main = require('../index');
var assert = require('assert');
describe('5!', function() {
    it('should return 120 for factorial(5)', function() {
        assert.strictEqual(main.factorial(5), 120);
      });
});

describe('0 and 1', function() {
  it('should return 1', function() {
      assert.strictEqual(main.factorial(0), 1);
      assert.strictEqual(main.factorial(1), 1);
    });
});