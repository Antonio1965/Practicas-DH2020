const fs = require ('fs');
const path = require ('path');
const bcrypt = require ('bcrypt');


let usuariosJson = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
let usuarios = JSON.parse(usuariosJson);

module.exports = {
    index: function (req, res){
        res.render ('index');
    },
    register: function (req, res){
        res.render ('register');
    },
    save: function (req, res, next){
        //res.send (req.files); 
        let nuevoUsuario = {
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar:req.files[0].filename
        }
        usuarios.push(nuevoUsuario);
        fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios));
        res.render('confirm');    
    },
    login: function (req, res){
        res.render ('login');
    },
    verify: function (req, res){
        usuarios.forEach(function (elemento){
            if(elemento.email == req.body.email && bcrypt.compareSync(req.body.password, elemento.password)){
            res.render ('demo');
        } 

      });
      res.render('error')
    }
};