import isLength from '../src/isLength.js';

describe('isLength', () => {
    it('Should return true with a valid length', () => {
        expect(isLength(3)).to.be.true;
        expect(isLength(0)).to.be.true;
        expect(isLength(Number.MAX_SAFE_INTEGER)).to.be.true;
    });

    it('Should return false with an invalid length', () => {
        expect(isLength(Number.MIN_SAFE_INTEGER)).to.be.false;
        expect(isLength(-1)).to.be.false;
        expect(isLength(Infinity)).to.be.false;
        expect(isLength('3')).to.be.false;
        expect(isLength(Number.MAX_SAFE_INTEGER + 1)).to.be.false;
        expect(isLength(NaN)).to.be.false;
    });
});

