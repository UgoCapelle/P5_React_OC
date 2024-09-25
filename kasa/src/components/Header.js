import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa Logo" className="logo" />
      <nav>
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Accueil</Link></li>
          <li><Link to="/about" className="nav-link">À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
