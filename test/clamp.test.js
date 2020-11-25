import clamp from "../src/clamp.js";

describe('clamp', () => {
    it('Should return the clamp number',()=>{
       expect(clamp(-10, -5, 5)).to.equal(-5);
       expect(clamp(10, -5, 5)).to.equal(-5);
    });

    it('Should accept numbers only to clamp them.',()=>{
      expect(clamp('se',-5, 5)).to.be.NaN;
    });

    it('Should not accept undefined value to clamp value.',()=>{
      expect(clamp(undefined,undefined,5)).to.be.NaN;
    });

});