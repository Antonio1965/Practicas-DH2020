import React from 'react';
import Button from './AsideBar/Button';

function AsideBar(){
    return(
    <aside>

      <div id="sidebar" className="nav-collapse ">
       
        <ul className="sidebar-menu">
          <li className="active">
            <a className="" href="/">
              <i className="icon_house_alt"></i>
              <span>Inicio</span>
            </a>
          </li>
         <Button/>
         
          <li className="sub-menu">
            <a href="/" className="">
              <i className="icon_desktop"></i>
              <span>UI</span>
              <span className="menu-arrow arrow_carrot-right"></span>
            </a>
            <ul className="sub">
              <li><a className="" href="/">Elementos</a></li>
              <li><a className="" href="/">Botones</a></li>
              <li><a className="" href="/">Grilla</a></li>
            </ul>
          </li>
          <li>
            <a className="" href="/">
              <i className="icon_genius"></i>
              <span>Herramientas</span>
            </a>
          </li>
          <li>
            <a className="" href="/">
              <i className="icon_piechart"></i>
              <span>Graficos</span>
            </a>
          </li>

          <li className="sub-menu">
            <a href="/" className="">
              <i className="icon_table"></i>
              <span>Tablas</span>
              <span className="menu-arrow arrow_carrot-right"></span>
            </a>
            <ul className="sub">
              <li><a className="" href="/">Tablas basica</a></li>
            </ul>
          </li>

          <li className="sub-menu">
            <a href="/" className="">
              <i className="icon_documents_alt"></i>
              <span>Otras paginas</span>
              <span className="menu-arrow arrow_carrot-right"></span>
            </a>
            <ul className="sub">
              <li><a className="" href="/">Perfil</a></li>
              <li><a className="" href="/"><span>Login</span></a></li>
              <li><a className="" href="/"><span>Contacto</span></a></li>
            </ul>
          </li>

        </ul>
       </div>
    </aside>
    )
}
export default AsideBar;