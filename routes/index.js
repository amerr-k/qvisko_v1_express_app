var express = require('express');
var router = express.Router();
var mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'qvisko_v1'
});

connection.connect(function(error){
  if(error){
      console.log('Error');
  }else{
      console.log('Connected');
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});



module.exports = router;
