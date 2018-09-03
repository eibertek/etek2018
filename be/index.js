var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var APIRoutes = require('./API');

app.use('/build', express.static(__dirname + '/../build'));
console.log(__dirname);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/API', APIRoutes);

app.get('/*', function (req, res) {
  console.log('get req', req.params);
  return res.sendFile(path.join(__dirname, 'template.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});