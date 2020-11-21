import memoize from '../src/memoize.js';


const getMapSpy = () => {
    const tempMap = new Map();
    const spy = chai.spy.interface({
        get(key) {
            return tempMap.get(key);
        },
        has(key) {
            return tempMap.has(key);
        },
        set(key, value) {
            tempMap.set(key, value);
        },
    });

    function Temp() {
        this.get = spy.get;
        this.has = spy.has;
        this.set = spy.set;
    }

    memoize.Cache = Temp;

    return spy
};

describe('memoize', () => {
    beforeEach(() => {
        memoize.Cache = Map;
    });

    it('Should memoize value to map', () => {
        const MapSpy = getMapSpy();
        const values = memoize(Object.values);
        const object = { a: 1, b: 2 };
        values(object);

        // Make sure map was called
        expect(MapSpy.has).to.have.been.called.with(object);
        expect(MapSpy.has).to.have.been.called.once;

        expect(MapSpy.set).to.have.been.called.with(Object.values(object));
        expect(MapSpy.set).to.have.been.called.once;

        values(object);

        // Make sure value is fetched from map
        expect(MapSpy.has).to.have.been.called.with(object);
        expect(MapSpy.has).to.have.been.called.twice;

        expect(MapSpy.get).to.have.been.called.with(object);
        expect(MapSpy.get).to.have.been.called.once;

        // Make sure set was not called again
        expect(MapSpy.set).to.have.been.called.once;
    });

    it('Should memoize value to map with custom resolver', () => {
        const MapSpy = getMapSpy();
        const resolver = chai.spy(() => '1');
        const values = memoize(Object.values, resolver);
        const object = { a: 1, b: 2 };

        values(object, 'test');
        expect(resolver).to.have.been.called.with.exactly(object, 'test');
        expect(resolver).to.have.been.called.once;

        // Make sure map was called
        expect(MapSpy.has).to.have.been.called.with('1');
        expect(MapSpy.has).to.have.been.called.once;

        expect(MapSpy.set).to.have.been.called.with(Object.values(object));
        expect(MapSpy.set).to.have.been.called.once;

        values(object);
        expect(resolver).to.have.been.second.called.with.exactly(object);

        // Make sure value is fetched from map
        expect(MapSpy.has).to.have.been.called.with('1');
        expect(MapSpy.has).to.have.been.called.twice;

        expect(MapSpy.get).to.have.been.called.with('1');
        expect(MapSpy.get).to.have.been.called.once;

        // Make sure set was not called again
        expect(MapSpy.set).to.have.been.called.once;
    });

    it('Should memoize on each unique input', () => {
        const MapSpy = getMapSpy();
        const values = memoize(Object.values);
        const object = { a: 1, b: 2 };
        const object2 = { a: 1, b: 2 };
        const object3 = { c: 5 };
        values(object);

        // Object 1
        expect(MapSpy.has).to.have.been.first.called.with(object);
        expect(MapSpy.has).to.have.been.called.once;

        expect(MapSpy.set).to.have.been.first.called.with(Object.values(object));

        // Object 2
        values(object2);
        expect(MapSpy.has).to.have.been.second.called.with(object2);
        expect(MapSpy.has).to.have.been.called.twice;

        expect(MapSpy.set).to.have.been.second.called.with(Object.values(object2));

        // Object 3
        values(object3);
        expect(MapSpy.has).to.have.been.third.called.with(object3);
        expect(MapSpy.has).to.have.been.called.exactly(3);

        expect(MapSpy.set).to.have.been.third.called.with(Object.values(object3));

        expect(MapSpy.get).not.to.have.been.called();
    });

    it('Should throw TypeError when func is not a function', () => {
        expect(() => memoize(1)).to.throw(TypeError);
    });

    it('Should throw TypeError when resolver is not a function', () => {
        expect(() => memoize(() => null, 1)).to.throw(TypeError);
    });

    it('Should default to Map when memoize.Cache is not defined', () => {
       memoize.Cache = undefined;
       const memoized = memoize(() => null);
       expect(memoized.cache).to.be.instanceof(Map);
    });
});
