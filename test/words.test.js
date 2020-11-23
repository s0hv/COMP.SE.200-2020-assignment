import words from '../src/words.js';

describe('words', () => {
    it('Should split sentence into words', () => {
        const expected = ['fred', 'barney', 'pebbles'];
        expect(words('fred, barney, & pebbles')).to.deep.equal(expected);
        expect(words('fred, barney pebbles')).to.deep.equal(expected);

        expect(words('fred - barney | pebbles')).to.deep.equal(expected);
        expect(words('fred _ barney + pebbles')).to.deep.equal(expected);

        expect(words('äää ööö')).to.deep.equal(['äää', 'ööö']);
    });

    it('Should use a custom pattern if provided', () => {
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);

        // Use a regex that matches nothing
        expect(words('fred, barney, & pebbles', /$a/g)).to.deep.equal([]);
    });
});
