import endsWith from "../src/endsWith.js";

describe('endsWithArray', () => {
    it('Should return true if `string` ends with `target`',()=>{
      expect(endsWith('abc','c')).to.be.true;
      expect(endsWith('abc','b')).to.be.false
      expect(endsWith('abc', 'b', 2)).to.be.true;
    });

     it('Should accept only string to match with `target` string',()=>{
      expect(endsWith(123,'3')).to.be.false;
     });

});