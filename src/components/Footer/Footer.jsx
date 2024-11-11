import React, { useState, useEffect, useContext } from "react";
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import logo from "../../imagenes/logo.png";

export default function Footer() {

  return (
    <>
    <footer className="footer">

      <div class="container-footer">
        <div className="titulo-footer">
        <h6>¡Conéctese con nosotros en las redes sociales!</h6>
        </div>
        <div className="redes">
          <div><FacebookIcon/></div>
          <div><InstagramIcon/></div>
          <div><TwitterIcon/></div>
        </div>
      </div>

      <div className="middle-footer">
        <div>
        <img src={logo} className="logo-footer"/>
        </div>
        <div>
        <h5>Nuestros productos</h5>
        <ul>
          <li>Tortas</li>
          <li>Sandwiches</li>
          <li>Facturas</li>
        </ul>
        </div>
        <div>
      <h5>Contactenos</h5>
      <ul>
          <li>Dirección: Av.Libertador 3542, CABA</li>
          <li>Whatsapp: 11-2372-3317</li>
          <li>Horarios: 08 a 20hs</li>
        </ul>
        </div>
      </div>

    <div className="down-footer">
      <p>© 2021 Nonna Julia.</p>
    </div>
    
    </footer>
    </>
  );
}

