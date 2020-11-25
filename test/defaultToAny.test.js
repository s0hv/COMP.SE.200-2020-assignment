import defaultToAny from "../src/defaultToAny.js";
describe("defaultToAny", ()=>{
    it("should return the actual value", ()=>{
        expect(defaultToAny(1, 10, 20)).to.be.equal(1);
        expect(defaultToAny(10, 1, 20)).to.be.equal(10);
    });

    it("should return the actual value", ()=>{
        expect(defaultToAny(undefined, 10, 20)).to.be.equal(10);
        expect(defaultToAny(undefined, null, 20)).to.be.equal(20);
    });
});