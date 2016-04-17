var express = require('express');
var router = express.Router();

// Middleware
var example = require('./middleware/example'),
  respond = require('./middleware/respond');

router.get('/', respond);
router.get('/example', example.read, respond);

module.exports = router;
