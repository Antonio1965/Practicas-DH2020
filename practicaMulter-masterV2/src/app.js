const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./router/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', indexRouter)

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"))