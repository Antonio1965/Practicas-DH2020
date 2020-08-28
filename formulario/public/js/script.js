function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    let formulario = qs('form');
    
    let labelNombre = qs("label[for='nombre']");
    let inputNombre = qs('input#nombre');
    let errorNombre = qs('#errNombre');
    
    let inputApellido = qs('input#apellido');
    let errorApellido = qs('#errApellido');
    
    let inputEmail = qs('input#email');
    let errorEmail = qs('#errEmail');
    
    let inputPassword = qs('input#password');
    let errorPassword = qs('#errPassword');
    
    let inputRepassword = qs('input#repassword');
    let errorRepassword = qs('#errRepassword');

    let btnEnviar = qs("form button[type='submit']");

    let regexMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    let btnEye = qs("#eye");

    btnEye.addEventListener('click', function() {
        btnEye.classList.toggle('hide');
        if(inputPassword.getAttribute('type') == "password") {
            inputPassword.setAttribute('type', 'text');
        } else {
            inputPassword.setAttribute('type', 'password');
        }
    })
    
    btnEnviar.addEventListener('click', function(event) {
        event.preventDefault();

        let errores = {};

        if(inputNombre.value.length < 2) {
            errores.nombre = "Como mínimo 2 caracteres";
        }
        if(inputApellido.value.length < 2) {
            errores.apellido = "Como mínimo 2 caracteres";
        }
        if(inputEmail.value.match(regexMail) == null) {
            errores.email = "Tenés que ingresar un email válido";
        }
        if(inputPassword.value.length < 1) {
            errores.password = 'Este campo es obligatorio';
        } else {
            if(inputPassword.value.match(regexPassword) == null) {
                errores.password = "La contraseña tiene que tener: 1 minus, y mayus y un numero";
            } 
        }
        if(inputRepassword.value < 1) {
           errores.repassword = 'Este campo es obligatorio';
        } else {
            if(inputPassword.value != inputRepassword.value) {
                errores.repassword = "Las contraseñas deben coincidir"
            }
        }

        if(Object.keys(errores).length >= 1) {
            if(errores.nombre) {
                labelNombre.classList.remove('success')
                labelNombre.classList.add('error')
                errorNombre.innerText = errores.nombre;
            } else {
                labelNombre.classList.remove('error')
                labelNombre.classList.add('success')
                errorNombre.innerText = '';
            }
            // errorNombre.innerText = (errores.nombre) ? errores.nombre : '';
            // errorApellido.innerText = (errores.apellido) ? errores.apellido : '';
            // errorEmail.innerText = (errores.email) ? errores.email : '';
            // errorPassword.innerText = (errores.password) ? errores.password : '';
            // errorRepassword.innerText = (errores.repassword) ? errores.repassword : '';
        } else {
            // envio el formulario
            alert('El formulario se ha enviado')
        }

    })
})