import isDate from '../src/isDate.js';

describe('isDate', () => {
    it('Should return true with a valid date', () => {
        expect(isDate(new Date(null))).to.be.true;
        expect(isDate(new Date(123))).to.be.true;
    });

    it('Should return false with non Dates', () => {
        expect(isDate('not date')).to.be.false;
        expect(isDate(123)).to.be.false;
    });
});

