import filter from "../src/filter.js";

describe('filter', () => {
    it('Should return truthy elements of array',()=>{
    const users = [{ 'user': 'barney', 'active': true },{ 'user': 'fred',  'active': false }];
    console.log(filter(users, predicate));
     expect(filter(users, predicate)).to.be.equal(['barney']);
    });

    function predicate(value, index, array) {
        if(array.active === value ) {return true;}
    }
});