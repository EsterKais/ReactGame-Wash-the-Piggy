'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('piggy service', function() {
  it('registered the piggies service', () => {
    assert.ok(app.service('piggies'));
  });
});
