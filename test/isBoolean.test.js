import isBoolean from '../src/isBoolean.js';

describe('isBoolean', () => {
    it('Should return true with true and false', () => {
        expect(isBoolean(true)).to.be.true;
        expect(isBoolean(false)).to.be.true;
    });

    it('Should return false with non booleans', () => {
        expect(isBoolean({})).to.be.false;
        expect(isBoolean('abc')).to.be.false;
        expect(isBoolean(Function)).to.be.false;
    });
});

