import reduce from '../src/reduce.js';

describe('reduce', () => {
   it('Reduces an array into a single value with sum function', () => {
       let retVal = reduce([1, 2], (sum, n) => sum + n, 0);
       expect(retVal).to.equal(3);

       retVal = reduce([1, 2], (sum, n) => sum + n, 5);
       expect(retVal).to.equal(3+5);
   });

   it('Should be able to reduce an object', () => {
      const retVal = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
          (result[value] || (result[value] = [])).push(key)
          return result
      }, {});

      expect(retVal).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] })
   });
});
