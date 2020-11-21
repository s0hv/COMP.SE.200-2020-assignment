import toFinite from '../src/toFinite.js';

describe('toFinite', () => {
   it('Should return 0 with non number values', () => {
       expect(toFinite('a')).to.equal(0);
       expect(toFinite(new Map())).to.equal(0);
       expect(toFinite(null)).to.equal(0);
       expect(toFinite(NaN)).to.equal(0);
   });

   it('Should convert string to number when possible', () => {
       expect(toFinite('1')).to.equal(1);
       expect(toFinite('3.2')).to.equal(3.2);
   });

   it('Should return Number.MAX_VALUE with input as Infinity', () => {
       expect(toFinite(Infinity)).to.equal(Number.MAX_VALUE);
   });

   it('Should return -Number.MAX_VALUE with input as -Infinity', () => {
       expect(toFinite(-Infinity)).to.equal(-Number.MAX_VALUE);
   });
});
