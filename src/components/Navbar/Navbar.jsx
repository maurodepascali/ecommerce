import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import logo from "../../imagenes/logo.png";
import {Link, useHistory} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./Navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

export default function Navbar({cantidad}) {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleOpenMenu = (e) => {
    setAnchorEl(e.target);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleChange = (e) => {
    if (e.target.value)
      history.push(`/category/${e.target.value}`)
  }

  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/">
            <img src={logo} className="logo" alt="logo"/>
          </Link>
        </div>

        {/* Botón hamburguesa para móvil */}
        <div className="mobile-menu-button">
          <IconButton onClick={toggleMobileMenu}>
            <MenuIcon />
          </IconButton>
        </div>
        
        {/* Menú de navegación */}
        <div className={`right ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" className="linkSection">
                INICIO
              </Link>
            </li>
            <li>
              <Link to="#" className="linkSection">
                NOSOTROS
              </Link>
            </li>
            <li aria-controls='menu' onClick={handleOpenMenu}>
              <Link to="#" className="linkSection">
                PRODUCTOS
              </Link>
            </li>
            <Menu 
              className="dropdown"
              id='menu' 
              onClick={handleMenuClose} 
              onChange={handleChange}
              anchorEl={anchorEl} 
              open={Boolean(anchorEl)}
            >
              <MenuItem><Link to="/category/Tortas" className="linkCategory"><p>Tortas</p></Link></MenuItem>
              <MenuItem><Link to="/category/Facturas" className="linkCategory"><p>Facturas</p></Link></MenuItem>
              <MenuItem><Link to="/category/Sandwiches" className="linkCategory"><p>Sandwiches</p></Link></MenuItem>
            </Menu>
            <li>
              <Link to="#" className="linkSection">
                CONTACTO
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <CartWidget cantidad={cantidad}></CartWidget>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}