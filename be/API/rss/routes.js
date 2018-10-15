var express = require('express');
var router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser();

//token validation
router.all('*', (req, res, next) => {
  //verify token user req.headers
//  if(req.headers.authorization !== 'Bearer mysecretToken') return res.send(401, 'INVALID TOKEN');
  return next(); 
});

// new blog
router.get('/infobae', async function (req, res, next) {
  let feed = await parser.parseURL('https://www.google.com.ar/alerts/feeds/04382456816690601994/17197974888176590249');
  return  res.send(feed);
});


module.exports = router;