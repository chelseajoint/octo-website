// Nav.js
import React from 'react';

const Nav = ({ navItems }) => {
  return (
    <nav>
    <ul>
      {navItems.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
        </li>
      ))}
    </ul>
  </nav>
  );
};

export default Nav;
