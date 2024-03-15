// Button.js
import React from 'react';

import './Button.scss';

const Button = ({ name, title, onClick }) => {
  return (
    <button className={name} onClick={onClick}>{title}</button>
  );
};

export default Button;
