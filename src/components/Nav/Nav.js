// Nav.js
import React from 'react';
import Button from '../Button/Button';
import logo from '../../resource/octo.svg';

import './Nav.scss';

const Nav = ({ navItems }) => {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt='logo octo'/>
      </div>
      <ul>
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
