import React from 'react'
import FooterLiks from './FooterLinks';
import FooterLinks from './FooterLinks';
const footer = "Tsutsumi Antonio";

function Footer() {
   return (
     <footer>
       <div class="row text-center text-xs-center text-sm-left text-md-left bg-light">
         <FooterLinks/>
         <FooterLinks/>
         <FooterLinks/>
       </div>
     </footer>
   )
}
export default Footer
