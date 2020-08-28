const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');
const accessMiddleware = require ('./middlewares/accessMiddleware');
const registerMiddleware = require ('./middlewares/registerMiddleware');



app.use(express.static(path.join(__dirname,'../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(accessMiddleware);

app.use('/', indexRouter)

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"))