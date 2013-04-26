//= require spec_helper

describe('table of contents', function() {
  it('says Table of Contents on top', function() {
    $('body h1').text().should.equal('Table of Contents');
  });
});
