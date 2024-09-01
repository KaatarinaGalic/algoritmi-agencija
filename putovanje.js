const express = require('express')
const app = express()
const port = 8080
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "agencija"
});

con.connect(function (err) {
    if (err) throw err;

    app.get('/dodaj_putovanje/:naziv/:odrediste/:cijena', (req, res) => {
        let naziv = req.params.naziv
        let odrediste = req.params.odrediste
        let tip_putovanja = req.params.tip_putovanja
        let cijena = req.params.cijena

        var sql = "INSERT INTO putovanja (naziv, odrediste, cijena) VALUES ('" + naziv + "', '" + odrediste + "','"+ cijena +"')";
        con.query(sql, function (err, result) {
            if (err) res.send('Greška!' + err)
            res.send('Dodano!')
        });
    })

    
});

app.listen(port, () => {
    console.log(`Web aplikacija pokrenuta na portu ${port}`)
})
