import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/category/labios">Labios</Link></li>
        <li><Link to="/category/ojos">Ojos</Link></li>
        <li><Link to="/category/rostro">Rostro</Link></li>
      </ul>
      <div className="navbar-logo">
        <Link to="/">
          <img src="/assets/logo-doll.png" alt="Logo" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
