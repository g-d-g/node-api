module.exports = {
  read: function(req, res, next) {
    var example = require('../service/example');
    example.read(function(err, example) {
      res.data = example;
      next();
    });
  }
};
