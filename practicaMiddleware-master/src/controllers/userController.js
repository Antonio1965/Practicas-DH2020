const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {chck, validationResult, body } = require('express-validator');

let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = {
    index: function(req, res) {
        res.render('index');
    },
    register: function(req, res) {
        res.render('register');
    },
    save: function(req, res, next) {
        let errors = (validationResult(req));
        if(errors.isEmpty()){
        let nuevoUsuario = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.files[0].filename
        };
        usuarios.push(nuevoUsuario);
        fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios));
        return res.redirect('welcome');
    } else {
        res.render ('register',{
            errors:errors.mapped(),
            old:req.body
        })
    }
    },
    login: function(req, res) {
        res.render('login')
    },
    verify: function(req, res) {
        usuarios.forEach(function(elemento) {
            if(elemento.email == req.body.email && bcrypt.compareSync(req.body.password, elemento.password)) {
                return res.render('demo', {
                    check: bcrypt.compareSync(req.body.password, elemento.password)
                });
            }
        });
        res.render('error');
    }
}