import chunk from "../src/chunk.js";

describe('chunk', () => {
    it('Should return the split array',()=>{
      console.log(chunk(['a', 'b', 'c', 'd'],3));
      expect(chunk(['a', 'b', 'c', 'd'], 2)).to.equal([ [ 'c', 'd' ],  ]);
      expect(chunk(['a', 'b', 'c', 'd'], 3)).to.equal([['a', 'b', 'c'], ['d']]);
      expect(chunk(['a', 'b'], 2)).to.equal([['a'], ['b']]);
    });
});