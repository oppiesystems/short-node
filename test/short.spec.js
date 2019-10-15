'use strict';

const short = require('../lib/short')(process.env.SHORT_API_KEY);

const expect = require('chai').use(require('chai-as-promised')).expect;

const SHORT_DIGEST_OPTIONS = {
  content: `
    Enlightenment is man's emergence from his self-imposed nonage. Nonage is the inability to use one's own understanding without another's guidance. This nonage is self-imposed if its cause lies not in lack of understanding but in indecision and lack of courage to use one's own mind without another's guidance. Dare to know! (Sapere aude.) \"Have the courage to use your own understanding,\" is therefore the motto of the enlightenment.
  `,
};

describe('Short', function() {
  this.timeout(20000);

  describe('digest', () => {
    let digestedOutput;
    before(async () => {
      digestedOutput = await short.digest(SHORT_DIGEST_OPTIONS);
    });

    it('Should return digested content from raw content provided to it', () => {
      expect(digestedOutput).to.have.property('digest');
    });

    it('Should reduce the raw content passed to it', () => {
      expect(digestedOutput.inputLength).to.be.greaterThan(
        digestedOutput.outputLength
      );
    });
  });
});
