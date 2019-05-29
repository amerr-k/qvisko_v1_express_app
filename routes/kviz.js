var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var async = require('async');

let nizPitanja = [];
let nizOdgovora = [];


let brojac = 0;





// function getPitanje(data, dataForSending){
//     let pitanja = [];
//     for(i in data.nizPitanja){
//         pitanja.push(data.nizPitanja[i].tekstPitanja);
//     }
//     return pitanje
// }

let database = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'qvisko_v1'
}

function getPitanje(nizPitanja, nizOdgovora, dataForSending){
    let pitanje = nizPitanja[brojac];
    dataForSending.pitanje = pitanje;
    console.log(pitanje);
    getOdgovore(pitanje.pitanjeId, nizOdgovora, dataForSending);
    return dataForSending;
}
function getOdgovore(pitanje_id, nizOdgovora, dataForSending){
    for(i in nizOdgovora){
        if(nizOdgovora[i].pitanjeId === pitanje_id){
            dataForSending.odgovori.push(nizOdgovora[i]);
        }
    }
    console.log(dataForSending);
}

/* POKRENI KVIZ */
router.get('/', function(req, res, next){
    let connectionPool = mysql.createPool(database);
    let dataForSending = {
        pitanje: '',
        odgovori: []
    };

    let query1 = "SELECT * FROM pitanja";
    let query2 = "SELECT * FROM odgovori";

    async.parallel([
        function(parallel_done){
            connectionPool.query(query1, function(error, rows){
                if(error){console.log(error.message)}
                nizPitanja = rows;
                parallel_done();
            });
        },
        function(parallel_done){
            connectionPool.query(query2, function(error, rows){
                if(error){console.log(error.message)}
                nizOdgovora = rows;
                parallel_done();
            });
        }
    ], function(err){
        if(err){console.log(err)};
        connectionPool.end();
        let data = getPitanje(nizPitanja, nizOdgovora, dataForSending);
        res.render('kviz', {data});
        brojac++;
    })

    // ovo koristimo ako cemo samo jednu konekciju medjutim meni trebaju dvije
    // connection.query(query1, function(error, rows, fields){
    //     if(error){
    //         console.log('Error');
    //     }else{
    //         console.log('SUCCESS');
    //         let pitanje = getPitanjeUString(nizPitanja, rows, brojac);
    //         brojac++;
    //         res.render('kviz', { pitanje });
    //     };
    // });
});


module.exports = router;
