import map from '../src/map.js';


describe('map', () => {
    it('Should return class keys for initialized class', () => {
        const square = (a) => a*a;
        const squareSpy = chai.spy(square);

        expect(map([1,2,3], squareSpy)).to.deep.equal([1, 4, 9]);
        expect(squareSpy).to.have.been.called.exactly(3);
    });

    it('Should do nothing with an empty array', () => {
        const spy = chai.spy();

        expect(map([], spy)).to.be.empty;
        expect(spy).not.to.have.been.called();
    });

    it('Spy should be called with value, index, array', () => {
        const spy = chai.spy();

        map(['test'], spy);
        expect(spy).to.have.been.called.with('test', 0, ['test']);
    });

    it('Should do nothing with non arrays', () => {
        const spy = chai.spy();

        expect(map(null, spy)).to.be.empty;
        expect(spy).not.to.have.been.called();
    });

    it('Should throw TypeError when iteratee is not a function', () => {
        expect(() => map([1,2,3], undefined)).to.throw(TypeError);
    });
});

