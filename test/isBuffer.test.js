import isBuffer from '../src/isBuffer.js';

describe('isBuffer', () => {
    it('Should return true with a valid buffer', () => {
        expect(isBuffer(new Buffer(2))).to.be.true;
    });

    it('Should return false with no buffer', () => {
        expect(isBuffer(Buffer)).to.be.false;
        expect(isBuffer('abc')).to.be.false;
    });
});

