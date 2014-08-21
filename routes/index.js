var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var connection = mysql.createConnection( {
  host: '',
  user: '',
  password: '',
});
connection.query('use politwoops');
/* GET home page. */
router.get('/', function(req, res) {
  connection.query('SELECT * FROM deleted_feeds order by modified desc', function(err, rows){
    res.render('index', {users:rows});
  });
});

module.exports = router;
