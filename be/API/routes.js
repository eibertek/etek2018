var express = require('express');
var router = express.Router();

router.post('/new', function (req, res, next) {
    console.log('ID:', req.params.id);
    next();
  }, function (req, res, next) {
    res.send('User Info');
  });
  
  // handler for the /user/:id path, which prints the user ID
router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
});

module.exports = router;