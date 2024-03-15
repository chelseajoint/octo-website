// Header.js
import React from 'react';
import Nav from '../Nav/Nav';
import Auth from '../Auth/Auth';
import logo from '../../resource/octo.svg'

import './Header.scss';

const Header = ({ navItems }) => {
  return (
    <header>
      <div className='logo'>
      <img src={logo} alt='logo octo'/>
      </div>
      <Nav navItems={navItems}/>
      <Auth/>
    </header>
  );
};

export default Header;
