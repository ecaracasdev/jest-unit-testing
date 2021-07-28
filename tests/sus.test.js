const sum = require('../src/sus');

test('adds 3 - 2 to equal 1', () => {
  expect(sum(3, 2)).toBe(1);
});