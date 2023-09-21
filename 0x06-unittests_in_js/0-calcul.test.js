const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of integers', () => {
    assert.strictEqual(calculateNumber(4, 5), 9);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(4, -5), -1);
  });

  it('should round up floats', () => {
    assert.strictEqual(calculateNumber(4, 2.9), 7);
    assert.strictEqual(calculateNumber(1.5, 1.7), 4);
    assert.strictEqual(calculateNumber(0.1, 0), 0);
    assert.strictEqual(calculateNumber(1.4, -4.5), -3);
  });

  it('should round floats down', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(0.1, 0), 0);
    assert.strictEqual(calculateNumber(1.4, -4.5), -3);
  });

  it('should return rounded sum if only one is provided', () => {
    assert.strictEqual(calculateNumber(2), 2);
    assert.strictEqual(calculateNumber(2.7), 3);
  });

  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber(true, '3'), 4);
    assert.strictEqual(calculateNumber(1, '3.7'), 5);
    assert.strictEqual(calculateNumber('1.2', 3.7), 5);
  });

  it('should throw TypeError if either parameter cannot be coerced to a number', () => {
    assert.throws(() => calculateNumber('hello'), {
      name: 'TypeError',
      message: 'Parameters must be numbers',
    });
    assert.throws(() => calculateNumber(1.2, 'dog'), {
      name: 'TypeError',
      message: 'Parameters must be numbers',
    });
  });
});
