var express = require('express');
var router = express.Router();
var BloModel = require('./blog.model');

//token validation
router.all('*', (req, res, next) => {
  //verify token user req.headers
  console.log(req.headers);
  if(req.headers.token !== 'misuperToken') return res.send(401, 'INVALID TOKEN');
  return next();
});

// new blog
router.post('/new/:id?', function (req, res, next) {
    console.log('ID:', req.params);
    next();
  }, function (req, res, next) {
    res.send('User Info');
  });

//edit blog

//delete blog

//comment


// get all blogs  
router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ blog: [
      {
        id:1,
        name:'Blog',
        title:'My blog',
        body:'<h2>My user blog</h2>'
      }
    ] }));
});

module.exports = router;