var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var APIRoutes = require('./API');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/scripts', express.static('build'));

app.use('/API', APIRoutes);

app.get('*', function (req, res) {
  return res.sendFile(path.join(__dirname, 'template.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});