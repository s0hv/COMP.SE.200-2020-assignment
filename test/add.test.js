import add from "../src/add.js";

describe('add', () => {
  it('Should return the correct added values', () => {
    expect(add(5,5)).to.equal(10);
    expect(add(5,15)).to.equal(20);
  });
  it('Should return the correct added decimal values', () => {
    expect(add(5,5.5)).to.equal(10.5);
    expect(add(5.5,5.5)).to.equal(11.0);
  });
  it('Should return the correct sum of negative vales', () => {
    expect(add(5,-5.5)).to.equal(-0.5);
    expect(add(-5.5,-5.5)).to.equal(-11.0);
  });
  it('Should return the correct sum of negative vales', () => {
    expect(add(5,-5.5)).to.equal(-0.5);
    expect(add(-5.5,-5.5)).to.equal(-11.0);
  });
});
