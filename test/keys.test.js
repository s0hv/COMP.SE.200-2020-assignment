import keys from '../src/keys.js';


describe('keys', () => {
    it('Should return class keys for initialized class', () => {
        function Foo() {
            this.a = 1
            this.b = 2
        }
        Foo.prototype.c = 3;

        expect(keys(new Foo).sort()).to.deep.equal(['a', 'b']);
    });

    it('Should return indices as strings for a string', () => {
        expect(keys('hi')).to.deep.equal(['0', '1']);
    });

    it('Should return object keys for an object', () => {
        expect(keys({ c: 1, d: 2 }).sort()).to.deep.equal(['c', 'd']);
    });

    it('Should return indices as strings with a list', () => {
        expect(keys([1,2,3]).sort()).to.deep.equal(['0', '1', '2']);
    });

    it('Should return an empty array for values without keys', () => {
        expect(keys(null)).to.be.empty;
        expect(keys(1)).to.be.empty;
        expect(keys(Symbol.iterator)).to.be.empty;
    });
});

