import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>Meal DB</h1>
      </div>
      <div className="nav-menu ">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contuct</a>
        <a href="/">Blog</a>
      </div>
    </nav>
  );
};

export default Header;
