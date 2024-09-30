import React from 'react';
import './Footer.scss';
import logoB from '../assets/logoB.png'; 

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <img src={logoB} alt="Logo Kasa" className="footer-logo" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;