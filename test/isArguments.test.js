import isArguments from "../src/isArguments.js";

describe('isArguments', () => {
    it('Should return true if the argument is object',()=>{
     expect(isArguments(function() { return arguments }())).to.be.true;
    });

    it('Should return false when argument is not object',()=>{
        expect(isArguments(1)).to.be.false;
        expect(isArguments("Strign")).to.be.false;
    });

});