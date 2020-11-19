import isSymbol from '../src/isSymbol.js';


describe('isSymbol', () => {
    it('Should return false with plain object and null', () => {
        expect(isSymbol({})).to.be.false;
        expect(isSymbol(null)).to.be.false;
    });

    it('Should return true with a symbol', () => {
        expect(isSymbol(Symbol.iterator)).to.be.true;
    });
});

