var express = require('express');
var mysqllib = require('./mysqlLib');
var app = express();
var route = express.Router();

app.get('/', function (req, res) {
  var querydata;
  var data = mysqllib.queryExecute('SELECT 1 + 1 AS solution');
  data.then(function (data1) {
    res.send(data1);
  }).catch(function () {
    console.log('reject fired.');
  });
});

app.listen('5000', function () {
  console.log('listening....');
});
