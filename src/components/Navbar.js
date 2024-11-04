import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="index-header">
        <Link to="/">
      <div className="logo">
        Brian's Cafe
      </div>
      </Link>
      <nav className={`nav-options ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Navbar;
