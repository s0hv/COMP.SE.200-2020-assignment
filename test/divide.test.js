import divide from "../src/divide.js";

describe('divide', () => {
    it('Should return the quotient of given numbers',()=>{
      expect(divide(6,4)).to.be.equal(1);
      expect(divide(5,5)).to.be.equal(1);
    });

    it('Should return the correct added decimal values', () => {
     expect(divide(6.5,4)).to.be.equal(1);
  });
});