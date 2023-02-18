const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse","Labs"]);
  });
  it("returns [ 16, 17, 18, 20 ] for [15, 16, 17, 18, 20]", () => {
    assert.deepEqual(tail([15, 16, 17, 18, 20]), [ 16, 17, 18, 20 ]);
  });  
});
