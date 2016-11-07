'use strict';

const assert = require('assert');
const createPiggy = require('../../../../src/services/piggy/hooks/create-piggy.js');

describe('piggy createPiggy hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    createPiggy()(mockHook);

    assert.ok(mockHook.createPiggy);
  });
});
