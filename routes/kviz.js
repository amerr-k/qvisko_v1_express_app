var express = require('express');
var router = express.Router();
var mysql = require('mysql');

let pitanja = [];
let brojac = 0;


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'qvisko_v1'
  });


  /* POKRENI KVIZ */
router.get('/', function(req, res, next){
    connection.query("SELECT * FROM pitanja", function(error, rows, fields){
        if(error){
            console.log('Error');
        }else{
            console.log('SUCCESS');
            for(i in rows){
                pitanja.push(rows[i].tekstPitanja);              
            }
            console.log(pitanja);
            res.render('kviz', { pitanja });
        };
    });
});
module.exports = router;
