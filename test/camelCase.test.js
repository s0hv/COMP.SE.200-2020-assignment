import camelCase from "../src/camelCase.js";

describe('camelCase', () => {
    it('Should return the converted camelCase String',()=>{
      expect(camelCase('Foo Bar').trim()).to.equal('fooBar');
      expect(camelCase('--foo-bar--').trim()).to.equal('fooBar');
      expect(camelCase('__FOO_BAR__').trim()).to.equal('fooBar');
      expect(camelCase('SoftwareTesting').trim()).to.equal('softwareTesting');
    });
});