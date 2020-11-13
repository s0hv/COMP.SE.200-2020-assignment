import isBuffer from '../src/isBuffer.js';

describe('isBuffer', () => {
    it('Should return true with true and false', () => {
        expect(isBuffer(new Buffer(2))).to.be.true;
    });

    it('Should return false with non booleans', () => {
        expect(isBuffer(Buffer)).to.be.false;
        expect(isBuffer('abc')).to.be.false;
    });
});

