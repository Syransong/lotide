const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];

  it("returns 3 for words.length", () => {
    assert.strictEqual(words.length, 3); 
  })

  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']); 
  });

}); 