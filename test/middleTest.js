const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1,2]),[1,2]);
  });

  it ('returns [1,2] for [1,2]', () => {
    assert.deepEqual(middle([1,2]), [1,2]);
  });
  it ('returs [1] for [1]', () => {
    assert.deepEqual(middle([1]), [1])
  })

});
