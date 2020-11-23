import eq from "../src/eq.js";

describe('castArray', () => {
    it('Should return true if values/objects are same',()=>{
      expect(eq({ 'a': 1 },{ 'a': 1 })).to.be.false;
      expect(eq('a', 'a')).to.be.true;
      expect(eq(NaN, NaN)).to.be.true;
      expect(eq(1.5, 1.5)).to.be.true;

    });

});