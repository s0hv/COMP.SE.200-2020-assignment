import compact from "../src/compact.js";

describe('compact', () => {

    it('Should remove the falsy values form the array',()=>{
      expect(compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3]);
       expect(compact([ 1, 0, 2, 3])).to.deep.equal([1, 2, 3]);
    });
});
