import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/NavBar.css";

const NavBar = ({ background }) => {
  const brand =
    "https://www.qloud.ar/SITES/IMG/ryr-computacion-01-2021/206_07-11-2022-08-11-23-ryr-logo.png";

  return (
    <header className={`header background--${background}`}>
      
      <div className="header-container">
        
        {/* Botón de menú  */}
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
          <span>Menu</span>
        </div>

        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            <li className="products-item">
              <Link to="/products">
                Productos <span className="arrow"></span>
              </Link>
            </li>
            <li>
              <Link className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/products/celytablet">Celulares y Tablets</Link>
            </li>
            <li>
              <Link className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/products/pcs">PC</Link>
            </li>
            <li>
                <Link className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/products/notebooks">Noteboos</Link>
            </li>
          </ul>
        </nav>

        {/* logo de la marca */}
        <div className="logo-container">
          <Link to="/">
            <img src={brand} alt="logo" />
          </Link>
        </div>

        {/* cart widget */}
        <Link to="/cart">
          <CartWidget />
        </Link>
          
      </div>
    </header>
  );
};

export default NavBar;
