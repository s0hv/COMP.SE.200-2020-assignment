import chunk from "../src/chunk.js";

describe('chunk', () => {
    it('Should return the split array',()=>{
      expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']]);
      expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([ [ 'c', 'd' ] ]);
      expect(chunk(['a', 'b'], 2)).to.deep.equal([['a'], ['b']]);
    });
});
