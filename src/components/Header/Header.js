// Header.js
import React from 'react';
import Nav from '../Nav/Nav';
import Auth from '../Auth/Auth';

import './Header.scss';

const Header = ({ navItems }) => {
  return (
    <header>
      <Nav navItems={navItems}/>
      <Auth/>
    </header>
  );
};

export default Header;
