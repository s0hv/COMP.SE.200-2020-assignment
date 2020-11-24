import difference from "../src/difference.js";

describe('difference', () => {

    it('Should return the different elements of two arrays',()=>{
       expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
       expect(difference([2, 1, 3,8], [2, 3,4])).to.deep.equal([1,8]);
       expect(difference(null, [2, 3,4])).to.deep.equal([]);
 });
});