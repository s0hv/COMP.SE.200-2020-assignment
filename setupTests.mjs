import chai from 'chai';
import spies from 'chai-spies';

export async function mochaGlobalSetup() {
    global.expect = chai.expect;
    global.chai = chai
    chai.use(spies);
}
