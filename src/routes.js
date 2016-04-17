var express = require('express');
var router = express.Router();
var fs = require('fs');
var async = require('async');

// Middleware
var example = require('./middleware/example'),
  respond = require('./middleware/respond');

router.get('/', respond);
router.get('/example', example.read, respond);

module.exports = router;
