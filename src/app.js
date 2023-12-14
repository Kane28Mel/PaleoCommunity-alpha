const express = require('express');
const app = express();
const puerto = 80;
const UsuariosController = require('./controllers/UsuariosController');
const SeguidoresController = require('./controllers/SeguidoresController');
const CategoriasController = require('./controllers/CategoriasController');
const PublicacionesController = require('./controllers/PublicacionesController');
const NotificacionesController = require('./controllers/NotificacionesController');
const ForosController = require('./controllers/ForosController');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios/:id([0-9]+)', UsuariosController.itemPut);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

app.get('/seguidores', SeguidoresController.indexGet);
app.get('/seguidores/:id([0-9]+)', SeguidoresController.itemGet);
app.post('/seguidores', SeguidoresController.indexPost);
app.put('/seguidores/:id([0-9]+)', SeguidoresController.itemPut);
app.patch('/seguidores/:id([0-9]+)', SeguidoresController.itemPatch);

app.get('/categorias', CategoriasController.indexGet);
app.get('/categorias/:id([0-9]+)', CategoriasController.itemGet);
app.post('/categorias', CategoriasController.indexPost);
app.put('/categorias/:id([0-9]+)', CategoriasController.itemPut);
app.patch('/categorias/:id([0-9]+)', CategoriasController.itemPatch);

app.get('/publicaciones', PublicacionesController .indexGet);
app.get('/publicaciones/:id([0-9]+)', PublicacionesController .itemGet);
app.post('/publicaciones', PublicacionesController .indexPost);
app.put('/publicaciones/:id([0-9]+)', PublicacionesController .itemPut);
app.patch('/publicaciones/:id([0-9]+)', PublicacionesController .itemPatch);

app.get('/notificaciones', NotificacionesController .indexGet);
app.get('/notificaciones/:id([0-9]+)', NotificacionesController .itemGet);
app.post('/notificaciones', NotificacionesController .indexPost);
app.put('/notificaciones/:id([0-9]+)', NotificacionesController .itemPut);
app.patch('/notificaciones/:id([0-9]+)', NotificacionesController .itemPatch);

app.get('/foros', ForosController .indexGet);
app.get('/foros/:id([0-9]+)', ForosController .itemGet);
app.post('/foros', ForosController .indexPost);
app.put('/foros/:id([0-9]+)', ForosController .itemPut);
app.patch('/foros/:id([0-9]+)', ForosController .itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});