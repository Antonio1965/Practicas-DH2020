// Requerimos express y su funcion de alto nivel
const express = require('express');
const app = express();

// Aclaramos cual será el motor de template
app.set('view engine', 'ejs');

// Aclaramos que voy a tener una carpeta estática: public
app.use(express.static('public'));

// Creamos rutas y renderizamos una vista
app.get('/', function(req, res) {
    res.render('prueba.ejs');
})

// Ponemos el servidor a escuchar en el puerto 3000...
app.listen(3000, function() {
    console.log("El servidor está corriendo en el puerto 3000")
})