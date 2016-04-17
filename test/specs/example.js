var config = require('../config');
var should = require('should');

describe('Example test', function() {
  before(function(_done) {
		test.setup();
      _done();
  });

  it('should pass', function(done) {
    request(config.baseUrl + '/example', function (err, res, body) {
      if (err) return done(err);
      res.statusCode.should.eql(200);
      body.example.length.should.eql(5);
      done();
    })
  });
});
