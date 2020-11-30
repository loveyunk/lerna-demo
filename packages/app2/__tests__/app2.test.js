'use strict';

const app2 = require('../lib/app2');

test('adds 3 - 1 to equal 2', () => {
    expect(app2(3, 1)).toBe(2);
  });
