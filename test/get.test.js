import get from "../src/get.js";

describe('get', () => {
    it('Should return truthy elements of array',()=>{
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
     expect(get(object, 'a[0].b.c')).to.be.equal(3);
     expect(get(object, ['a', '0', 'b', 'c'])).to.be.equal(3);
     expect(get(object, 'a.b.c', 'default')).to.be.equal('default');

    });
});