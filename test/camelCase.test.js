import camelCase from "../src/camelCase.js";

describe('camelCase', () => {
    it('Should return the converted camelCase String',()=>{
    expect(camelCase('Foo Bar')).to.equal('fooBar');
    });
});