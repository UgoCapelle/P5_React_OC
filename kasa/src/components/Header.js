import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;