import React from 'react';
import './Header.scss';

const Header = ({ right }) => (
  <header className="Header">
    <a className="title">쨱쨱이</a>
    <div className="right">{right}</div>
  </header>
);

export default Header;
