// Nav.js
import React, { useState } from 'react';
import Button from '../Button/Button';
import logo from '../../resource/octo.svg';

import './Nav.scss';

const Nav = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav>
          <div className='logo'>
              <img src={logo} alt='logo octo'/>
          </div>
          <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
          <ul className={isMenuOpen ? 'open' : ''}>
              {navItems.map((item, index) => (
                  <li key={index}>
                      <Button name="buttonNav" title={item.title} onClick={() => window.location.href = item.link} />
                  </li>
              ))}
          </ul>
      </nav>
  );
};

export default Nav;
