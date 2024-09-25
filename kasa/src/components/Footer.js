import React from 'react';
import './Footer.scss';
import logoB from '../assets/logoB.png'; // Assurez-vous que le chemin du logo est correct

function Footer() {
  return (
    <footer className="footer">
      <img src={logoB} alt="Logo Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;