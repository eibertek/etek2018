var express = require('express');
var router = express.Router();
var blog = require('./blog/routes');

router.use('/blog', blog);

module.exports = router;