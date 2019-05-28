var express = require('express');
var router = express.Router();
var mysql = require('mysql');

let nizPitanja = [];
let brojac = 0;


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'qvisko_v1'
  });


function getPitanjeUString(nizPitanja, rows){
    for(i in rows){
        nizPitanja.push(rows[i].tekstPitanja);              
    }
    let pitanje = nizPitanja[brojac];
    return pitanje;
}

/* POKRENI KVIZ */
router.get('/', function(req, res, next){
    connection.query("SELECT * FROM pitanja", function(error, rows, fields){
        if(error){
            console.log('Error');
        }else{
            console.log('SUCCESS');
            let pitanje = getPitanjeUString(nizPitanja, rows, brojac);
            brojac++;
            res.render('kviz', { pitanje });
        };
    });
});
module.exports = router;
