import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
    it('Should return true with an empty value', () => {
        expect(isEmpty(null)).to.be.true;
        expect(isEmpty(true)).to.be.true;
        expect(isEmpty(1)).to.be.true;
        expect(isEmpty({})).to.be.true;
        expect(isEmpty('')).to.be.true;
        expect(isEmpty(new Set())).to.be.true;
        expect(isEmpty(new Buffer(0))).to.be.true;
    });

    it('Should return false with non empty values', () => {
        expect(isEmpty({ a : 1 })).to.be.false;
        expect(isEmpty('a')).to.be.false;
        expect(isEmpty([1])).to.be.false;
        expect(isEmpty(new Set([1]))).to.be.false;
        expect(isEmpty(new Buffer(1))).to.be.false;
    });
});

