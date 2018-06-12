var mysql = require('mysql');
var result = {};

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

exports.queryExecute = function (qry) {
  return new Promise(function (resolve, reject) {
    connection.query(qry, function (error, results, fields) {
      if (error) {
        reject();
      }else {
        resolve(results);
      }
    });
  });
};

exports.checkConnection = function () {
  connection.connect(function (err) {
    if (err) throw err;
    result.connectionStatus =  true;
    console.log('connected to db.');
  });
};

exports.result = result;
