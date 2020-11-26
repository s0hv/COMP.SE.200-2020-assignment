import drop from "../src/drop.js";

describe('drop', () => {
    it('should return slice of `array` with `n` elements dropped from the beginning',()=>{
      expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
      expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
    });

    it('should remove all elements from array if the target number is greater than array size',()=>{
      expect(drop([1, 2, 3], 5)).to.deep.equal([]);
    });

    it('should not remove any element from array if the target number is 0',()=>{
      expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
    });
});