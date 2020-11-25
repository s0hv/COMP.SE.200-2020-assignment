import every from "../src/every.js";

describe('every', () => {
    it('Should return truthy elements of array',()=>{
     expect(every([true, 1, null, 'yes'], predicate)).to.be.false;
    });

    function predicate(value, index, array) {
        if(value === true || value==="" || value===false || value===null) {return true;}
    }
});