import React from 'react';

import HelloWorld from './HelloWorld';
import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';


function Website (){
    return (
        <div className = "container-fluid">
        <HelloWorld/>
         <NavBar/>
         <Content/>
         <Footer/>
      
         </div>
    )
}
export default Website;