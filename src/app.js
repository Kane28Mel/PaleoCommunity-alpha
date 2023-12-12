const express = require('express');
const app = express();
const puerto = 80;
const CategoriasController = require('./controllers/CategoriasController');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

app.get('/categorias', CategoriasController.indexGet);
app.get('/categorias/:id([0-9]+)', CategoriasController.itemGet);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});