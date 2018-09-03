var express = require('express');
var router = express.Router();
const { BlogModel } = require('./blog.model');

//token validation
router.all('*', (req, res, next) => {
  //verify token user req.headers
  if(req.headers.authorization !== 'Bearer mysecretToken') return res.send(401, 'INVALID TOKEN');
  return next(); 
});

// new blog
router.post('/save', function (req, res, next) {
    BlogModel.doSave({ name: 'MYBLOG', title: 'this is my blog', body:'mine mine mine' });
    next();
  }, function (req, res, next) {
    res.send('ok');
  });

//edit blog

//delete blog

//comment


// get all blogs  
router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    const blogs = BlogModel.getBlogs({});
    blogs.then((success) => {
      console.log(blogs);
      res.send(JSON.stringify({ success: true, blog: success, }));  
    }, (err) => {
      res.send(JSON.stringify({  success: false, error: err, }));  
    });
});

module.exports = router;