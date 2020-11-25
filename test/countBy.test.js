import countBy from "../src/countBy.js";

describe('countBy', () => {

    it('Should return the occurrence of objects in a array',()=>{
        const users = [ { 'user': 'barney', 'active': true }, { 'user': 'betty', 'active': true },
        { 'user': 'fred', 'active': false } ];
        expect(countBy(users, value => value.active)).to.deep.equal({ true: 1, false: 0 });
        expect(countBy(users, value => value.user)).to.deep.equal({ barney: 0, betty: 0, fred: 0 });
    });

});