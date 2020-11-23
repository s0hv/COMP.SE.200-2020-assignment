import toString from '../src/toString.js';

describe('toString', () => {
    it('Should return empty string with null', () => {
        expect(toString(null)).to.equal('');
    });

    it('Should preserve sign on zero', () => {
        expect(toString(-0)).to.equal('-0')
    });

    it('Should remove square brackets from an array', () => {
        expect(toString([1,2,3])).to.equal('1,2,3')
    });

    it('Should return string representation of symbol', () => {
        expect(toString(Symbol.iterator)).to.equal('Symbol(Symbol.iterator)');
    });

    it('Should return "[object Object]" with objects', () => {
        expect(toString({})).to.equal('[object Object]');
        expect(toString({ a: 1 })).to.equal('[object Object]');
    });
});
