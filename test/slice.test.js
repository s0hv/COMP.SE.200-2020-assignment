import slice from '../src/slice.js';

describe('slice', () => {
   it('Should slice correctly the range [0,3[', () => {
       const arr = [1,2,3,4,5];
       expect(slice(arr, 0, 3)).to.deep.equal([1,2,3])
   });

   it('Should return empty array when given array is null', () => {
       expect(slice(null, 0, 3)).to.be.empty;
   });

   it('Should return array starting from index 2 when start parameter is set to 2', () => {
       expect(slice([1,2,3,4], 2)).to.deep.equal([3,4]);
   });

   it('Should return array ending on index 2 when only end parameter is defined and set to 3', () => {
       expect(slice([1,2,3,4], undefined, 3)).to.deep.equal([1,2,3]);
   });

   it('Should return input array when start is null', () => {
       const input = [1,2,3];
       expect(slice(input, null)).to.deep.equal(input);
   });

   it('Should return values up to third last index when end is set to -2', () => {
       expect(slice([1,2,3,4,5], 0, -2)).to.deep.equal([1,2,3]);
   });

   it('Should return array from fourth last index to second last when start is -4 and end is -1', () => {
       expect(slice([1,2,3,4,5], -4, -1)).to.deep.equal([2,3,4]);
   });

   it('Should set start to 0 when -start is larger than the length', () => {
       expect(slice([1,2,3], -4)).to.deep.equal([1,2,3]);
   });

   it('Should return empty array when start > end', () => {
       expect(slice([1,2,3], 5, 0)).to.be.empty;
   });
});
