global.request = require('request').defaults({
  json: true,
  jar: true
});
global.test = require('./setup');
process.env.UNIT_TESTS = true;

module.exports = {
  baseUrl: 'http://localhost:' + (process.env.PORT || 3000)
};
