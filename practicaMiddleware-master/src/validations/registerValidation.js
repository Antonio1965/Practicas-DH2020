const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('email')
      .isEmail().withMessage('Esto no esta ni cerca de ser un email, Bro'),
    check('password')
      .isLength({min: 10, max: 16}).withMessage('Dale, poné una contraseña digna')
]