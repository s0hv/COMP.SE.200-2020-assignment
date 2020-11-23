import ceil from "../src/ceil.js";

describe('ceil', () => {
    it('Should return the rounded number',()=>{
      expect(ceil(4.006)).to.equal(5);
      expect(ceil(6.004,2)).to.equal(6.01);
      expect(ceil(6040, -2)).to.deep.equal(6100);
    });

    it('Should accept number only to rounded the number',()=>{
      expect(ceil('4.006)')).to.be.NaN;
    });

    it('Should not accept undefined value to rounded the number',()=>{
      expect(ceil(undefined)).to.be.NaN;
    });
});