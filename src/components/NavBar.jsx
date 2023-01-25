import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/NavBar.css'
import CartWidget from './CartWidget';

const NavBar = ({background})=>{
    return(
        <header className={`header navbar navbar-expand-lg navbar-light bg-light background--${background}`}>
        <div className="container">
            {/* Boton de menu*/}
            <div className="navbar-brand">
            <small className="navbar-toggler-icon"></small>        
            </div>
            
            {/*links de navegacion*/}
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/">
                            Productos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Ofertas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contacto</a>
                    </li>
                </ul>
              {/*<form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>*/}
    </div>
            </nav>           
            
            {/* logo de la marca*/}
            <div className="logo-container">
                {/* <img src={brand} alt="logo"/> */}
            </div>

            {/* cart widget */}
            <CartWidget/>
        </div>

        </header>
        )
};

export default NavBar;