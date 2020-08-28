const express = require('express');
const path = require ('path');
const router = express.Router();
const userController = require ('../controller/userController');
const multer = require ('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/uploads/avatars'))
    },
    filename: function (req, file, cb) {              // Copiar disckstorage de la pagina MULTER NPM.
      cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })
  
 router.get('/', userController.index); // ---> Página de bienvenida

 router.get('/register', userController.register); // ---> Formulario de Registro
 router.post('/register', upload.any() ,userController.save); // ---> Que pasa cuando enviamos el form de registro?

 router.get('/login', userController.login); // ---> Formulario de Login
 router.post('/login', userController.verify); // ---> Que pasa cuando enviamos el form de login?

module.exports = router;