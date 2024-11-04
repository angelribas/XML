// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} Bryan's Café. All rights reserved. | 
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
