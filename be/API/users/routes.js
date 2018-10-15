var express = require('express');
var router = express.Router();
const models = require('./user.model');


// Add user
router.post('/login', function (req, res, next) {
  const { username, password } = req.body;
  const query = models.userModel.login(username, password);
  query.then(success => {
    return res.status(200).send(JSON.stringify(success));
  }, (error)=>{
    return res.status(401).send(JSON.stringify(error));
  })
});

// Add user
router.post('/register', function (req, res, next) {
  const { name, lastname, mail, username, password } = req.body;
  console.log(name, lastname, username, password);
  if(!name || !lastname || !mail || !username || !password) {
    return res.status(500).send(JSON.stringify({
      error: 'There are empty values on the form'
    }));
  }
  if(name === "" || lastname === "" || mail === "" || username === "" || password === "" ) {
    console.log(name, lastname, username, password);
    return res.status(500).send(JSON.stringify({
      error: 'There are empty values on the form'
    }));
  };

  const query = models.userModel.createUser({name, lastname, mail, username, password});
  query.then(success => {
    const tempToken = success.saveTokenResult.tempToken;
    return res.status(200).send(JSON.stringify({
      tempToken
    }));
  })
});

// validateMail
router.get('/validate/mail/:token', function (req, res, next) {
  const tokenId = req.params.token;
  const query = models.userModel.validateMail(tokenId);
  query.then(response => {
    console.log(response);
    if(response.error){
      return res.status(400).send(JSON.stringify({ error: response.error }));
    } 
    return res.status(200).send(JSON.stringify(response));
  }).catch(error => {
    return res.status(500).send(JSON.stringify(error));
  });
});

//token validation
router.all('*', (req, res, next) => {
  //verify token user req.headers
  const { userid, tokenid} = req.headers;
  const query = models.tokenModel.validateToken(userid, tokenid);
  query.then(resolve => {
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




module.exports = router;