import React from 'react'

let username = 'Alejandro';
let nombre = 'Sanchez';
let avatar = 'https://i.pravatar.cc/150?img=39';

function Navbar() {
   return (
       
       <nav class="navbar navbar-light bg-light">
           <a class="navbar-brand" href="#">
           <img src={avatar} width="30" height="30" class="d-inline-block align-top rounded-circle mr-3" />
            {username} {''}  {nombre}
           </a>
       </nav>    
   )
}

export default Navbar

 