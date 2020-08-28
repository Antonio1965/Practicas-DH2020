const path = require('path');
const fs = require('fs');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');

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
router.post('/register', upload.any(), userController.save);
router.get('/welcome', (req, res) => res.render('confirm'));

router.get('/login', userController.login);
router.post('/login', userController.verify);

module.exports = router;