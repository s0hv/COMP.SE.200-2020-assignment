import isTypedArray from '../src/isTypedArray.js';


describe('isTypedArray', () => {
    it('Should return true with typed arrays', () => {
        expect(isTypedArray(new Uint8Array(0))).to.be.true;
        expect(isTypedArray(new Float64Array(0))).to.be.true;
    });

    it('Should return false with non typed arrays', () => {
        expect(isTypedArray([])).to.be.false;
    });

    it('Should return false with non arrays', () => {
        expect(isTypedArray(1)).to.be.false;
        expect(isTypedArray('test')).to.be.false;
        expect(isTypedArray(null)).to.be.false;
        expect(isTypedArray({})).to.be.false;
    });
});

