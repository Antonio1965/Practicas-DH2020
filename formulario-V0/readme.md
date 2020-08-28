# Cuarentenial register

Aquí tienen el proyecto necesario para poder ir haciendo la práctica en clase. El detalle de vistas que tienen en la carpeta *views* es el siguiente:

- ```index.ejs``` → Página de bienvenida
- ```register.ejs``` → Formulario de registro
- ```confirm.ejs``` → Confirmación del registro
- ```login.ejs``` → Formulario de Login
- ```demo.ejs``` → Respuesta de habernos logueado
- ```error.ejs``` → Por si hubo un error al habernos logueado

**🔥 Algunas mejoras de la versión anterior**
- Se creó una nueva ruta get que retorna la confirmación, para que no se haga un render en el register y quede pegado el método
- El metodo save ahora hace un redirect y no un render
- Cambiamos algunos nombres de carpetas que estaban raros:
    - router → routes
    - controller → controllers