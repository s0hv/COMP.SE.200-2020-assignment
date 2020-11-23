import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
    it('Should turn first character to uppercase when all characters lowercase', () => {
        expect(upperFirst('fred')).to.equal('Fred');
    });

    it('Should do nothing with all uppercase string', () => {
        expect(upperFirst('FRED')).to.equal('FRED');
    });
});
