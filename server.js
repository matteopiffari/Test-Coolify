const express = require('express');
var mysql = require('mysql2');
const app = express();
const port = 16000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/db', (req, res) => {
    var con = mysql.createConnection({
        host: "10.30.0.10",
        user: "piffa",
        password: process.env.DB_PASSWORD,
        database: "piffa"
    });

    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM test", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    }
    );
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
