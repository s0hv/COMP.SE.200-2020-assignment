import isObjectLike from '../src/isObjectLike.js';

describe('isObjectLike', () => {
    it('Should return true with a plain object', () => {
        expect(isObjectLike({})).to.be.true;
    });

    it('Should return true objects', () => {
        expect(isObjectLike([1, 2, 3])).to.be.true;
        expect(isObjectLike(/test/)).to.be.true;
    });

    it('Should return false for null', () => {
        expect(isObjectLike(null)).to.be.false;
    });

    it('Should return false objects that are not like objects', () => {
        expect(isObjectLike(Function)).to.be.false;
    });
});

