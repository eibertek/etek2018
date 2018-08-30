var express = require('express');
var router = express.Router();
var blog = require('./blog/routes');
var users = require('./users/routes');

router.use('/Blog', blog);
router.use('/Users', users);

module.exports = router;