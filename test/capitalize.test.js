import capitalize from "../src/capitalize.js";

describe('capitalize', () => {
    it('Should return the converted capitalize String',()=>{
      expect(capitalize('FOOBAR').trim()).to.equal('Foobar');
      expect(capitalize('FooBar').trim()).to.equal('Foobar');
      expect(capitalize('foobar').trim()).to.equal('Foobar');
      expect(capitalize('fOOBAR').trim()).to.equal('Foobar');
    });
});