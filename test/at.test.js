import at from "../src/at.js";

describe('at', () => {
  it('Should return an array of values corresponding to `paths` of `object`', () => {
      const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
      console.log(at(object, ['a[0].b.c', 'a[1]']));
    expect(at(object, ['a[0].b.c', 'a[1]'])).to.deep.equal([3,4]);
  });
});
