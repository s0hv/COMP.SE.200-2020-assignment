import isObject from '../src/isObject.js';

describe('isObject', () => {
    it('Should return true with a plain object', () => {
        expect(isObject({})).to.be.true;
    });

    it('Should return true with an object', () => {
        expect(isObject([1, 2, 3])).to.be.true;
        expect(isObject(Function)).to.be.true;
        expect(isObject(/test/)).to.be.true;
    });

    it('Should return false with null', () => {
        expect(isObject(null)).to.be.false;
    });

     it('Should return false with non object types', () => {
        expect(isObject("test")).to.be.false;
        expect(isObject(1)).to.be.false;
    });
});

