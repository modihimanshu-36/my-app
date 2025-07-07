// test/js/Calculator.test.js

import { Calculator } from '../../main/js/calculator.js';

QUnit.module('Calculator');

QUnit.test('add()', function(assert) {
    assert.strictEqual(Calculator.add(2, 3), 5, '2 + 3 = 5');
    assert.strictEqual(Calculator.add(-1, 1), 0, '-1 + 1 = 0');
});

QUnit.test('subtract()', function(assert) {
    assert.strictEqual(Calculator.subtract(5, 3), 2, '5 - 3 = 2');
    assert.strictEqual(Calculator.subtract(0, 0), 0, '0 - 0 = 0');
});

QUnit.test('multiply()', function(assert) {
    assert.strictEqual(Calculator.multiply(4, 3), 12, '4 * 3 = 12');
    assert.strictEqual(Calculator.multiply(-2, 3), -6, '-2 * 3 = -6');
});

QUnit.test('divide()', function(assert) {
    assert.strictEqual(Calculator.divide(6, 2), 3, '6 / 2 = 3');
    assert.strictEqual(Calculator.divide(-6, 2), -3, '-6 / 2 = -3');
});

QUnit.test('divide by zero', function(assert) {
    assert.throws(function() {
        Calculator.divide(1, 0);
    }, /Divide by zero/, 'Throws error when dividing by zero');
});