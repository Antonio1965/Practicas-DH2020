import React from 'react';

const Button = ()=> {
    return (
        <li className="sub-menu">
        <a href="/" className="/">
          <i className="icon_document_alt"></i>
          <span>Formularios</span>
          <span className="menu-arrow arrow_carrot-right"></span>
        </a>
        <ul className="sub">
          <li><a className="" href="/">Elementos</a></li>
          <li><a className="" href="/">Validaciones</a></li>
        </ul>
      </li>
    )
}
export default Button;
