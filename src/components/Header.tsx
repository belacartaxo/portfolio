import React from 'react';
import '../styles/Header.css';
import Logo from './Logo';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="Header">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
