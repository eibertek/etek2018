var express = require('express');
var router = express.Router();

//token validation
router.all('*', (req, res, next) => {
  //verify token user req.headers
  console.log(req.headers);
  if(req.headers.token !== 'misuperToken') return res.send(401, 'INVALID TOKEN');
  return next();
});

// Add user
router.post('/register', function (req, res, next) {
    console.log('ID:', req.params);
    next();
  }, function (req, res, next) {
    res.send('User Info');
  });

// Edit user
// delete user
// ban user
// updateToken
// Validate  
router.get('/validate', function (req, res, next) {
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