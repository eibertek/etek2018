var express = require('express');
var app = express();
var path = require('path');

app.use('/scripts', express.static('build'));

app.get('*', function (req, res) {
  return res.sendFile(path.join(__dirname, 'template.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});