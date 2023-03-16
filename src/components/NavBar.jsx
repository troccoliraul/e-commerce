import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./styles/NavBar.css";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = ({ background }) => {
  const brand =
    "https://www.qloud.ar/SITES/IMG/ryr-computacion-01-2021/206_07-11-2022-08-11-23-ryr-logo.png";

  return (

     <Navbar bg="black" variant="dark" expand="lg"> 
       <Container> 
         <Navbar.Brand className="logo-container" ><Link to="/"> 
              <img src={brand} alt="logo" /> 
            </Link></Navbar.Brand> 
         <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
         <Navbar.Collapse id="basic-navbar-nav"> 
           <Nav className="me-auto">             
             <NavDropdown title="Productos" id="basic-nav-dropdown">
               <NavDropdown.Item ><Link to="/products/celytablet">Celulares y Tablets</Link></NavDropdown.Item> 
               <NavDropdown.Item><Link to="/products/pcs">PC</Link></NavDropdown.Item>
               <NavDropdown.Item><Link to="/products/notebooks">Noteboos</Link></NavDropdown.Item>
               <NavDropdown.Divider /> 
               <NavDropdown.Item><Link to="/products">Todos los productos</Link></NavDropdown.Item> 
             </NavDropdown> 
            <Nav.Link href="#link"><Link to="/contacto">Contacto</Link></Nav.Link> 
            
           </Nav> 
          {/* cart widget */}
          <Link to="/cart"> 
            <CartWidget /> 
          </Link> 
         </Navbar.Collapse>
      </Container>
     </Navbar>
     



    // <header className={`header background--${background}`}>
      
    //   <div className="header-container">
        
    //     {/* Botón de menú  */}
    //     <div className="menu-button">
    //       <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
    //       <span>Menu</span>
    //     </div>

    //     {/* links de navegación */}
    //     <Nav class="navbar navbar-expand-lg bg-body-tertiary">
    //       <ul className="nav-container">
    //         <li className="products-item">
    //           <Link to="/products">
    //             Productos <span className="arrow"></span>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/products/celytablet">Celulares y Tablets</Link>
    //         </li>
    //         <li>
    //           <Link to="/products/pcs">PC</Link>
    //         </li>
    //         <li>
    //             <Link to="/products/notebooks">Noteboos</Link>
    //         </li>
    //       </ul>
    //     </Nav>

    //     {/* logo de la marca */}
    //     <div className="logo-container">
    //       <Link to="/">
    //         <img src={brand} alt="logo" />
    //       </Link>
    //     </div>

    //     {/* cart widget */}
    //     <Link to="/cart">
    //       <CartWidget />
    //     </Link>
          
    //   </div>
    // </header>
  );
};

export default NavBar;
