import isArrayLike from '../src/isArrayLike.js';


describe('isArrayLike', () => {
  it('Should return false with falsy values', () => {
    expect(isArrayLike(null)).to.be.false;
    expect(isArrayLike(undefined)).to.be.false;
  });

  it('Should return false with Function as input', () => {
    expect(isArrayLike(Function)).to.be.false;
    expect(isArrayLike(() => {})).to.be.false;
  });

  it('Should return true for array like values', () => {
    expect(isArrayLike('abc')).to.be.true;

    expect(isArrayLike([1,2,3])).to.be.true;
    expect(isArrayLike([])).to.be.true;

    expect(isArrayLike({ length: 1 })).to.be.true;
    expect(isArrayLike({ length: 0 })).to.be.true;
  });

  it('Should return false with invalid lengths', () => {
    expect(isArrayLike({ length: null })).to.be.false;
    expect(isArrayLike({ length: -1 })).to.be.false;
  })
});
