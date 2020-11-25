import defaultTo from "../src/defaultTo.js";

describe('defaultTo', () =>{
     it('Should return the default value if the given value is null',()=>{
        expect(defaultTo(1, 10)).to.be.equal(1);
        expect(defaultTo(null, 10)).to.be.equal(10);
     });

     it('Should return the null default value ',()=>{
        expect(defaultTo(null, null)).to.be.equal(null);
     });
});