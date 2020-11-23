import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
    it('Should return the number itself if it\'s a valid number', () => {
        expect(toNumber(1)).to.equal(1);
        expect(toNumber(1.2)).to.equal(1.2);
    });

    it('Should return NaN with a symbol', () => {
        expect(toNumber(Symbol.iterator)).to.be.NaN;
    });

    it('Should return NaN with an empty object', () => {
        expect(toNumber({})).to.be.NaN;
    });

    it('Should transform string into its number representation', () => {
        expect(toNumber('1')).to.equal(1);
        expect(toNumber('1.5')).to.equal(1.5);
        expect(toNumber('-1.5')).to.equal(-1.5);
    });

    it('Should transform binary number to base10', () => {
        expect(toNumber('0b000011')).to.equal(3);
        expect(toNumber('0b1')).to.equal(1);
    });

    it('Should return NaN for - prefixed binary numbers', () => {
         expect(toNumber('-0b000011')).to.be.NaN;
    });

    it('Should transform hexadecimal to base10', () => {
        expect(toNumber('0xFF')).to.equal(255);
        expect(toNumber('0x00')).to.equal(0);
    });

    it('Should return NaN for - prefixed hexadecimal numbers', () => {
         expect(toNumber('-0xFF')).to.be.NaN;
    });

    it('Should return NaN for invalid hexadecimal values', () => {
         expect(toNumber('0xFG')).to.be.NaN;
    });

    it('Should transform octal to base10', () => {
        expect(toNumber('0o31')).to.equal(25);
        expect(toNumber('0o0')).to.equal(0);
    });

    it('Should return NaN for - prefixed octal numbers', () => {
         expect(toNumber('-0o31')).to.be.NaN;
    });

    it('Should return NaN for invalid octal values', () => {
         expect(toNumber('0o8')).to.be.NaN;
    });

    it('Should strip the whitespace in numbers before converting', () => {
        expect(toNumber('   10.2   ')).to.equal(10.2);
    });

    it('Should return NaN when whitespace exists in the middle of the numbers', () => {
        expect(toNumber('   1  1.3 ')).to.be.NaN;
    });
});
