import castArray from "../src/castArray.js";

describe('castArray', () => {
    it('Should return the array of given values',()=>{
      expect(castArray(1)).to.deep.equal([1]);
      expect(castArray({ 'a': 1, 'b': 1})).to.deep.equal([{ 'a': 1,'b': 1 }]);
      expect(castArray('abc')).to.deep.equal(['abc']);
      expect(castArray(null)).to.deep.equal([null]);
      expect(castArray(undefined)).to.deep.equal([undefined]);
    });

    it('Should return the past array and do not cast array',()=>{
      expect(castArray([1])).to.deep.equal([1]);
      expect(castArray([{ 'a': 1, 'b': 1}])).to.deep.equal([{ 'a': 1,'b': 1 }]);
      expect(castArray(['abc'])).to.deep.equal(['abc']);
      expect(castArray([null])).to.deep.equal([null]);
      expect(castArray([undefined])).to.deep.equal([undefined]);
    });
});