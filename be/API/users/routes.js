var express = require('express');
var router = express.Router();
const models = require('./user.model');


// Add user
router.post('/login', function (req, res, next) {
  const { username, password } = req.params;
  models.userModel.login(username, password);
  return res.status(200).send(200, 'ok');
});

// Add user
router.post('/register', function (req, res, next) {
  const { name, lastname, mail, username, password } = req.body;
  const query = models.userModel.createUser({name, lastname, mail, username, password});
  query.then(success => {
    return res.status(200).send(JSON.stringify(success));
  })
});

//token validation
router.all('*', (req, res, next) => {
  //verify token user req.headers
  const { userid, tokenid} = req.headers;
  const query = models.tokenModel.validateToken(userid, tokenid);
  query.then(resolve => {
    console.log(resolve.length);
    if(resolve && resolve.length < 1) return res.status(401).send('INVALID TOKEN');
    next();
  }, rej => {
    return res.send(401, 'INVALID TOKEN');
  });  
});

// Edit user
router.get('/edit', function (req, res, next) {
  return res.send(200, 'ok');  
});

// delete user
router.get('/remove', function (req, res, next) {
  return res.send(200, 'ok');  
});

// ban user
router.get('/ban', function (req, res, next) {
  return res.send(200, 'ok');
});

// validateMail
router.get('/validate/mail', function (req, res, next) {
  return res.send(200, 'ok');
});


module.exports = router;