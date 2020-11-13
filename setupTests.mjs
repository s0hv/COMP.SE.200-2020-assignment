import chai from 'chai';
import spies from 'chai-spies';

export const mochaHooks = {
    beforeAll() {
        global.expect = chai.expect;
        global.chai = chai
        chai.use(spies);
    }
}
