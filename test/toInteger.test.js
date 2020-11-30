import toInteger from '../src/toInteger.js';

describe('toInteger', () => {
    it('Should turn float to integer', () => {
        expect(toInteger(3.2)).to.equal(3);
    });

    it('Should return 0 with Number.MIN_VALUE', () => {
        expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    });

    it('Should turn infinity to Number.MAX_VALUE', () => {
        expect(toInteger(Infinity)).to.equal(Number.MAX_VALUE);
    });

    it('Should turn string to int', () => {
        expect(toInteger('3.2')).to.equal(3);
    })
});
