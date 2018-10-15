var express = require('express');
var router = express.Router();
var blog = require('./blog/routes');
var users = require('./users/routes');
var rss = require('./rss/routes');

router.use('/Blog', blog);
router.use('/Users', users);
router.use('/RSS', rss);

module.exports = router;