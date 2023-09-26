import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Menu.scss';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar-1295394_960_720.webp';


function Menu() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="container">
      <div className={`menu ${isMenuActive ? 'active' : ''}`}>
        <div className="logo-container">
          <Link to="/logopage">
            <img className="logo" src={logo} alt="Logo UAM" />
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="menu-icon">&#9776;</div>
          <span className="dropdown-icon">&#9660;</span>  
        </div>
        <div className={`dropdown-content ${isMenuActive ? 'active' : ''}`}>
          <ul>
            <li><a href="#seccion1" >Flexbox</a></li>
            <li><a href="#seccion2">Contact</a></li>
            <li><a href="#seccion3">Products</a></li>
            <li><a href="#seccion4">Seccion 4</a></li>
            <li><a href="#seccion5">Seccion 5</a></li>
          </ul>
        </div>
        <div className="avatar-container">
          <img src={avatar} className="avatar" alt="Foto de perfil" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
