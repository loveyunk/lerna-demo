'use strict';

const app1 = require('../lib/app1');

test('adds 1 + 2 to equal 3', () => {
  expect(app1(1, 2)).toBe(3);
});
