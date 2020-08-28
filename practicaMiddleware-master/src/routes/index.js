const path = require('path');
const fs = require('fs');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');
const registerMiddleware = require ('../middlewares/registerMiddleware');
const registerValidation = require ('../validations/registerValidation');
const {check, validationResult, body} = require ('express-validator');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/avatars'))
    },
    filename: function (req, file, cb) {
        cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })
  
router.get('/', userController.index);

router.get('/register', userController.register);
router.post('/register', upload.any(), [
  check('email') 
    .isEmail().withMessage( 'Esto no es mi email'),
  check('password')
    .isLength( {min:6, max:16} ).withMessage('La contraseña debe tener de 6 a 16 caracteres')
 
  ], registerMiddleware, userController.save);

router.get('/welcome', (req, res) => res.render('confirm'));

router.get('/login', userController.login);
router.post('/login', userController.verify);

module.exports = router;