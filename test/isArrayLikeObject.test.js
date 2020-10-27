import isArrayLikeObject from '../src/isArrayLikeObject.js';

describe('isArrayLikeObject', () => {
    it('Should return true with array like objects', () => {
        expect(isArrayLikeObject({ length: 1 })).to.be.true;
        expect(isArrayLikeObject([1,2])).to.be.true;
    });

    it('Should return false with not array like objects', () => {
        expect(isArrayLikeObject({ property: 1 })).to.be.false;
        expect(isArrayLikeObject('abc')).to.be.false;
        expect(isArrayLikeObject(Function)).to.be.false;
    });
});
