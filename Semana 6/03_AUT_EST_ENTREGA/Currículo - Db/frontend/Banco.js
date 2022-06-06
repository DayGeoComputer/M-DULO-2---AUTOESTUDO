const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3030;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'banco.db';
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("../frontend/"));
app.use(express.json());
/* Definição dos endpoints */
/****** CRUD ******************************************************************/
// Retorna todos registros (é o R do CRUD - Read)

//Esse aqui é apenas para visualizar no servidor o banco
app.get('/projetos', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    var db = new sqlite3.Database(DBPATH); // Abre o banco
var sql = 'SELECT * FROM PROJETOS ORDER BY Título COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});



// Agora irei Inseri um registro (é o C do CRUD - Create)
app.post('/projetoinsert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    sql = "INSERT INTO PROJETOS (Título, Duração, Localização) VALUES ('" + req.body.Título + "','" + req.body.Duração + "','" + req.body.Localização + "' )";
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });









