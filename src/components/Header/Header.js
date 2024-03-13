// Header.js
import React from 'react';
import Nav from '../Nav/Nav';
import Auth from '../Auth/Auth';

const Header = ({ navItems }) => {
  return (
    <header>
      <div className='logo'>
      <img src='./resource/logo.svg' alt='logo octo'/>
      </div>
      <Nav navItems={navItems}/>
      <Auth/>
    </header>
  );
};

export default Header;
